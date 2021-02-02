import React from 'react';
import {Bar} from "react-chartjs-2";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../redux/store";
import {WeatherForOneLocationResponseType} from "../../../../api/weather.api";

const DailyChart = () => {
    const weather = useSelector<AppRootStateType, WeatherForOneLocationResponseType>(state => state.cityWeather)

    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                type: "line",
                label: 'Day temperature',
                data: weather.daily?.map(day => day.temp.day),
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
                borderWidth: 4
            },
            {   type: "bar",
                label: 'Humidity',
                data: weather.daily?.map(day => day.humidity),
                backgroundColor: 'rgba(28,213,231,0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                barPercentage: 0.7
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }

    return (
        <div className='mt-5 mb-5'>
            <Bar data={data} options={options}/>
        </div>
    );
};

export default DailyChart;
