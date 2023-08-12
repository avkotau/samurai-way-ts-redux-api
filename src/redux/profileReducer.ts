import { PostDataType } from "../types/declarations";
import { getUserStatusAPI, profileUserAPI, updateUserStatusAPI } from "../api/api";
import { Dispatch } from "redux";

export type ActionsProfileType = AddPostActionType
    | SetUserProfileActionType | GetUserStatusActionType | UpdateUserStatusActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>
type GetUserStatusActionType = ReturnType<typeof getUserStatusAC>
type UpdateUserStatusActionType = ReturnType<typeof updateUserStatusAC>

export type ProfileResponseType = {
    aboutMe: string;
    contacts: {
        facebook: string;
        website: null | string;
        vk: string;
        twitter: string;
        instagram: string;
    };
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    photos: {
        small: string;
        large: string;
    };
    userId: number;
};

const initialState = {
    postsData: [
        {id: Math.random().toString(36).slice(2), message: 'Hello bro', like: 12},
        {id: Math.random().toString(36).slice(2), message: 'Hello man', like: 20},
        {id: Math.random().toString(36).slice(2), message: 'Hello women', like: 6}
    ] as Array<PostDataType>,
    profile: null as ProfileResponseType | null,
    status: ''
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsProfileType): InitialStateType => {

    switch (action.type) {
        case 'ADD_POST':
            const newPost: PostDataType = {
                id: Math.random().toString(36).slice(2),
                message: action.newPost,
                like: 0
            }
            return {...state, postsData: [newPost, ...state.postsData]}

        case "SET_USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "GET_USER_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "UPDATE_USER_STATUS":
            return {
                ...state,
                status: action.status
            }

    }
    return state
}

export const addPostAC = (newPost: string) => {
    return {
        type: 'ADD_POST',
        newPost
    } as const
}

export const setUserProfileAC = (profile: ProfileResponseType) => {
    return {
        type: 'SET_USER-PROFILE',
        profile
    } as const
}

export const getUserStatusAC = (status: string) => {
    return {
        type: 'GET_USER_STATUS',
        status
    } as const
}

export const updateUserStatusAC = (status: string) => {
    return {
        type: 'UPDATE_USER_STATUS',
        status
    } as const
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    return updateUserStatusAPI(status)
        .then(res => {
            dispatch(updateUserStatusAC(status))
        })
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    return getUserStatusAPI(userId)
        .then(res => {
            dispatch(getUserStatusAC(res.data))
        })
}

export const fetchUserProfile = (userId: number) => (dispatch: Dispatch) => {
    return profileUserAPI(userId)
        .then(res => {
            dispatch(setUserProfileAC(res.data))
        })
}

