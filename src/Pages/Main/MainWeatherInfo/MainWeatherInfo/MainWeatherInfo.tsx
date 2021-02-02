import React from 'react';
import {CurrentWeather} from "../../../../api/weather.api";
import styles from './MainWeatherInfo.module.css'
import {getDayOfWeek} from "../../../../helper/getDayOfWeek";
import HourlyChart from "../HourlyChart/HourlyChart";

const iconURL = 'http://openweathermap.org/img/wn/'

type MainWeatherInfoPropsType = {
    weather: CurrentWeather
    countryName: string
    cityName: string
    timezone: number
}

const MainWeatherInfo = (props: MainWeatherInfoPropsType) => {

    const getDate = (miliseconds: number) => {
        return new Date(miliseconds * 1000).toLocaleDateString('en-GB', {
            weekday: "short", day: "numeric", month: 'short'
        })
    }

    const getTime = (miliseconds: number | undefined) => {
        if (miliseconds) {
            return new Date(miliseconds * 1000).toLocaleTimeString([], {
                hour: 'numeric', minute: 'numeric'
            })
        }
        return "Woops"
    }

    return (
        <div style={{paddingTop: "100px"}} className='d-flex flex-column h-100 justify-content-start'>
            <div className={`d-flex align-items-center ${styles.header}`}>
                <img src={`${iconURL}${props.weather.weather[0].icon}@2x.png`} alt={'icon'}/>
                <div className={`d-flex flex-column text-center justify-content-center`}>
                    <span className='h3'>{getDayOfWeek(props.weather.dt, true)}</span>
                    <span className={'text-muted'}>{getDate(props.weather.dt)}</span>
                </div>
            </div>
            <div style={{fontSize: "20px"}} className='d-flex flex-column align-items-center'>
                <h1 style={{fontSize: "150px", position: "relative"}}
                    className='text-center text-white font-weight-light'>{Math.floor(props.weather.temp)}
                    <span className={styles.deg}>&deg;C</span></h1>
                <span
                    className='text-center text-white text-capitalize mb-1'>{props.weather.weather[0].description}</span>
                <span className='text-white m-2'>{props.cityName}, {props.countryName}</span>
                <div className='text-white d-flex'>
                    <span className={`d-flex align-items-center ${styles.dot}`}>
                        Feels like {Math.floor(props.weather.feels_like)}</span>
                    <span className=''>Sunset {getTime(props.weather?.sunset)}</span>
                </div>
            </div>
            {getDayOfWeek(props.weather.dt, true) === "Today" &&
            <div style={{width: "95%", borderRadius: "15px", marginTop: "100px", backgroundColor: "rgba(0, 0, 0, 0.6)"}}
                 className=' ml-auto mr-auto mb-3 mb-lg-0 '>
                <HourlyChart/>
            </div>}

        </div>
    );
};

export default MainWeatherInfo;
