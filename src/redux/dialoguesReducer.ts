import { DialogueDataType, MessageDataType } from "../types/declarations";

export type ActionsDialoguesType = AddMessageType

type AddMessageType = ReturnType<typeof addMessageActionCreator>

const initialState = {
    dialoguesData: [
        {id: Math.random().toString(36).slice(2), name: 'Victor'},
        {id: Math.random().toString(36).slice(2), name: 'Dima'},
        {id: Math.random().toString(36).slice(2), name: 'Sacha'},
        {id: Math.random().toString(36).slice(2), name: 'Masha'}
    ] as Array<DialogueDataType>,

    messagesData: [
        {id: Math.random().toString(36).slice(2), message: 'Hello Victor'},
        {id: Math.random().toString(36).slice(2), message: 'Hello Dima'},
        {id: Math.random().toString(36).slice(2), message: 'Hello Sacha'},
        {id: Math.random().toString(36).slice(2), message: 'Hello Masha'}
    ] as Array<MessageDataType>,
}

export type InitialStateType = typeof initialState
export const dialoguesReducer = (state: InitialStateType = initialState, action: ActionsDialoguesType): InitialStateType => {

    switch (action.type) {
        case 'ADD_MESSAGE': {
            const newMessage: MessageDataType = {
                id: Math.random().toString(36).slice(2),
                message: action.newMessage
            }
            return {...state, messagesData: [newMessage, ...state.messagesData]}
        }
        default: {
            return state
        }
    }
}

export const addMessageActionCreator = (newMessage: string) => {
    return {
        type: 'ADD_MESSAGE',
        newMessage
    } as const
}
