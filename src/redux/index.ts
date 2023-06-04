import {
    DialogueDataType,
    MessageDataType, NewMessageTextType,
    NewPostTextType,
    PostDataType,
    SitePanelFriendsDataType
} from "../types/declarations";


const ADD_POST = 'ADD-POST';
const UPDATING_TEXT_POST = 'UPDATING-TEXT-POST';


const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATING_MESSAGE_TEXT = 'UPDATING_MESSAGE_TEXT';


export type DispatchType = {
    type: string
    textPost?: string
}

export type StateType = {
    dialoguesData: DialogueDataType[]
    messagesData: MessageDataType[]
    postsData: PostDataType[]
    sitePanelFriendsData: SitePanelFriendsDataType[]
    newPostText: NewPostTextType[]
    newMessageText: NewMessageTextType[]

}
export type ObserverFunction = () => void;

export type ObservableObject = {
    subscribe: (observer: ObserverFunction) => void
}

export type StoreType = {
    _state: StateType
    getState: () => void
    _callSubscriber: (state: any) => void
    updatingTextPost: (textPost: string) => void
    addMessage: () => void
    updatingMessageText: (textMessage: string) => void
    subscriber: (observer: any) => void
    dispatch: (action: any) => void
}


export const store: StoreType = {
    _state: {
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
        postsData: [
            {id: Math.random().toString(36).slice(2), message: 'Hello bro', like: 12},
            {id: Math.random().toString(36).slice(2), message: 'Hello man', like: 20},
            {id: Math.random().toString(36).slice(2), message: 'Hello women', like: 6}
        ],
        sitePanelFriendsData: [
            {id: Math.random().toString(36).slice(2), name: 'Lena', like: 12},
            {id: Math.random().toString(36).slice(2), name: 'Kola', like: 20},
            {id: Math.random().toString(36).slice(2), name: 'Nikita', like: 6}
        ],
        newPostText: [
            {id: Math.random().toString(36).slice(2), post: ''}
        ],
        newMessageText: [
            {id: Math.random().toString(36).slice(2), message: ''}
        ],

    },

    getState() {
        return this._state
    },

    _callSubscriber(state: any) {
        console.log('rerender')
        return state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostDataType = {
                //Change to number
                id: Math.random().toString(36).slice(2),
                message: this._state.newPostText[0].post,
                like: 0
            }

            this._state.postsData.push(newPost)
            this._state.newPostText[0].post = ''

            this._callSubscriber(this._state);
        } else if (action.type === UPDATING_TEXT_POST) {
            this._state.newPostText[0].post = action.textPost

            this._callSubscriber(this._state);
        } else if(action.type === ADD_MESSAGE) {
            const newMessage: MessageDataType = {
                id: Math.random().toString(36).slice(2),
                message: this._state.newMessageText[0].message
            }
            this._state.messagesData.push(newMessage)
            this._state.newMessageText[0].message = ''

            this._callSubscriber(this._state);
        } else if (action.type === UPDATING_MESSAGE_TEXT) {
            this._state.newMessageText[0].message = action.textMessage

            this._callSubscriber(this._state);
        }
    },

    subscriber(observer: any) {
        this._callSubscriber = observer
    }

}



export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const onChangeTextarea = (newText: string) => {
    return {
        type: UPDATING_TEXT_POST,
        textPost: newText
    }
}

export const addMessage = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export const updateMessageText = (textMessage: string) => {
    return {
        type: UPDATING_MESSAGE_TEXT,
        textMessage: textMessage
    }
}

