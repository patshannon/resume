'use client';

import { useState, useEffect } from 'react';
import { MotionDiv } from '../motion';

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionHeatmapProps {
  weeks: ContributionWeek[];
}

export default function ContributionHeatmap({ weeks }: ContributionHeatmapProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get intensity color based on contribution count
  const getIntensityColor = (count: number): string => {
    if (count === 0) return 'rgba(39, 39, 42, 0.5)'; // zinc-800 with opacity
    if (count < 3) return 'rgba(16, 185, 129, 0.3)'; // emerald, light
    if (count < 6) return 'rgba(16, 185, 129, 0.5)'; // emerald, medium
    if (count < 10) return 'rgba(16, 185, 129, 0.7)'; // emerald, strong
    return 'rgba(16, 185, 129, 1)'; // emerald, full
  };

  const handleMouseMove = (e: React.MouseEvent, day: ContributionDay) => {
    setHoveredDay(day);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredDay(null);
  };

  // Get month labels from the weeks
  const getMonthLabels = () => {
    const labels: { month: string; weekIndex: number }[] = [];
    let currentMonth = '';

    weeks.forEach((week, index) => {
      const firstDay = week.contributionDays[0];
      if (firstDay) {
        const date = new Date(firstDay.date);
        const month = date.toLocaleDateString('en-US', { month: 'short' });

        if (month !== currentMonth && (index === 0 || index % 4 === 0)) {
          labels.push({ month, weekIndex: index });
          currentMonth = month;
        }
      }
    });

    return labels;
  };

  const monthLabels = getMonthLabels();

  // For mobile, show last 26 weeks (6 months)
  // For desktop, show all 52 weeks (1 year)
  const displayWeeks = isMobile ? weeks.slice(-26) : weeks;
  const cellSize = isMobile ? 8 : 12;
  const cellGap = isMobile ? 2 : 3;

  return (
    <div className="relative w-full overflow-x-auto">
      <MotionDiv
        className="inline-block min-w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Month labels */}
        <div className="flex mb-2 pl-8">
          {monthLabels.map((label, index) => (
            <div
              key={index}
              className="text-xs text-zinc-400"
              style={{
                marginLeft: index === 0 ? 0 : `${label.weekIndex * (cellSize + cellGap) - (monthLabels[index - 1]?.weekIndex || 0) * (cellSize + cellGap)}px`,
              }}
            >
              {label.month}
            </div>
          ))}
        </div>

        {/* Contribution grid */}
        <div className="flex">
          {/* Day labels */}
          <div className="flex flex-col justify-around mr-2 text-xs text-zinc-400">
            {!isMobile && (
              <>
                <div>Mon</div>
                <div>Wed</div>
                <div>Fri</div>
              </>
            )}
          </div>

          {/* Weeks grid */}
          <div className="flex gap-[2px] md:gap-[3px]">
            {displayWeeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[2px] md:gap-[3px]">
                {week.contributionDays.map((day, dayIndex) => (
                  <MotionDiv
                    key={day.date}
                    className="rounded-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-emerald-400"
                    style={{
                      width: `${cellSize}px`,
                      height: `${cellSize}px`,
                      backgroundColor: getIntensityColor(day.contributionCount),
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.2,
                      delay: (weekIndex * 7 + dayIndex) * 0.001,
                    }}
                    onMouseEnter={(e) => handleMouseMove(e, day)}
                    onMouseMove={(e) => handleMouseMove(e, day)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-4 text-xs text-zinc-400">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 5, 8, 12].map((count) => (
              <div
                key={count}
                className="rounded-sm"
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: getIntensityColor(count),
                }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </MotionDiv>

      {/* Tooltip */}
      {hoveredDay && (
        <div
          className="fixed z-50 pointer-events-none bg-zinc-900 text-zinc-50 px-3 py-2 rounded-lg shadow-xl border border-zinc-700 text-sm"
          style={{
            left: `${mousePosition.x + 10}px`,
            top: `${mousePosition.y - 40}px`,
          }}
        >
          <div className="font-semibold">
            {hoveredDay.contributionCount} contribution{hoveredDay.contributionCount !== 1 ? 's' : ''}
          </div>
          <div className="text-xs text-zinc-400">
            {new Date(hoveredDay.date).toLocaleDateString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </div>
        </div>
      )}
    </div>
  );
}
