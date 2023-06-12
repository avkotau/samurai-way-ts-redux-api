import {
    DialogueDataType,
    MessageDataType, NewMessageTextType,
    NewPostTextType,
    PostDataType, SidebarDataType,
} from "../types/declarations";
import { profileReducer } from "./profileReducer";
import { dialoguesReducer } from "./dialoguesReducer";
import { sidebarReducer } from "./sidebarReducer";


export type SidebarType = {
    sidebarData: SidebarDataType[]
}

export type DispatchType = {
    type: string
    textPost?: string
}

export type ProfilePageType = {
    postsData: PostDataType[]
    newPostText: NewPostTextType[]
}

export type DialoguesPageType = {
    dialoguesData: DialogueDataType[]
    messagesData: MessageDataType[]
    newMessageText: NewMessageTextType[]
}

export type StateType = {
    dialoguesPage: DialoguesPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}
export type ObserverFunction = () => void;

export type ObservableObject = {
    subscribe: (observer: ObserverFunction) => void
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscriber: (observer: (state: StateType) => void) => void
    dispatch: (action: any) => void
}


export const store: StoreType = {
    _state: {
        dialoguesPage: {
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
        },
        profilePage: {
            postsData: [
                {id: Math.random().toString(36).slice(2), message: 'Hello bro', like: 12},
                {id: Math.random().toString(36).slice(2), message: 'Hello man', like: 20},
                {id: Math.random().toString(36).slice(2), message: 'Hello women', like: 6}
            ],
            newPostText: [
                {id: Math.random().toString(36).slice(2), post: ''}
            ],
        },
        sidebar: {
            sidebarData: [
                {id: Math.random().toString(36).slice(2), name: 'Lena', like: 12},
                {id: Math.random().toString(36).slice(2), name: 'Kola', like: 20},
                {id: Math.random().toString(36).slice(2), name: 'Nikita', like: 6}
            ]
        }
    },

    getState() {
        return this._state
    },

    _callSubscriber(state: StateType) {
        console.log('rerender')
        return state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
    },

    subscriber(observer) {
        this._callSubscriber = observer
    }

}



