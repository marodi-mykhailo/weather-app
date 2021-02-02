import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {userReducer} from "./userReducer/user.reducer";
import {cityWeatherReducer} from "./cityWeather.reducer/cityWeather.reducer";
import {favoriteCitiesReducer} from "./favoriteCities.reducer/facoriteCities.reducer";
import {dayWeatherReducer} from "./dayWeather.reducer/dayWeather.reducer";
import {appReducer} from "./app.reducer/app.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    cityWeather: cityWeatherReducer,
    favoriteCities: favoriteCitiesReducer,
    dayWeather: dayWeatherReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
