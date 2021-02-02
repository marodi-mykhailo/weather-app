import {Dispatch} from "redux";

const SET_APP_STATUS = "SET_APP_STATUS"

export type AppStatusType = "idle" | "loading" | "success"

export type AppReducerType = {
    isAppLoading: AppStatusType
}

const initialState: AppReducerType = {
    isAppLoading: 'idle'
}

export const appReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_APP_STATUS":
            return {
                ...state,
                isAppLoading: action.status
            }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof setAppStatus>

const setAppStatus = (status: string) => ({
    type: SET_APP_STATUS,
    status
} as const)


export const initializeAppTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    setTimeout(() => {
        dispatch(setAppStatus('idle'))
    }, 5000)
}
