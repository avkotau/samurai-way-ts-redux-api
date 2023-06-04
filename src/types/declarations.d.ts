declare module "*.css" {
    const content: { [className: string]: string };
    export = content;
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
export type NewMessageTextType = {
    id: string
    message: string
}


