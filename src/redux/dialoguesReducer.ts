import { MessageDataType } from "../types/declarations";
import { DialoguesPageType } from "./index";


export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATING_MESSAGE_TEXT = 'UPDATING_MESSAGE_TEXT';

export type ActionsDialoguesType = AddMessageType | UpdateMessageTextType

type AddMessageType = ReturnType<typeof addMessageActionCreator>
type UpdateMessageTextType = ReturnType<typeof updateMessageTextActionCreator>


const initialState = {
    dialoguesData: [
        {id: Math.random().toString(36).slice(2), name: 'Victor'},
        {id: Math.random().toString(36).slice(2), name: 'Dima'},
        {id: Math.random().toString(36).slice(2), name: 'Sacha'},
        {id: Math.random().toString(36).slice(2), name: 'Masha'}
    ],
    messagesData: [
        {id: Math.random().toString(36).slice(2), message: 'Hello Victor'},
        {id: Math.random().toString(36).slice(2), message: 'Hello Dima'},
        {id: Math.random().toString(36).slice(2), message: 'Hello Sacha'},
        {id: Math.random().toString(36).slice(2), message: 'Hello Masha'}
    ],
    newMessageText: [
        {id: Math.random().toString(36).slice(2), message: ''}
    ]
}
export const dialoguesReducer = (state: DialoguesPageType = initialState, action: ActionsDialoguesType): DialoguesPageType => {


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

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}

export const updateMessageTextActionCreator = (textMessage: string) => {
    return {
        type: UPDATING_MESSAGE_TEXT,
        textMessage: textMessage
    } as const
}
