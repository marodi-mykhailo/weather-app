import React, {useState} from 'react';
import {AddCityCard, CityCard} from "./CityCard/CityCard";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {
    changeFavoriteCity,
    CityType,
    favoriteCitiesType
} from "../../../redux/favoriteCities.reducer/facoriteCities.reducer";
import {fetchCityWeatherById} from "../../../redux/cityWeather.reducer/cityWeather.reducer";
import {WeatherForOneLocationResponseType} from "../../../api/weather.api";

const CityCardContainer = () => {

    const favoriteCities = useSelector<AppRootStateType, favoriteCitiesType>(state => state.favoriteCities)
    const currentCity = useSelector<AppRootStateType, WeatherForOneLocationResponseType>(state => state.cityWeather)
    const [isCityChangeMode, setIsCityChangeMode] = useState(false)
    const [newFavoriteCity, setNewFavoriteCity] = useState<CityType>({
        name: '',
        country: '',
        id: 0
    })

    const dispatch = useDispatch()
    const onClick = (id: number) => {
        if (isCityChangeMode) {
            if (favoriteCities.some(city => city.id === newFavoriteCity.id)) {
                setIsCityChangeMode(false)
            } else {
                dispatch(changeFavoriteCity(id, newFavoriteCity))
                let favoriteArr = JSON.parse(localStorage.getItem('favoriteCities') as string)
                localStorage.setItem('favoriteCities',
                    JSON.stringify(favoriteArr.map((item: any) => item === id ? newFavoriteCity.id : item)))
                setIsCityChangeMode(false)
            }
        } else {
            dispatch(fetchCityWeatherById(id))
        }
    }

    const getNewFavoriteCity = (newFavoriteCityDate: CityType) => {
        setNewFavoriteCity(newFavoriteCityDate)
        setIsCityChangeMode(true)
    }

    const isActive = (id: number) => {
        if (id === currentCity.id) {
            return true
        } else {
            return false
        }
    }


    return (
        <div>
            <h1 className='mb-4'>
                <span className={'font-weight-light text-muted'}>Weather</span>
                &nbsp;
                <strong>Forecast</strong></h1>
            <div
                className="d-flex flex-md-row flex-column
                flex-sm-column align-items-center align-items-md-start">
                {favoriteCities.map((city, i) => {
                        return <CityCard key={i}
                                         city={city}
                                         onClick={onClick}
                                         isCityChangeMode={isCityChangeMode}
                                         isActive={isActive(city.id)}
                        />
                    }
                )}
                <AddCityCard getNewFavoriteCity={getNewFavoriteCity} onClick={onClick}/>
            </div>
        </div>
    );
};

export default CityCardContainer;
