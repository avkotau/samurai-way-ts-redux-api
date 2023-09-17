import { getAuthUserData } from "./auth-reducer";
import { AppDispatch, AppThunk } from "store/redux-store";

export type ActionsInitializedType = SetInitializedType

export type SetInitializedType = ReturnType<typeof setInitializedSuccess>

export const initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState
export const appReducer = (state: InitialStateType = initialState, action: ActionsInitializedType): InitialStateType => {

    switch (action.type) {
        case "SET_INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true,
            }
        default: {
            return state
        }
    }
}

export const setInitializedSuccess = () => {
    return {
        type: 'SET_INITIALIZED_SUCCESS',
    } as const
}

export const initializeApp = (): AppThunk => (dispatch: AppDispatch) => {
    const res = dispatch(getAuthUserData())

    res.then(() => {
        dispatch(setInitializedSuccess())
    })
}




