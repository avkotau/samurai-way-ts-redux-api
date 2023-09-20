import { followAPI, getUsersAPI, unFollowAPI } from "api/api";
import { Dispatch } from "redux";
import { UserType } from "types/commonTypes";
import { toggleFollowStatus } from "utils/helper-functions";

export const usersReducer = (state: InitialStateType = initialState, action: ActionsUsersType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: toggleFollowStatus(state.users, action.userId, 'id',  {followed: true})
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: toggleFollowStatus(state.users, action.userId, 'id',  {followed: false})

            }
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}

        case "TOGGLE_IS_FETCHING_IN_PROGRESS":

            return {
                ...state,
                toggleFollow: action.isFetching
                    ? [...state.toggleFollow, action.userId]
                    : state.toggleFollow.filter(id => id !== action.userId)
            }
        default: {
            return state
        }
    }
}

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export const unfollow = (userId: number) => {
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
export const toggleFollowInProgress = (userId: number, isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING_IN_PROGRESS',
        userId,
        isFetching
    } as const
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod:ApiMethodType, actionCreator: ActionCreatorType) => {
    dispatch(toggleFollowInProgress(userId, true))
    const res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowInProgress(userId, false))
}
export const getUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    const res = await getUsersAPI(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))
    dispatch(setTotalUsersCount(res.totalCount))
}
export const unFollowUser = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, unFollowAPI.bind(unFollowAPI), unfollow)

}
export const followUser = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, followAPI.bind(followAPI), follow)
}

type ApiMethodType = (id: number) => Promise<{ data: { resultCode: number } }>;
type ActionCreatorType = (userId: number) => ActionsUsersType;

export type ActionsUsersType = FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | ToggleFollowInProgressType

type FollowType = ReturnType<typeof follow>
type UnfollowType = ReturnType<typeof unfollow>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>;
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
type ToggleFollowInProgressType = ReturnType<typeof toggleFollowInProgress>

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    toggleFollow: [] as number[]
}

export type InitialStateType = typeof initialState
