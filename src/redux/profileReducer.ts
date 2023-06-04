import { PostDataType } from "../types/declarations";
import { ProfilePageType } from "./index";

const ADD_POST = 'ADD-POST';
const UPDATING_TEXT_POST = 'UPDATING-TEXT-POST';


export const profileReducer = (state: ProfilePageType, action: any) => {
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
        }
        break
        case UPDATING_TEXT_POST: {
            state.newPostText[0].post = action.textPost
            break
        }
    }
    return state
}

