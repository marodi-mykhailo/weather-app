import React from 'react';
import styles from './NotFound.module.css'
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center p-5'>404 Page not found</h1>
            <div className={styles.wrapp}>
                <button className={`btn btn-outline-success ${styles.btn}`}>
                    <NavLink to={'/login'}>Go to Login Page</NavLink></button>
                <button className={`btn btn-outline-dark ${styles.btn}`}>
                    <NavLink to={'/main'}>Go to Main Page</NavLink></button>
            </div>
        </div>
    );
};

export default NotFound;
