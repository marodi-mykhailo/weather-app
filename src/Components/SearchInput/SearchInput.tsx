import React, {ChangeEvent, useEffect, useState} from 'react';
import {weatherAPI} from "../../api/weather.api";
import {useDispatch} from "react-redux";
import {fetchCityWeatherByName} from "../../redux/cityWeather.reducer/cityWeather.reducer";


const SearchInput = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState<string>('')
    const [request, setRequest] = useState<number>(setTimeout(() => {
    }))
    const [error, setError] = useState<string>('')
    const [city, setCity] = useState<string>('')

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
        setError('')
        setCity('')
        let value = e.currentTarget.value
        clearTimeout(request)
        let id = window.setTimeout(function () {
            weatherAPI.getWeatherByName(value).then(res => {
                setCity(res.data.name)
                dispatch(fetchCityWeatherByName(res.data.name))
                debugger
            }).catch(e => {
                setError("City not found")
            })
        }, 1000)
        setRequest(id)
    }

    return (
        <div>
            <div className="input-group mt-2 mb-4 row">
                <div className="form-outline col-6 mr-2 mr-2">
                    <input value={input} onChange={onInputChange} onBlur={() => {
                        setInput('')
                        setError('')
                    }}
                           type="search" id="form1" placeholder={"Search"}
                           className="form-control"/>
                </div>
                {input && !city && !error
                && <div className='d-flex align-items-center justify-content-center ml-4'>
                    <div style={{width: '2rem', height: '2rem'}} className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                }
                {input && city && <span style={{fontSize: "16px"}}
                                        className='d-flex align-items-center
                                        ml-4 text-success font-weight-bold'>{city}</span>
                }
                {input && error && <span style={{fontSize: "16px"}}
                                         className='d-flex align-items-center ml-4 text-danger font-weight-bold'>{error}</span>}
            </div>
        </div>
    );
};

export default SearchInput;
