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

export const state: StateType = {
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
}


// export const dialoguesData: DialogueDataType[] = [
//     {id: 1, name: 'Victor'},
//     {id: 2, name: 'Dima'},
//     {id: 3, name: 'Sacha'},
//     {id: 4, name: 'Masha'}
// ]
//
// export const messagesData: MessageDataType[] = [
//     {id: 1, message: 'Hello Victor'},
//     {id: 2, message: 'Hello Dima'},
//     {id: 3, message: 'Hello Sacha'},
//     {id: 4, message: 'Hello Masha'}
// ]
//
// export const postsData: PostDataType[] = [
//     {id: 1, message: 'Hello bro', like: 12},
//     {id: 2, message: 'Hello man', like: 20},
//     {id: 3, message: 'Hello women', like: 6},
// ]
//
// export const sitePanelFriendsData: SitePanelFriendsDataType[] = [
//     {id: 1, name: 'Lena', like: 12},
//     {id: 2, name: 'Kola', like: 20},
//     {id: 3, name: 'Nikita', like: 6}
// ]

let rerenderTree = (state:StateType) => {
    console.log('rerender')
}

export const addPost = () => {
    const newPost: PostDataType = {
        id: 4,
        message: state.newPostText[0].post,
        like: 0
    }
    state.postsData.push(newPost)
    state.newPostText[0].post = ''
    rerenderTree(state)
}

export const updatingTextPost = (textPost: string) => {
    state.newPostText[0].post = textPost
    rerenderTree(state)
}


export const addMessage = () => {
    const newMessage: MessageDataType = {
        id: 0,
        message: state.newMessageText[0].message
    }
    state.messagesData.push(newMessage)
    state.newMessageText[0].message = ''
    rerenderTree(state)
}

export const updatingMessageText = (textMessage: string) => {
    state.newMessageText[0].message = textMessage
    rerenderTree(state)
}


export const subscriber = (observer: () => void ) => {
    rerenderTree = observer
}
