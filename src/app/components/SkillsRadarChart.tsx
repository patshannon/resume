'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { hardSkillsData, softSkillsData } from '@/lib/skillsData';
import { MotionDiv } from '../motion';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function SkillsRadarChart() {
  const hardChartRef = useRef<ChartJS<'radar'>>(null);
  const softChartRef = useRef<ChartJS<'radar'>>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Stunning gradient configuration
  const createGradient = (ctx: CanvasRenderingContext2D, color1: string, color2: string) => {
    const gradient = ctx.createRadialGradient(
      ctx.canvas.width / 2,
      ctx.canvas.height / 2,
      0,
      ctx.canvas.width / 2,
      ctx.canvas.height / 2,
      ctx.canvas.width / 2
    );
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  useEffect(() => {
    // Apply gradients to Hard Skills chart - light theme for dark background
    if (hardChartRef.current) {
      const ctx = hardChartRef.current.ctx;
      const gradient = createGradient(ctx, 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.05)');
      hardChartRef.current.data.datasets[0].backgroundColor = gradient;
      hardChartRef.current.data.datasets[0].borderColor = 'rgba(255, 255, 255, 0.8)';
      hardChartRef.current.data.datasets[0].pointBackgroundColor = '#ffffff';
      hardChartRef.current.data.datasets[0].pointBorderColor = '#27272a';
      hardChartRef.current.data.datasets[0].pointHoverBackgroundColor = '#27272a';
      hardChartRef.current.data.datasets[0].pointHoverBorderColor = '#ffffff';
      hardChartRef.current.update();
    }

    // Apply gradients to Soft Skills chart - light theme for dark background
    if (softChartRef.current) {
      const ctx = softChartRef.current.ctx;
      const gradient = createGradient(ctx, 'rgba(212, 212, 216, 0.2)', 'rgba(212, 212, 216, 0.05)');
      softChartRef.current.data.datasets[0].backgroundColor = gradient;
      softChartRef.current.data.datasets[0].borderColor = 'rgba(212, 212, 216, 0.8)';
      softChartRef.current.data.datasets[0].pointBackgroundColor = '#d4d4d8';
      softChartRef.current.data.datasets[0].pointBorderColor = '#27272a';
      softChartRef.current.data.datasets[0].pointHoverBackgroundColor = '#27272a';
      softChartRef.current.data.datasets[0].pointHoverBorderColor = '#d4d4d8';
      softChartRef.current.update();
    }
  }, [isMobile]);

  const chartOptions: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: isMobile ? 20 : 10,
    },
        scales: {
      r: {
        min: 0,
        max: 100,
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent',
          color: 'rgba(212, 212, 216, 0.6)',
          font: {
            size: isMobile ? 9 : 11,
            weight: 'lighter',
          },
        },
        grid: {
          color: 'rgba(212, 212, 216, 0.15)',
          circular: true,
        },
        pointLabels: {
          color: '#e4e4e7',
          font: {
            size: isMobile ? 10 : 13,
            weight: 'normal',
          },
          padding: isMobile ? 20 : 15,
          callback: function(label) {
            // Wrap long labels on mobile
            if (isMobile && typeof label === 'string' && label.length > 12) {
              const words = label.split(' ');
              if (words.length > 1) {
                return words;
              }
            }
            return label;
          },
        },
        angleLines: {
          color: 'rgba(212, 212, 216, 0.15)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(39, 39, 42, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed.r}%`;
          },
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    elements: {
      line: {
        borderWidth: 3,
        tension: 0.2,
      },
      point: {
        radius: 5,
        hoverRadius: 8,
        borderWidth: 3,
        hoverBorderWidth: 4,
      },
    },
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-12 items-center justify-center px-4">
      {/* Hard Skills Chart */}
      <MotionDiv
        className="w-full max-w-md"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          <h3 className="text-2xl font-bold mb-6 text-center text-zinc-100">
            Hard Skills
          </h3>

          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-zinc-700/50 shadow-xl hover:border-zinc-600/50 transition-all duration-500">
            <Radar ref={hardChartRef} data={hardSkillsData} options={chartOptions} />
          </div>

          <p className="text-xs text-zinc-400 text-center mt-4 font-light">
            Technical proficiency across key areas
          </p>
        </div>
      </MotionDiv>

      {/* Soft Skills Chart */}
      <MotionDiv
        className="w-full max-w-md"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative">
          <h3 className="text-2xl font-bold mb-6 text-center text-zinc-300">
            Soft Skills
          </h3>

          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-zinc-700/50 shadow-xl hover:border-zinc-600/50 transition-all duration-500">
            <Radar ref={softChartRef} data={softSkillsData} options={chartOptions} />
          </div>

          <p className="text-xs text-zinc-400 text-center mt-4 font-light">
            Professional capabilities and interpersonal strengths
          </p>
        </div>
      </MotionDiv>
    </div>
  );
}
