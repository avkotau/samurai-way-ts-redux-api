type PhotosType = {
    small: null
    large: null
}
export type UserType = {
    id: number
    followed: boolean
    name: string
    photos: PhotosType
    status: null
    uniqueUrlName: null
}
export type DialogueDataType = {
    id: string
    name: string
}
export type MessageDataType = {
    id: string
    message: string
}
export type PostDataType = {
    id: string
    message: string
    like: number
    published: string
}
export type SidebarDataType = {
    id: string
    name: string
    like: number
}
export type NewPostTextType = {
    id: string
    post: string
}
export type FormValuesType = {
    message: string;
}
type SidebarType = {
    sidebarData: SidebarDataType[]
}
export type DispatchType = {
    type: string
    textPost?: string
}
type ProfilePageType = {
    postsData: PostDataType[]
    newPostText: NewPostTextType[]
};
type DialoguesPageType = {
    dialoguesData: DialogueDataType[]
    messagesData: MessageDataType[]
    newMessageText: { id: number, name: string }[]
}
export type StateType = {
    dialoguesPage: DialoguesPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}
