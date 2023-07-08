import { DialogueDataType, MessageDataType, NewMessageTextType } from "../types/declarations";


export type ActionsDialoguesType = AddMessageType | UpdateMessageTextType

type AddMessageType = ReturnType<typeof addMessageActionCreator>
type UpdateMessageTextType = ReturnType<typeof updateMessageTextActionCreator>


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

    newMessageText: [
        {id: Math.random().toString(36).slice(2), message: ''}
    ] as Array<NewMessageTextType>
}

export type InitialStateType = typeof initialState
export const dialoguesReducer = (state: InitialStateType = initialState, action: ActionsDialoguesType): InitialStateType => {


    switch (action.type) {
        case 'ADD_MESSAGE': {
            const newMessage: MessageDataType = {
                id: Math.random().toString(36).slice(2),
                message: state.newMessageText[0].message
            }
            return {...state, messagesData: [newMessage, ...state.messagesData]}

            // state.newMessageText[0].message = '' must clean input after send message
            break
        }
        case 'UPDATING_MESSAGE_TEXT': {
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
        type: 'ADD_MESSAGE',
    } as const
}

export const updateMessageTextActionCreator = (textMessage: string) => {
    return {
        type: 'UPDATING_MESSAGE_TEXT',
        textMessage: textMessage
    } as const
}
