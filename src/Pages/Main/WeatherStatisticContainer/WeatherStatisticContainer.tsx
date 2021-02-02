import React from 'react';
import WeatherStatisticTable from "./WeatherStatisticTable/WeatherStatisticTable";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {CurrentWeather, DailyType, WeatherForOneLocationResponseType} from "../../../api/weather.api";
import {setWeatherByDay} from "../../../redux/dayWeather.reducer/dayWeather.reducer";
import {getDayOfWeek} from "../../../helper/getDayOfWeek";

const WeatherStatisticContainer = () => {
    const city = useSelector<AppRootStateType, WeatherForOneLocationResponseType>(state => state.cityWeather)
    const currentWeather = useSelector<AppRootStateType, CurrentWeather>(state => state.dayWeather)
    const dispatch = useDispatch()


    const changeDay = (day: DailyType) => {
        dispatch(setWeatherByDay({
            ...day,
            temp: day.temp.day,
            feels_like: day.feels_like.day
        }))
    }

    return (
        <WeatherStatisticTable dt={getDayOfWeek(currentWeather.dt)} changeDay={changeDay} city={city}/>
    );
};

export default WeatherStatisticContainer;
