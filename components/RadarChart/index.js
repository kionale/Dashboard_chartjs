import React from 'react'
import styles from './RadarChart.module.css'
import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default function RadarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})
    
    useEffect(() => {
        setChartData({
            labels: ['Special Food Services', 'Drinking Places', 'Full-Service Restaurants', 'Limited-service Eating Places'],
            datasets: [
                {
                    label: '$ of Sales',
                    data: [598863, 216893, 3571835, 3626528],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
            ],
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: "Food services and drinking places sales,in thousands of dollars"
                }
            },
            maintainAspectRatio: false,
            responsive: true

        })
    }, [])
    
    return (
        <div className={styles.container}>
            <Radar data={chartData} options={chartOptions } />
        </div>
    )
}
