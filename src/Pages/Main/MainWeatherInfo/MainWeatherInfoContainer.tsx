import React, {useEffect, useState} from 'react';
import styles from './WeatherDetails.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {CurrentWeather, WeatherForOneLocationResponseType} from "../../../api/weather.api";
import MainWeatherInfo from "./MainWeatherInfo/MainWeatherInfo";
import {backgroundImages} from "../../../helper/images";
import {logOutTC} from "../../../redux/userReducer/user.reducer";

const MainWeatherInfoContainer = () => {

    const dispatch = useDispatch()

    const cityWeather = useSelector<AppRootStateType, WeatherForOneLocationResponseType>(state => state.cityWeather)
    const currentWeather = useSelector<AppRootStateType, CurrentWeather>(state => state.dayWeather)

    useEffect(() => {
        getStyles()
    }, [currentWeather])

    const [image, setImage] = useState<string>()

    const getStyles = () => {
        let weatherType = currentWeather.weather[0].main.toLowerCase()
        setImage(backgroundImages[weatherType])
    }

    const onSignOut = () => {
        dispatch(logOutTC())
    }

    const backgroundStyles = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        transition: "all .4s ease",
        position: "relative",
        zIndex: 100
    } as React.CSSProperties;

    return (
        <div style={backgroundStyles} className={`w-100 ${styles.darkenBg}`}>
            <button onClick={onSignOut} style={{position: "absolute", margin: "20px", right: 0}}
                    className='btn btn-outline-danger'>Sign Out
            </button>
            <MainWeatherInfo weather={currentWeather} countryName={cityWeather.sys.country}
                             cityName={cityWeather.name} timezone={cityWeather.timezone}
            />
        </div>
    );
};

export default MainWeatherInfoContainer;
