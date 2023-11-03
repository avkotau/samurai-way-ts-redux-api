import { DialogueDataType, MessageDataType } from "types/commonTypes";

const initialState = {
    dialoguesData: [
        {id: Math.random().toString(36).slice(2), name: 'Linda Johnson'},
        {id: Math.random().toString(36).slice(2), name: 'Mary Miller'},
        {id: Math.random().toString(36).slice(2), name: 'James Smith'},
        {id: Math.random().toString(36).slice(2), name: 'Patricia Brown'},
        {id: Math.random().toString(36).slice(2), name: 'Robert Williams'},
        {id: Math.random().toString(36).slice(2), name: 'Mary Miller'},
        {id: Math.random().toString(36).slice(2), name: 'William Davis'},
        {id: Math.random().toString(36).slice(2), name: 'Sarah Taylor'}
    ] as Array<DialogueDataType>,

    messagesData: [
        {id: Math.random().toString(36).slice(2), message: 'Had the most amazing dinner at that new restaurant'},
        {id: Math.random().toString(36).slice(2), message: 'Can\'t believe the final episode of the sho'},
        {id: Math.random().toString(36).slice(2), message: 'I\'m running late, but I\'ll be there in 10, sor'},
        {id: Math.random().toString(36).slice(2), message: 'Hey, did you get the documents I sen'},
        {id: Math.random().toString(36).slice(2), message: 'The meeting\'s been rescheduled to next'},
        {id: Math.random().toString(36).slice(2), message: 'I heard about the incident, are you okay af'},
        {id: Math.random().toString(36).slice(2), message: 'Managed to get us two tickets for the conce'},
        {id: Math.random().toString(36).slice(2), message: 'Please remember to bring your swimsuit beca'}
    ] as Array<MessageDataType>,
}

export const dialoguesReducer = (state: InitialStateType = initialState, action: ActionsDialoguesType): InitialStateType => {

    switch (action.type) {
        case 'ADD_MESSAGE': {
            const newMessage: MessageDataType = {
                id: Math.random().toString(36).slice(2),
                message: action.newMessage
            }
            return {...state, messagesData: [...state.messagesData, newMessage]}
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

export type InitialStateType = typeof initialState
export type ActionsDialoguesType = AddMessageType
type AddMessageType = ReturnType<typeof addMessageActionCreator>
