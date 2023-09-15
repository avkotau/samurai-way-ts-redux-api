import { Dispatch } from "redux";
import { authAPI, loginAPI, logoutAPI } from "../api/api";

export type ActionsUsersType =
    | SetUserDataType

export type SetUserDataType = ReturnType<typeof setAuthUserData>

export type CredentialsType = {
    email: string
    password: string
    rememberMe: boolean
}

export const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
}

export type InitialStateType = typeof initialState
export const authReducer = (state: InitialStateType = initialState, action: ActionsUsersType): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }
        // case "SET_LOGIN_DATA":
        //     debugger
        //     return {
        //         ...state,
        //         credentials: {
        //             ...state.credentials,
        //             email: action.email,
        //             password: action.password,
        //             rememberMe: action.rememberMe
        //         }
        //     }

        default: {
            return state
        }
    }
}

export const setAuthUserData = (payload: InitialStateType) => {

    return {
        type: 'SET_USER_DATA',
        payload,
    } as const
}

// export const setLoginData = (credentials: InitialStateType) => {
//     const {email, password, rememberMe} = credentials.credentials
//     return {
//         type: 'SET_LOGIN_DATA',
//         email, password, rememberMe
//     } as const
// }

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI()
        .then(res => {
            const {id, email, login} = res.data.data
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData({id, email, login, isAuth: true}))
            }
        })
}

//thunk creator - (email, password, rememberMe) - thunk - (dispatch: Dispatch)
export const login = (credentials: CredentialsType) => (dispatch: Dispatch ) => {
    return loginAPI(credentials)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch: Dispatch, ) => {
    return logoutAPI()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}))
            }
        })
}






