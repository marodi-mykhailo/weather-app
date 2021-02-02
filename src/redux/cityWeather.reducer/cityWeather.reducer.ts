import {CurrentWeather, DailyType, weatherAPI, WeatherForOneLocationResponseType} from "../../api/weather.api";
import {Dispatch} from "redux";
import {setWeatherByDay} from "../dayWeather.reducer/dayWeather.reducer";

const SET_CITY = "SET_CITY"
const SET_DAILY_WEATHER = "SET_DAILY_WEATHER"
const SET_HOURLY_WEATHER = "SET_HOURLY_WEATHER"

const initialState: WeatherForOneLocationResponseType = {
    "coord": {
        "lon": 37.6156,
        "lat": 55.7522
    },
    "weather": [
        {
            "id": 601,
            "main": "Snow",
            "description": "snow",
            "icon": "13n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 273.35,
        "feels_like": 268.59,
        "temp_min": 273.15,
        "temp_max": 273.71,
        "pressure": 999,
        "humidity": 100
    },
    "visibility": 1600,
    "wind": {
        "speed": 4,
        "deg": 120
    },
    "snow": {
        "1h": 1.6
    },
    "clouds": {
        "all": 90
    },
    "dt": 1611872203,
    "sys": {
        "type": 1,
        "id": 9027,
        "country": "RU",
        "sunrise": 1611898133,
        "sunset": 1611928576
    },
    "timezone": 10800,
    "id": 524901,
    "name": "Moscow",
    "cod": 200
}

export const cityWeatherReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...action.cityData
            }
        case "SET_DAILY_WEATHER":
            return {
                ...state,
                daily: action.dailyData
            }
        case "SET_HOURLY_WEATHER":
            return {
                ...state,
                hourly: action.hourlyData
            }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof setCityWeather>
    | ReturnType<typeof setDailyCityWeather>
    | ReturnType<typeof setHourlyCityWeather>


const setCityWeather = (cityData: WeatherForOneLocationResponseType) => ({
    type: SET_CITY,
    cityData
} as const)

const setDailyCityWeather = (dailyData: DailyType[]) => ({
    type: SET_DAILY_WEATHER,
    dailyData
} as const)

const setHourlyCityWeather = (hourlyData: CurrentWeather) => ({
    type: SET_HOURLY_WEATHER,
    hourlyData
} as const)

export const fetchCityWeatherByName = (name: string) => async (dispatch: Dispatch) => {
    try {
        let res = await weatherAPI.getWeatherByName(name)
        if (res.status === 200) {
            dispatch(setCityWeather(res.data))
            let res2 = await weatherAPI.getDailyWeatherByCoord(res.data.coord.lon, res.data.coord.lat)
            if (res2.status === 200) {
                dispatch(setDailyCityWeather(res2.data.daily))
                dispatch(setWeatherByDay(res2.data.current))
                let res3 = await weatherAPI.getHourlyWeatherByCoord(res.data.coord.lon, res.data.coord.lat)
                if (res3.status === 200) {
                    dispatch(setHourlyCityWeather(res3.data.hourly))
                }
            }
        }
    } catch (e) {
        throw new Error(e.message)
    }

}

export const fetchCityWeatherById = (id: number) => (dispatch: Dispatch) => {
    weatherAPI.getWeatherById(id).then(res => {
        if (res.status === 200) {
            dispatch(setCityWeather(res.data))
            weatherAPI.getDailyWeatherByCoord(res.data.coord.lon, res.data.coord.lat).then(res2 => {
                dispatch(setDailyCityWeather(res2.data.daily))
                dispatch(setWeatherByDay(res2.data.current))
                weatherAPI.getHourlyWeatherByCoord(res.data.coord.lon, res.data.coord.lat).then(res3 => {
                    dispatch(setHourlyCityWeather(res3.data.hourly))
                }).catch(e => {
                    console.log(e)
                })
            }).catch(e => {
                console.log(e)
            })
        }
    }).catch(e => {
        console.log(e)
    })
}


// export const fetchDailyDataWeather = (lon: number, lan: number) => (dispatch: Dispatch) => {
//     weatherAPI.getDailyWeatherByCoord(lon, lan).then(res => {
//         if (res.status === 200) {
//             dispatch(setDailyCityWeather(res.data.daily))
//         }
//     }).catch(e => {
//         console.log(3)
//     })
// }
