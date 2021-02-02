import React from 'react';
import drop from "../../../../../assets/img/drop.png";
import wind from "../../../../../assets/img/wind.png";
import {DailyType} from "../../../../../api/weather.api";
import {getDayOfWeek} from "../../../../../helper/getDayOfWeek";

type TablePropsType = {
    day: DailyType
    changeDay: (day: DailyType) => void
    dt: string
}

const iconURL = 'http://openweathermap.org/img/wn/'

const Table = (props: TablePropsType) => {
    return (
        <tr>
            <th onClick={() => props.changeDay(props.day)}
                style={{cursor: "pointer", fontWeight: props.dt === getDayOfWeek(props.day.dt) ? "bold" : "normal"}}
                scope="row">{getDayOfWeek(props.day.dt)}</th>
            <td className='d-flex align-items-center text-muted'>
                <img style={{height: "30px", width: "20px"}} src={drop} alt={'drop'}/>
                <span>{props.day.humidity} %</span>
            </td>
            <td><img src={`${iconURL}${props.day.weather[0].icon}.png`} alt={'icon'}/></td>
            <td className='text-muted'>{Math.floor(props.day.feels_like.day)}&deg;C</td>
            <td className='d-flex align-items-center text-muted '>
                <img style={{height: "30px", width: "20px", marginRight: "5px"}}
                     src={wind} alt={'wind'}/>
                <span>{props.day.wind_speed.toFixed(1)} m/s</span>
            </td>
            <td className='font-weight-bold'>{Math.floor(props.day.temp.day)}&deg;C</td>
        </tr>
    );
};

export default Table;
