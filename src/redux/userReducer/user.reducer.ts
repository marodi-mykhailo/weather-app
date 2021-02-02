import {Dispatch} from "redux";
import {LoginData} from "../../Pages/Login/Login";
import checkUserLoginData from "../../helper/auth";
import {setDefaultsFavoriteCities} from "../favoriteCities.reducer/facoriteCities.reducer";

const SET_USER = "SET_USER"
const LOG_OUT = "LOG_OUT"

type UserData = {
    email: string,
    isLogged?: boolean
}

type ActionsType = ReturnType<typeof setUser> | ReturnType<typeof logOut>

const initialState: UserData = {
    email: '',
    isLogged: false
}

export const userReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...action.userData,
                isLogged: true
            }
        case "LOG_OUT":
            return {
                email: '',
                isLogged: false
            }
        default:
            return state
    }
}

export const setUser = (userData: UserData) => ({
    type: SET_USER,
    userData
} as const)

const logOut = () => ({
    type: LOG_OUT
} as const)


export const loginUserTC = (userData: LoginData) => (dispatch: Dispatch) => {
    checkUserLoginData(userData).then(res => {
        if (userData.isRemember) {
            localStorage.setItem("user", res.email)
        }

        let email = res.email
        dispatch(setUser({email}))
    }).catch(e => {
        console.log(e)
    })
}

export const logOutTC = () => (dispatch: Dispatch) => {
    localStorage.clear()
    dispatch(setDefaultsFavoriteCities())
    dispatch(logOut())
}
