declare module "*.css" {
    const content: { [className: string]: string };
    export = content;
}

export type DialogueDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}
export type PostDataType = {
    id: number
    message: string
    like: number
}
export type SitePanelFriendsDataType = {
    id: number
    name: string
    like: number
}


