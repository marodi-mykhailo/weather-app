import React, {useState} from 'react';
import styles from './CityCard.module.css'
import city from '../../../../assets/img/city.jpg'
import {CityType} from "../../../../redux/favoriteCities.reducer/facoriteCities.reducer";
import AddModal from "../AddModal/AddModal";

type CityCardPropsType = {
    city: CityType
    onClick: (id: number) => void
    isCityChangeMode?: boolean
    isActive?: boolean
}

export const CityCard = (props: CityCardPropsType) => {
    return (
        <div
            className={`col-10 col-md-3 m-auto m-md-0 ${styles.wrapper} ${props.isCityChangeMode && styles.shakeAnimation} 
        ${props.isActive && styles.active}`}
            onClick={() => props.onClick(props.city.id)}>
            <div style={{borderRadius: "25px"}} className={`card`}>
                <img className={`${styles.img} ${styles.border25}`} src={city} alt={"City"}/>
            </div>
            <div className={'card-body'}>
                <p style={{color: props.isActive ? "#000" : "#6C767D"}}
                   className='card-title text-center font-weight-bold'>
                    {props.city.name}, {props.city.country}
                </p>
            </div>
        </div>
    );
};

type AddCityCard = {
    onClick: (id: number) => void
    getNewFavoriteCity: (newFavoriteCityData: CityType) => void
}

export const AddCityCard = (props: AddCityCard) => {

    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div className='' style={{marginLeft: "20px"}}>
            <div className={`m-0 ${styles.wrapper}`}>
                <div style={{height: "150px", minWidth: "130px"}}
                     className={`card ${styles.border25}`}
                     onClick={() => setIsOpen(true)}>
                    <div className={`card-body ${styles.addBody}`}>
                        <h2 className='text-center text-muted'>+</h2>
                        <p className='card-title text-muted text-center font-weight-bold'>
                            Add city
                        </p>
                    </div>
                </div>
            </div>
            <AddModal getNewFavoriteCity={props.getNewFavoriteCity} isOpen={isOpen} onClose={onClose}
                      onClick={props.onClick}/>
        </div>
    )
}

