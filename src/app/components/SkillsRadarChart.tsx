'use client';

import { useEffect, useRef } from 'react';
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
    // Apply gradients to Hard Skills chart
    if (hardChartRef.current) {
      const ctx = hardChartRef.current.ctx;
      const gradient = createGradient(ctx, 'rgba(99, 102, 241, 0.4)', 'rgba(99, 102, 241, 0.1)');
      hardChartRef.current.data.datasets[0].backgroundColor = gradient;
      hardChartRef.current.data.datasets[0].borderColor = 'rgba(99, 102, 241, 0.8)';
      hardChartRef.current.data.datasets[0].pointBackgroundColor = 'rgb(99, 102, 241)';
      hardChartRef.current.data.datasets[0].pointBorderColor = '#fff';
      hardChartRef.current.data.datasets[0].pointHoverBackgroundColor = '#fff';
      hardChartRef.current.data.datasets[0].pointHoverBorderColor = 'rgb(99, 102, 241)';
      hardChartRef.current.update();
    }

    // Apply gradients to Soft Skills chart
    if (softChartRef.current) {
      const ctx = softChartRef.current.ctx;
      const gradient = createGradient(ctx, 'rgba(168, 85, 247, 0.4)', 'rgba(168, 85, 247, 0.1)');
      softChartRef.current.data.datasets[0].backgroundColor = gradient;
      softChartRef.current.data.datasets[0].borderColor = 'rgba(168, 85, 247, 0.8)';
      softChartRef.current.data.datasets[0].pointBackgroundColor = 'rgb(168, 85, 247)';
      softChartRef.current.data.datasets[0].pointBorderColor = '#fff';
      softChartRef.current.data.datasets[0].pointHoverBackgroundColor = '#fff';
      softChartRef.current.data.datasets[0].pointHoverBorderColor = 'rgb(168, 85, 247)';
      softChartRef.current.update();
    }
  }, []);

  const chartOptions: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        min: 0,
        max: 100,
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent',
          color: 'rgba(255, 255, 255, 0.6)',
          font: {
            size: 11,
            weight: 'lighter',
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          circular: true,
        },
        pointLabels: {
          color: 'rgba(255, 255, 255, 0.9)',
          font: {
            size: 13,
            weight: 'normal',
          },
          padding: 15,
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(24, 24, 27, 0.95)',
        titleColor: '#fff',
        bodyColor: '#fff',
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
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full scale-90 -z-10" />

          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
            Hard Skills
          </h3>

          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 shadow-xl hover:shadow-indigo-500/20 transition-shadow duration-500">
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
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full scale-90 -z-10" />

          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Soft Skills
          </h3>

          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 shadow-xl hover:shadow-purple-500/20 transition-shadow duration-500">
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
