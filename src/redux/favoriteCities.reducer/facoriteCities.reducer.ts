import {
    weatherAPI,
    WeatherForOneLocationResponseType
} from "../../api/weather.api";
import {Dispatch} from "redux";

const SET_FAVORITE_CITIES = "SET_FAVORITE_CITIES"
const CHANGE_FAVORITE_CITY = "CHANGE_FAVORITE_CITY"
const SET_DEFAULTS_CITIES = "SET_DEFAULTS_CITIES"

export type CityType = {
    name: string
    country: string
    id: number
}


export type favoriteCitiesType = CityType[]

const initialState: favoriteCitiesType = [
    {id: 756135, name: "Warsaw", country: "PL"},
    {id: 5128581, name: "New York", country: "US"},
    {id: 3094802, name: "Krakow", country: "PL"}
]

export const favoriteCitiesReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET_FAVORITE_CITIES":
            return action.citiesData.map(city => ({id: city.id, name: city.name, country: city.sys.country}))
        case "CHANGE_FAVORITE_CITY":
            return state.map(city => city.id === action.cityId ? {...action.newCityData} : city)
        case "SET_DEFAULTS_CITIES":
            return initialState
        default:
            return state
    }
}


type ActionTypes = ReturnType<typeof setFavoriteCities>
    | ReturnType<typeof changeFavoriteCity>
    | ReturnType<typeof setDefaultsFavoriteCities>

export const setFavoriteCities = (citiesData: WeatherForOneLocationResponseType[]) => ({
    type: SET_FAVORITE_CITIES,
    citiesData
} as const)

export const changeFavoriteCity = (cityId: number, newCityData: CityType) => ({
    type: CHANGE_FAVORITE_CITY,
    cityId,
    newCityData
} as const)

export const setDefaultsFavoriteCities = () => ({
    type: SET_DEFAULTS_CITIES
} as const)

export const fetchFavoriteCitiesTC = (firstId: number, secondId: number, thirdId: number) => (dispatch: Dispatch) => {
    weatherAPI.getFavoriteCities(firstId, secondId, thirdId).then(res => {
        dispatch(setFavoriteCities(res.data.list))
    })
}
