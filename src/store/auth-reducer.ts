import { Dispatch } from "redux";
import { authAPI, loginAPI, logoutAPI, securityAPI } from "api/api";
import { FORM_ERROR } from "final-form";
import { AppDispatch, AppThunk } from "store/redux-store";

export const initialState = {
    id: null as string | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: '' // if '' then captcha if not required
}

export type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsUsersType): InitialStateType => {

    switch (action.type) {
        case "GET_CAPTCHA_URL_SUCCESS":
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }

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

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: 'GET_CAPTCHA_URL_SUCCESS',
        payload: {captchaUrl},
    } as const
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
    const captchaUrl = res.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const getAuthUserData = (): AppThunk => async (dispatch: AppDispatch) => {
    const res = await authAPI()
    const {id, email, login, captchaUrl} = res.data.data
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData({id, email, login, isAuth: true, captchaUrl }))
    }

}

export const login = (credentials: CredentialsType): AppThunk => async (dispatch: AppDispatch) => {
    const res = await loginAPI(credentials)

    if (res.data.resultCode === 0) {
        //success, get auth data
        dispatch(getAuthUserData())
    } else {
        if (res.data.resultCode === 10) {
            await dispatch(getCaptchaUrl())
        }
        let errorMessage = res.data.messages.length > 0 ? res.data.messages : "Some error occurred";
        return {[FORM_ERROR]: errorMessage[0]}; // return error
    }
};

export const logout = () => async (dispatch: Dispatch) => {
    const res = await logoutAPI()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false, captchaUrl: ''}))
    }
}

export type ActionsUsersType =
    | SetUserDataType | getCaptchaUrlSuccessType

export type SetUserDataType = ReturnType<typeof setAuthUserData>
export type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>

export type CredentialsType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl: string
}






