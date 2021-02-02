import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from "./Pages/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import Main from "./Pages/Main/Main";
import {fetchCityWeatherById} from "./redux/cityWeather.reducer/cityWeather.reducer";
import {favoriteCitiesType, fetchFavoriteCitiesTC} from "./redux/favoriteCities.reducer/facoriteCities.reducer";
import {AppReducerType} from "./redux/app.reducer/app.reducer";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";

function App() {

    const dispatch = useDispatch();
    const favoriteCities = useSelector<AppRootStateType, favoriteCitiesType>(state => state.favoriteCities)

    const appStatus = useSelector<AppRootStateType, AppReducerType>(state => state.app)

    useEffect(() => {
        let favoriteArr = JSON.parse(localStorage.getItem('favoriteCities') as string)
        if (favoriteArr) {
            dispatch(fetchFavoriteCitiesTC(favoriteArr[0], favoriteArr[1], favoriteArr[2]))
            dispatch(fetchCityWeatherById(favoriteArr[0]))
        } else {
            localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities.map((item => item.id))))
            dispatch(fetchCityWeatherById(favoriteCities[0].id))
        }
    }, [dispatch])

    return (
        <div style={{backgroundColor: "#7CB2ED", minHeight: "100vh"}} className='pt-0 pb-0 pt-sm-5 pb-sm-5'>
            <div style={{backgroundColor: "#F2FBFF", borderRadius: "25px"}} className="container">
                <Switch>
                    {appStatus.isAppLoading === "loading" ? <LoadingSpinner/>
                        : <Route exact path={['/','/main']} render={() => <Main/>}/>
                    }
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/404'} render={() => <h1 className='text-center p-5'>404 Page not found</h1>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </div>
        </div>

    );
}

export default App;
