import React from 'react';
import CityCardContainer from "./CityCardContainer/CityCardContainer";
import WeatherStatisticContainer from "./WeatherStatisticContainer/WeatherStatisticContainer";
import MainWeatherInfoContainer from "./MainWeatherInfo/MainWeatherInfoContainer";
import SearchInput from "../../Components/SearchInput/SearchInput";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";


const Main = () => {
    const isLogged = useSelector<AppRootStateType>(state => state.user.isLogged)

    if (!isLogged) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className="row flex-sm-column-reverse flex-column-reverse flex-lg-row">
            <div className="col-lg-7 p-4">
                <SearchInput/>
                <CityCardContainer/>
                <WeatherStatisticContainer/>
            </div>
            <div className="col-lg-5 pr-0 pl-0 pl-lg-2 ">
                <MainWeatherInfoContainer/>
            </div>
        </div>
    );
};

export default Main;
