import { UserType } from "../types/declarations";

export type ActionsUsersType = FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: action.users}

        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}

        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}

        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}

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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {
      type: 'TOGGLE_IS_FETCHING',
      isFetching
  } as const
}
