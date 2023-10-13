import { Dispatch } from "redux";
import { authAPI, loginAPI, logoutAPI } from "api/api";
import { FORM_ERROR } from "final-form";
import { AppDispatch, AppThunk } from "store/redux-store";

export const authReducer = (state: InitialStateType = initialState, action: ActionsUsersType): InitialStateType => {

    switch (action.type) {
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

export const getAuthUserData = (): AppThunk => async (dispatch: AppDispatch) => {
    const res = await authAPI()
    const {id, email, login} = res.data.data
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData({id, email, login, isAuth: true}))
    }

}
//thunk creator - (email, password, rememberMe) - thunk - (dispatch: Dispatch)
export const login = (credentials: CredentialsType): AppThunk => async (dispatch: AppDispatch) => {
    const res = await loginAPI(credentials)

    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let errorMessage = res.data.messages.length > 0 ? res.data.messages : "Some error occurred";
        return {[FORM_ERROR]: errorMessage[0]}; // return error
    }
};

export const logout = () => async (dispatch: Dispatch) => {
    const res = await logoutAPI()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}))
    }
}

export type ActionsUsersType =
    | SetUserDataType

export type SetUserDataType = ReturnType<typeof setAuthUserData>

export type CredentialsType = {
    email: string
    password: string
    rememberMe: boolean
}

export const initialState = {
    id: null as string | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
}

export type InitialStateType = typeof initialState



