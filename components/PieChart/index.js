import React from 'react'
import { useState, useEffect } from 'react'
import styles from './PieChart.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    useEffect(() => {
        setChartData({
            labels: ['Unemployment rate', 'Participant rate', 'Employment rate'],
            datasets: [
                {
                    label: 'Rate %',
                    data: [9.9, 66.1, 59.5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                      
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                     
                    ],
                    borderWidth: 1,
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Labour force characteristics in February 2023',
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
        
    },[])
  return (
      <div className={styles.container}>
          <Pie data={chartData} options={chartOptions} />
    </div>
  )
}
