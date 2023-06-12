import { PostDataType } from "../types/declarations";
import { ProfilePageType } from "./index";

export const ADD_POST = 'ADD_POST';
export const UPDATING_TEXT_POST = 'UPDATING_TEXT_POST';


export type ActionsProfileType = AddPostActionType | UpdatingTextPostActionType;

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdatingTextPostActionType = ReturnType<typeof changeTextareaActionCreator>

export const profileReducer = (state: ProfilePageType, action: ActionsProfileType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
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

        case UPDATING_TEXT_POST: {
            state.newPostText[0].post = action.textPost
            break
        }
    }
    return state
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export const changeTextareaActionCreator = (newText: string) => {
    return {
        type: UPDATING_TEXT_POST,
        textPost: newText
    } as const
}
