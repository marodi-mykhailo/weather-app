import React, {useState} from 'react';
import styles from './WeatherStatisticTable.module.css'
import {DailyType, WeatherForOneLocationResponseType} from "../../../../api/weather.api";
import Table from "./Table/Table";
import NoDataComponent from "../../../../Components/NoDataComponent/NoDataComponent";
import DailyChart from "../DailyChart/DailyChart";


type WeatherStatisticTablePropsType = {
    city: WeatherForOneLocationResponseType
    changeDay: (day: DailyType) => void
    dt: string
}

const WeatherStatisticTable = (props: WeatherStatisticTablePropsType) => {

    const [isActive, setIsActive] = useState<{ [index: string]: boolean }>({
        first: true,
        second: false,
        third: false,
        fourth: false
    })

    const [isShowChart, setIsShowChart] = useState<boolean>(false)


    const onActiveChange = (position: string) => {
        let newObj = {...isActive}
        for (let key in isActive) {
            if (key === position) {
                newObj[key] = true
            } else {
                newObj[key] = false
            }
        }

        if (position !== "first") {
            setIsShowChart(false)
        }

        setIsActive(newObj)
    }

    return (
        <div style={{overflow: "scroll", height: "630px"}}>
            <div>
                <ul className={`nav ${styles.nav} col-12`}>
                    <li className={`nav-item ${styles.navItem} col-2`}>
                        <a onClick={() => onActiveChange("first")}
                           className={`nav-link ${styles.navLink} ${isActive.first && styles.active}`}>Week</a>
                    </li>
                    <li className={`nav-item ${styles.navItem} col-2`}>
                        <a onClick={() => onActiveChange("second")}
                           className={`nav-link ${styles.navLink} ${isActive.second && styles.active}`}>Month</a>
                    </li>
                    <li className={`nav-item ${styles.navItem} col-3`}>
                        <a onClick={() => onActiveChange("third")}
                           className={`nav-link ${styles.navLink} ${isActive.third && styles.active}`}>3 Month</a>
                    </li>
                    <li className={`nav-item ${styles.navItem} col-3`}>
                        <a onClick={() => onActiveChange("fourth")}
                           className={`nav-link ${styles.navLink} ${isActive.fourth && styles.active}`}>6 Month</a>
                    </li>
                    <div
                        className="custom-control text-muted
                        custom-switch col-2 d-flex
                        align-items-center justify-content-center">
                        <input onChange={() => {
                            setIsShowChart(!isShowChart)
                        }}
                               disabled={!isActive.first}
                               checked={isShowChart} type="checkbox" className="custom-control-input"
                               id="customSwitch1"/>
                        <label className={`custom-control-label ${styles.customInput} 
                        ${isShowChart && 'font-weight-bold text-dark'}`}
                               htmlFor="customSwitch1">Chart</label>
                    </div>
                </ul>
            </div>
            {isShowChart && <DailyChart/>}
            {isActive.first &&
            <div className={"mt-4"}>
                <table className="table table-borderless">
                    <thead>
                    <tr>
                        <th scope="col"/>
                        <th scope="col"/>
                        <th scope="col"/>
                        <th scope="col"/>
                        <th scope="col"/>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>
                    {props.city.daily && props.city.daily.map((day, i) => {
                        if (i < 7) {
                            return (
                                <Table dt={props.dt} changeDay={props.changeDay} key={i} day={day}/>
                            )
                        } else {
                            return null
                        }
                    })}
                    </tbody>
                </table>
            </div>}
            {isActive.second && <NoDataComponent text={"No Data"}/>}
            {isActive.third && <NoDataComponent text={"No Data"}/>}
            {isActive.fourth && <NoDataComponent text={"No Data"}/>}
        </div>
    );
};

export default WeatherStatisticTable;
