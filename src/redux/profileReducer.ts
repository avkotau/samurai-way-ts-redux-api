import { PostDataType } from "../types/declarations";

export type ActionsProfileType = AddPostActionType | UpdatingTextPostActionType;

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdatingTextPostActionType = ReturnType<typeof changeTextareaActionCreator>


const initialState = {
    postsData: [
        {id: Math.random().toString(36).slice(2), message: 'Hello bro', like: 12},
        {id: Math.random().toString(36).slice(2), message: 'Hello man', like: 20},
        {id: Math.random().toString(36).slice(2), message: 'Hello women', like: 6}
    ] as Array<PostDataType>,

    newPostText: ''
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsProfileType): InitialStateType => {

    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostDataType = {
                id: Math.random().toString(36).slice(2),
                message: state.newPostText,
                like: 0
            }
            return {...state, postsData: [...state.postsData, newPost], newPostText: state.newPostText = ''}
        }

        case 'UPDATING_TEXT_POST': {
            return {...state, newPostText: state.newPostText = action.textPost}
        }
    }
    return state
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST'
    } as const
}

export const changeTextareaActionCreator = (newText: string) => {
    return {
        type: 'UPDATING_TEXT_POST',
        textPost: newText
    } as const
}
