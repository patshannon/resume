'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MotionDiv, AnimatePresence } from '../motion';

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  // For mobile, show last 26 weeks (6 months)
  // For desktop, show all 52 weeks (1 year)
  const displayWeeks = isMobile ? weeks.slice(-26) : weeks;
  const cellSize = isMobile ? 8 : 12;
  const cellGap = isMobile ? 2 : 3;

  // Get month labels from the weeks - GitHub style (at start of month)
  const getMonthLabels = () => {
    const labels: { month: string; weekIndex: number }[] = [];
    let currentMonth = '';
    let lastLabelWeek = -2; // Track last label position to avoid overlap

    displayWeeks.forEach((week, index) => {
      const firstDay = week.contributionDays[0];
      if (firstDay) {
        const date = new Date(firstDay.date);
        const month = date.toLocaleDateString('en-US', { month: 'short' });

        // Only add label if month changed AND there's enough space from last label
        if (month !== currentMonth && (index - lastLabelWeek) >= 2) {
          labels.push({ month, weekIndex: index });
          currentMonth = month;
          lastLabelWeek = index;
        } else if (month !== currentMonth) {
          // Month changed but not enough space, just update currentMonth
          currentMonth = month;
        }
      }
    });

    return labels;
  };

  const monthLabels = getMonthLabels();

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
        <div className="relative mb-2" style={{ height: '20px' }}>
          {monthLabels.map((label, index) => (
            <div
              key={index}
              className="absolute text-xs text-zinc-400"
              style={{
                left: `${label.weekIndex * (cellSize + cellGap)}px`,
              }}
            >
              {label.month}
            </div>
          ))}
        </div>

        {/* Contribution grid */}
        <div className="flex">
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
      {mounted && createPortal(
        <AnimatePresence>
          {hoveredDay && (
            <MotionDiv
              className="fixed z-[9999] pointer-events-none bg-zinc-900 text-zinc-50 px-3 py-2 rounded-lg shadow-xl border border-zinc-700 text-sm whitespace-nowrap"
              style={{
                left: `${Math.max(10, mousePosition.x + 10)}px`,
                top: `${Math.max(10, mousePosition.y - 50)}px`,
              }}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
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
            </MotionDiv>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
