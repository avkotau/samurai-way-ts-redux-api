import { UserType } from "../types/declarations";

export type ActionsUsersType = FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType

type FollowType = ReturnType<typeof follow>
type UnfollowType = ReturnType<typeof unfollow>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>

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

export const follow = (userId: string) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export const unfollow = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
  return {
      type: 'TOGGLE_IS_FETCHING',
      isFetching
  } as const
}
