import { DialogueDataType, MessageDataType, PostDataType, SitePanelFriendsDataType } from "../types/declarations";

// export type StateType = {
//     dialoguesData: DialogueDataType[]
//     messagesData: MessageDataType[]
//     postsData: PostDataType[]
// }

// export let state: StateType = {
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
//     ]
// }


export const dialoguesData: DialogueDataType[] = [
    {id: 1, name: 'Victor'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Sacha'},
    {id: 4, name: 'Masha'}
]

export const messagesData: MessageDataType[] = [
    {id: 1, message: 'Hello Victor'},
    {id: 2, message: 'Hello Dima'},
    {id: 3, message: 'Hello Sacha'},
    {id: 4, message: 'Hello Masha'}
]

export const postsData: PostDataType[] = [
    {id: 1, message: 'Hello bro', like: 12},
    {id: 2, message: 'Hello man', like: 20},
    {id: 3, message: 'Hello women', like: 6}
]

export const sitePanelFriendsData: SitePanelFriendsDataType[] = [
    {id: 1, name: 'Lena', like: 12},
    {id: 2, name: 'Kola', like: 20},
    {id: 3, name: 'Nikita', like: 6}
]


