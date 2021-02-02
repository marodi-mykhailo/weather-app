import user from '../user.json'
import {LoginData} from "../Pages/Login/Login";

const checkUserLoginData = (userData: LoginData) => {
    return new Promise<{ email: string, message: string }>((resolve, reject) => {
        if (userData.email !== user.email) {
            reject("User not found")
        }
        if (userData.password !== user.password) {
            reject("Password incorrect")
        }

        resolve({
            email: userData.email,
            message: "User was Logged"
        })
    })
}

export default checkUserLoginData;
