import { NewPostTextType, PostDataType } from "../types/declarations";

export type ActionsProfileType = AddPostActionType | UpdatingTextPostActionType;

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdatingTextPostActionType = ReturnType<typeof changeTextareaActionCreator>


const initialState = {
    postsData: [
        {id: Math.random().toString(36).slice(2), message: 'Hello bro', like: 12},
        {id: Math.random().toString(36).slice(2), message: 'Hello man', like: 20},
        {id: Math.random().toString(36).slice(2), message: 'Hello women', like: 6}
    ] as Array<PostDataType>,

    newPostText: [
        {id: Math.random().toString(36).slice(2), post: ''}
    ] as Array<NewPostTextType>,
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsProfileType): InitialStateType => {

    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostDataType = {
                //Change to number
                id: Math.random().toString(36).slice(2),
                message: state.newPostText[0].post,
                like: 0
            }
            state.postsData.push(newPost)
            state.newPostText[0].post = ''
            break
        }

        case 'UPDATING_TEXT_POST': {
            state.newPostText[0].post = action.textPost
            break
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
