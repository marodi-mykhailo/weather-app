import axios from "axios";

const settings = {
    params: {
        units: "metric",
        appid: "fc8cbe9de90214186f37dcbd5bef4182"
    },
}
const instance = axios.create({
    baseURL: "//api.openweathermap.org/data/2.5/",
    ...settings
})

//api
export const weatherAPI = {
    getWeatherByName(city: string) {
        return instance.get<WeatherForOneLocationResponseType>(`weather?q=${city}`)
    },
    getWeatherById(id: number) {
        return instance.get<WeatherForOneLocationResponseType>(`weather?id=${id}`)
    },
    getFavoriteCities(firsId: number, secondId: number, thirdId: number) {
        return instance.get<WeatherForFavoriteCitiesResponseType>(`/group?id=${firsId},${secondId},${thirdId}`)
    },
    getDailyWeatherByCoord(lon: number, lat: number) {
        return instance.get<DailyWeatherByCoordType>(`onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely`)
    },
    getHourlyWeatherByCoord(lon: number, lat: number) {
        return instance.get<any>(`onecall?lat=${lat}&lon=${lon}&exclude=current,daily,alerts,minutely`)
    },
}

export const fetchWeatherIcon = (icon: string, zoom: string = '') => {
    return axios.get(`http://openweathermap.org/img/wn/${icon}${zoom}.png`)
}


export type WeatherForFavoriteCitiesResponseType = {
    list: WeatherForOneLocationResponseType[]
}


export type WeatherForOneLocationResponseType = {
    coord: {
        lon: number,
        lat: number
    }
    weather: Weather[]
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    }
    visibility: number
    wind: {
        speed: number
        deg: number
    }
    clouds: {
        all: number
    }
    "snow"?: {
        "1h": 1.6
    }
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
    daily?: DailyType[]
    hourly?: CurrentWeather[]
}

export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export type DailyWeatherByCoordType = {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: CurrentWeather;
    daily: DailyType[];
}

export type DailyType = {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: TempType;
    feels_like: FeelsLikeType;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
    clouds: number;
    pop: number;
    snow?: number;
    uvi: number;
    rain?: number;
}

type FeelsLikeType = {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

type TempType = {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export type CurrentWeather = {
    dt: number;
    sunrise?: number;
    sunset?: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility?: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
}
