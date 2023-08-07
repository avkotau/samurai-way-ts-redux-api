export type ActionsUsersType =
    | SetUserDataType


export type SetUserDataType = ReturnType<typeof setAuthUserData>

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
    // isFetching: false
}

export type InitialStateType = typeof initialState
export const authReducer = (state: InitialStateType = initialState, action: ActionsUsersType): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.userData,
                isAuth: true
            }

        default: {
            return state
        }
    }
}

export const setAuthUserData = (userData: InitialStateType) => {

    return {
        type: 'SET_USER_DATA',
        userData
    } as const
}


