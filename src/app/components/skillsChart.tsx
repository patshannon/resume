"use client"
import Chart from 'chart.js/auto'
import { Radar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default function SkillsChart({data}) {
  return (
<Radar
  data={data}
  plugins={[ChartDataLabels]}
  options={{
    events: null,
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 2
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
          stepSize: 100
        },
        angleLines: {
          display: true
        },
        pointLabels: {
          color: 'rgb(24, 24, 27)',
          font: {
            size: 14,
            weight: 'bold',
          }
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  }
  }
/>
  )
}