import React, {ChangeEvent, useState} from 'react';
import styles from './AddModal.module.css'
import cityArr from '../../../../cities.json'
import {CityCard} from "../CityCard/CityCard";
import {weatherAPI} from "../../../../api/weather.api";
import {CityType} from "../../../../redux/favoriteCities.reducer/facoriteCities.reducer";
import NoDataComponent from "../../../../Components/NoDataComponent/NoDataComponent";
import LoadingSpinner from "../../../../Components/LoadingSpinner/LoadingSpinner";

type AddModalPropsType = {
    isOpen: boolean
    onClose: () => void
    onClick: (id: number) => void
    getNewFavoriteCity: (newFavoriteCityData: CityType) => void

}


const AddModal = (props: AddModalPropsType) => {
    const [input, setInput] = useState('')
    const [city, setCity] = useState<CityType>()
    const [request, setRequest] = useState<number>(setTimeout(() => {
    }))
    const [error, setError] = useState<boolean>(false)

    const onCityClick = (city: CityType) => {
        props.getNewFavoriteCity(city)
        props.onClose()
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setInput(e.currentTarget.value)
        let value = e.currentTarget.value
        setCity(undefined)
        clearTimeout(request)
        let id = window.setTimeout(function () {
            weatherAPI.getWeatherByName(value).then(res => {
                setCity({id: res.data.id, name: res.data.name, country: res.data.sys.country})
                setError(false)
            }).catch(e => {
                setError(true)
            })
        }, 1000)
        setRequest(id)

    }

    if (!props.isOpen) return null

    return (
        <div>
            <div className={styles.modal}>
                <div className="input-group mt-2 mb-4">
                    <div className="form-outline col-4 mr-2">
                        <input value={input} onChange={onInputChange} type="search" id="form1" placeholder={"Search"}
                               className="form-control"/>
                    </div>
                </div>
                <div className='row pr-4 pl-4 mt-2'>
                    {
                        !input ? cityArr.map((city, i) => <div key={i} onClick={() => onCityClick(city)}
                                                               className={`col-12 col-sm-6 col-md-3 
                                                               col-lg-2 ${styles.cardWrapp}`}>
                            <CityCard city={city} onClick={props.onClick}/>
                        </div>) : error ? <NoDataComponent text={"Not Found"}/>
                            : city ? <div onClick={() => onCityClick(city)}
                                          className={` col-12 col-sm-6 col-md-3 col-lg-2 ${styles.cardWrapp}`}>
                                <CityCard city={city} onClick={props.onClick}/>
                            </div> : <LoadingSpinner/>
                    }
                </div>
            </div>
            <div onClick={props.onClose} className={styles.modalOverlay}/>
        </div>
    );
};

export default AddModal;
