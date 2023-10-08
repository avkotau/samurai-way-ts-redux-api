import { getUserStatusAPI, profileUserAPI, savePhotoAPI, updateUserStatusAPI } from "api/api";
import { Dispatch } from "redux";
import { PostDataType } from "types/commonTypes";

const initialState = {
    postsData: [
        {id: Math.random().toString(36).slice(2), message: 'Hello bro', like: 12},
        {id: Math.random().toString(36).slice(2), message: 'Hello man', like: 20},
        {id: Math.random().toString(36).slice(2), message: 'Hello women', like: 6}
    ] as Array<PostDataType>,
    profile: {
        aboutMe: '',
        contacts: {
            facebook: null as string | null,
            github: null as string | null,
            instagram: null as string | null,
            mainLink: null as string | null,
            twitter: null as string | null,
            vk: null as string | null,
            website: null as string | null,
            youtube: null as string | null,
        },
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: ''
        },
        userId: 0
    },
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
        case "DELETE_POST":
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        case "SAVE_PHOTO_SUCCESS": {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
    }
    return state
}

export const deletePostAC = (postId: string) => {
    return {
        type: 'DELETE_POST',
        postId
    } as const
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
export const savePhotoSuccessAC = (photos: PhotosType) => {
    return {
        type: 'SAVE_PHOTO_SUCCESS',
        photos
    } as const
}

export const savePhoto = (file: Blob) => async (dispatch: Dispatch) => {
    const res = await savePhotoAPI(file)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(res.data.data.photos))
    }
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await updateUserStatusAPI(status)
    if (res.data.resultCode === 0) {
        dispatch(updateUserStatusAC(status))
    }
}

export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    const res = await getUserStatusAPI(userId)
    dispatch(getUserStatusAC(res.data))
}

export const fetchUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileUserAPI(userId)
    dispatch(setUserProfileAC(res.data))
}

export type ActionsProfileType = AddPostActionType
    | SetUserProfileActionType | GetUserStatusActionType | UpdateUserStatusActionType
    | DeletePostActionType | SavePhotoSuccessActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>
type GetUserStatusActionType = ReturnType<typeof getUserStatusAC>
type UpdateUserStatusActionType = ReturnType<typeof updateUserStatusAC>
type DeletePostActionType = ReturnType<typeof deletePostAC>
type SavePhotoSuccessActionType = ReturnType<typeof savePhotoSuccessAC>

export type ProfileResponseType = {
    aboutMe: string;
    contacts: ContactsType
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    photos: PhotosType;
    userId: number;
};

export type ContactsType = {
    facebook: null | string
    github: null | string
    instagram: null | string
    mainLink: null | string
    twitter: null | string
    vk: null | string
    website: null | string
    youtube: null | string
}

export type PhotosType = {
    small: string;
    large: string;
}
