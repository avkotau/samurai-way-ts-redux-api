import {
    DialogueDataType,
    MessageDataType, NewMessageTextType,
    NewPostTextType,
    PostDataType,
    SitePanelFriendsDataType
} from "../types/declarations";
// import { rerenderTree } from "../index";

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
    _rerenderTree: () => void
    addPost: () => void
    updatingTextPost: (textPost: string) => void
    addMessage: () => void
    updatingMessageText: (textMessage: string) => void
    subscriber: (observer: any) => void
}

export const store: StoreType = {
    _state: {
        dialoguesData: [
            {id: 1, name: 'Victor'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Sacha'},
            {id: 4, name: 'Masha'}
        ],
        messagesData: [
            {id: 1, message: 'Hello Victor'},
            {id: 2, message: 'Hello Dima'},
            {id: 3, message: 'Hello Sacha'},
            {id: 4, message: 'Hello Masha'}
        ],
        postsData: [
            {id: 1, message: 'Hello bro', like: 12},
            {id: 2, message: 'Hello man', like: 20},
            {id: 3, message: 'Hello women', like: 6}
        ],
        sitePanelFriendsData: [
            {id: 1, name: 'Lena', like: 12},
            {id: 2, name: 'Kola', like: 20},
            {id: 3, name: 'Nikita', like: 6}
        ],
        newPostText: [
            {id: 0, post: ''}
        ],
        newMessageText: [
            {id: 0, message: ''}
        ]
    },

    getState () {
        return this._state
    },

    _rerenderTree () {
        console.log('rerender')
    },

    addPost () {

        const newPost: PostDataType = {
            //Change to number
            id: Math.random().toString(36).slice(2),
            message: this._state.newPostText[0].post,
            like: 0
        }

        this._state.postsData.push(newPost)
        this._state.newPostText[0].post = ''
        // this._rerenderTree(this._state)
        this._rerenderTree(this._state);
    },

    updatingTextPost (textPost: string) {

        this._state.newPostText[0].post = textPost
        // this._rerenderTree(this._state)
        this._rerenderTree(this._state);
    },

    addMessage () {
        const newMessage: MessageDataType = {
            id: 0,
            message: this._state.newMessageText[0].message
        }
        this._state.messagesData.push(newMessage)
        this._state.newMessageText[0].message = ''
        // this._rerenderTree(this._state)
        this._rerenderTree(this._state);
    },
    updatingMessageText (textMessage: string) {

        this._state.newMessageText[0].message = textMessage
       // / this._rerenderTree(this._state)
        this._rerenderTree(this._state);
    },
    subscriber (observer: any ) {
        this._rerenderTree = observer
    }

}



// export const state: StateType = {
//     dialoguesData: [
//         {id: 1, name: 'Victor'},
//         {id: 2, name: 'Dima'},
//         {id: 3, name: 'Sacha'},
//         {id: 4, name: 'Masha'}
//     ],
//     messagesData: [
//         {id: 1, message: 'Hello Victor'},
//         {id: 2, message: 'Hello Dima'},
//         {id: 3, message: 'Hello Sacha'},
//         {id: 4, message: 'Hello Masha'}
//     ],
//     postsData: [
//         {id: 1, message: 'Hello bro', like: 12},
//         {id: 2, message: 'Hello man', like: 20},
//         {id: 3, message: 'Hello women', like: 6}
//     ],
//     sitePanelFriendsData: [
//         {id: 1, name: 'Lena', like: 12},
//         {id: 2, name: 'Kola', like: 20},
//         {id: 3, name: 'Nikita', like: 6}
//     ],
//     newPostText: [
//         {id: 0, post: ''}
//     ],
//     newMessageText: [
//         {id: 0, message: ''}
//     ]
// }

// let rerenderTree = (state:StateType) => {
//     console.log('rerender')
// }

// export const addPost = () => {
//     const newPost: PostDataType = {
//         id: 4,
//         message: state.newPostText[0].post,
//         like: 0
//     }
//     state.postsData.push(newPost)
//     state.newPostText[0].post = ''
//     rerenderTree(state)
// }

// export const updatingTextPost = (textPost: string) => {
//     state.newPostText[0].post = textPost
//     rerenderTree(state)
// }


// export const addMessage = () => {
//     const newMessage: MessageDataType = {
//         id: 0,
//         message: state.newMessageText[0].message
//     }
//     state.messagesData.push(newMessage)
//     state.newMessageText[0].message = ''
//     rerenderTree(state)
// }

// export const updatingMessageText = (textMessage: string) => {
//     state.newMessageText[0].message = textMessage
//     rerenderTree(state)
// }


// export const subscriber = (observer: () => void ) => {
//     rerenderTree = observer
// }
