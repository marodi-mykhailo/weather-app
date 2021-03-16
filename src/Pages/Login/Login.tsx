import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import styles from './Login.module.css'
import leftImg from '../../assets/img/login-img.svg'
import {useDispatch, useSelector} from "react-redux";
import {loginUserTC, setUser} from "../../redux/userReducer/user.reducer";
import {AppRootStateType} from "../../redux/store";
import {Redirect} from 'react-router-dom';
import {initializeAppTC} from "../../redux/app.reducer/app.reducer";

export type LoginData = {
    email: string,
    password: string,
    isRemember: boolean
}

const Login = () => {

    const dispatch = useDispatch();
    const isLogged = useSelector<AppRootStateType>(state => state.user.isLogged)


    useEffect(() => {
        let user = localStorage.getItem('user')

        if (user) {
            dispatch(setUser({email: user}))
        }

        if (isLogged) {
            dispatch(initializeAppTC())
        }
    }, [dispatch, isLogged])

    const [formData, setFormData] = useState<LoginData>({
        email: "",
        password: "",
        isRemember: true
    })

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, email: e.currentTarget.value})
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, password: e.currentTarget.value})
    }

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUserTC(formData))
    }

    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, isRemember: e.currentTarget.checked})
    }

    if (isLogged) {
        return <Redirect to={'/main'}/>
    }

    return (
        <div style={{height: "90vh"}} className={'row d-flex align-items-center'}>
            <div className={`col ${styles.left}`}>
                <img className={styles.imgWrapper} src={leftImg} alt={"weather"}/>
            </div>
            <div className={`col`}>
                <form className={`${styles.form}  mt-5`} onSubmit={onFormSubmit}>
                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control"
                               type={"email"}
                               value={formData.email}
                               onChange={onEmailChange}
                               placeholder="Enter email"/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                               className="form-control"
                               value={formData.password}
                               onChange={onPasswordChange}
                               placeholder="Enter password"/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox"
                                   id="customCheck1"
                                   className="custom-control-input"
                                   onChange={onCheckboxChange}
                                   checked={formData.isRemember}
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit"
                            className="btn btn-dark btn-lg btn-block">Sign
                        in
                    </button>
                    <p className="forgot-password text-right">
                        Forgot <a href="/reset-password">password?</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
