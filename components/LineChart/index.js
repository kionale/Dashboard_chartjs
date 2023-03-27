import React from 'react'
import styles from './LineChart.module.css'
import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function LineChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})
    useEffect(() => {
        setChartData({
            labels: ['2013', '2015', '2017', '2019', '2021'],
            datasets: [
                {
                    label: 'Operating revenue',
                    data: [5217.0, 6738.1, 8047.0, 9374.9, 11268.8],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }

            ],
        })

        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Film, television and video production in billion',
                },
            },

        })

    }, [])

    return (
        <div className={styles.container}>
            <Line data={chartData} options={chartOptions} />
        </div>
    )
}
