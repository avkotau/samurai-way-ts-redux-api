import { MessageDataType } from "../types/declarations";
import { DialoguesPageType } from "./index";


const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATING_MESSAGE_TEXT = 'UPDATING_MESSAGE_TEXT';

export const dialoguesReducer = (state: DialoguesPageType, action: any) => {


    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage: MessageDataType = {
                id: Math.random().toString(36).slice(2),
                message: state.newMessageText[0].message

            }
            state.messagesData.push(newMessage)
            state.newMessageText[0].message = ''
            break
        }
        case UPDATING_MESSAGE_TEXT: {
            state.newMessageText[0].message = action.textMessage
            break
        }
        default: {
            return state
        }
    }
    return state

}
