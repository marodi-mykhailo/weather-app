import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../redux/store";
import {WeatherForOneLocationResponseType} from "../../../../api/weather.api";
import {Bar} from "react-chartjs-2";

const HourlyChart = () => {
    const weather = useSelector<AppRootStateType, WeatherForOneLocationResponseType>(state => state.cityWeather)

    const getTime = (diff: number) => {
        return new Date(Date.now() + (diff * 60 * 60 * 1000)).toLocaleTimeString('en-US',
            {hour: 'numeric', hour12: true});
    }

    const data = {
        labels: [`${getTime(0)}`, `${getTime(2)}`, `${getTime(4)}`,
            `${getTime(6)}`, `${getTime(8)}`, `${getTime(10)}`],
        datasets: [
            {
                type: "bar",
                label: 'Humidity',
                data: weather.hourly?.filter((item, i) => i % 2 === 0).map(day => day.humidity),
                backgroundColor: ['rgb(248,197,0)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.5)'
                    , 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.5)'
                ],
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
                barPercentage: 0.3,
                fontColor: "#fff"
            },
        ],
    }

    const options = {
        responsive: true,
        legend: {
            labels: {
                fontColor: '#fff'
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: '#fff',
                        beginAtZero: true
                    },
                },
            ],
            xAxes: [{
                ticks: {
                    fontColor: '#fff'
                },
            }]
        },
        title: {
            display: true,
            position: "top",
            fontColor: "#fff",
            fontSize: 18,
            text: 'Chance of raine'
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem: any, data: any) {
                    return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                }
            }
        },
    }

    return (
        <div>
            <Bar data={data} options={options}/>
        </div>
    );
};

export default HourlyChart;
