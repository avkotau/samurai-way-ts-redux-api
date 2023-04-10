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
    name: string
}

export type DialoguesDataArrayType = {
    dialoguesData: DialogueDataType[]
}

export type MessagesDataArrayType = {
    messagesData: MessageDataType[]
}

export interface DialoguesMessages {
    dialoguesData: DialoguesDataArrayType;
    messagesData: MessagesDataArrayType;
}
