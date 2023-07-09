import { UserType } from "../types/declarations";


export type ActionsUsersType = FollowType | UnfollowType | SetUsersType

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>

const initialState = {
    users: [] as Array<UserType>,
}

export type InitialStateType = typeof initialState
export const usersReducer = (state: InitialStateType = initialState, action: ActionsUsersType): InitialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map(u =>
                    u.id === action.userId ? ({...u, followed: !u.followed}) : u)
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(u =>
                    u.id === action.userId ? ({...u, followed: !u.followed}) : u)
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}

        default: {
            return state
        }
    }
}

export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export const unfollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
