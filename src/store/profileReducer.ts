import { getUserStatusAPI, profileUserAPI, savePhotoAPI, saveProfileAPI, updateUserStatusAPI } from "api/api";
import { Dispatch } from "redux";
import { PostDataType } from "types/commonTypes";
import { AppThunk } from "store/redux-store";
import { DateMessage } from "components/Profile/MyPosts/MyPostsContainer";

const initialState = {
    postsData: [
        {
            id: Math.random().toString(36).slice(2), message: 'The popular tourist destinations Hawaii and ' +
                'Thailand now join the growing group of states that has decided to ban a range of single-use plastic.',
            like: 12, published: '12.06.2022, 12:22:30'
        },
        {
            id: Math.random().toString(36).slice(2), message: 'The number of people worldwide without access to ' +
                'electricity decreased last year from 1000 million to 860 million. Most of the progress ' +
                'happened in India.', like: 20, published: '12.06.2022, 12:22:30'
        },
        {
            id: Math.random().toString(36).slice(2), message: 'The hatching of 100 eggs brings new hope to the ' +
                'critically endangered gharial-crocodile. Every egg counts, as there are only 1000 adult ' +
                'crocodiles left.', like: 6, published: '12.06.2022, 12:22:30'
        }
    ] as unknown as Array<PostDataType>,
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
    status: '',
    statusError: undefined as string | undefined
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsProfileType): InitialStateType => {

    switch (action.type) {
        case 'ADD_POST':
            const newPost: PostDataType = {
                id: Math.random().toString(36).slice(2),
                message: action.postData.message,
                like: 0,
                published: action.postData.published
            }
            return {...state, postsData: [newPost, ...state.postsData]}
        case 'UPDATE_LIKE':
            return {
                ...state,
                postsData: state.postsData.map(post =>
                    post.id === action.payload.postId ? { ...post, like: action.payload.newLikeCount } : post
                )
            };
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
        case "STATUS_ERROR": {
            return {
                ...state,
                statusError: action.error
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

export const addPostAC = (postData: DateMessage) => {
    return {
        type: 'ADD_POST',
        postData
    } as const
}

export const updateLikeAC = (postId: string, newLikeCount: number) => {
    return {
        type: 'UPDATE_LIKE',
        payload: {postId, newLikeCount}
    } as const
};

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

export const statusErrorAC = (error: string | undefined) => {

    return {
        type: 'STATUS_ERROR',
        error
    } as const
}

export const saveProfile = (profile: ProfileResponseType): AppThunk => async (dispatch, getState) => {
    const userId = Number(getState().auth.id)
    const res = await saveProfileAPI(profile)

    if (res.data.resultCode === 0) {
        await dispatch(fetchUserProfile(userId))
    } else {
        let errorMessage = res.data.messages.length > 0 ? res.data.messages : "Some error occurred";
        return {submitErrors: errorMessage[0]}; // return error
    }
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
        dispatch(statusErrorAC(''))
    } else {
        if (res.data.messages.length > 0) {
            dispatch(statusErrorAC(res.data.messages[0]))
        }
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

export type ActionsProfileType = AddPostActionType | updateLikeActionType
    | SetUserProfileActionType | GetUserStatusActionType | UpdateUserStatusActionType
    | DeletePostActionType | SavePhotoSuccessActionType | StatusErrorActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type updateLikeActionType = ReturnType<typeof updateLikeAC>
type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>
type GetUserStatusActionType = ReturnType<typeof getUserStatusAC>
type UpdateUserStatusActionType = ReturnType<typeof updateUserStatusAC>
type DeletePostActionType = ReturnType<typeof deletePostAC>
type SavePhotoSuccessActionType = ReturnType<typeof savePhotoSuccessAC>
type StatusErrorActionType = ReturnType<typeof statusErrorAC>

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
