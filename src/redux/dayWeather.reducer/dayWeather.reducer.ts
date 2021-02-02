import {CurrentWeather} from "../../api/weather.api";

const SET_WEATHER_BY_DAY = "SET_WEATHER_BY_DAY"

const initialState: CurrentWeather = {
    "dt": 1612036343,
    "sunrise": 1611984942,
    "sunset": 1612017996,
    "temp": -3.28,
    "feels_like": -7.91,
    "pressure": 993,
    "humidity": 93,
    "dew_point": -4.14,
    "uvi": 0,
    "clouds": 90,
    "visibility": 5000,
    "wind_speed": 3,
    "wind_deg": 250,
    "weather": [
        {
            "id": 601,
            "main": "Snow",
            "description": "snow",
            "icon": "13n"
        }
    ]
}

export const dayWeatherReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_WEATHER_BY_DAY":
            return {
                ...action.weatherData
            }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof setWeatherByDay>

export const setWeatherByDay = (weatherData: CurrentWeather) => ({
    type: SET_WEATHER_BY_DAY,
    weatherData
} as const)
