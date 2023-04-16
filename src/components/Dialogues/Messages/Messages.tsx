import React, { ChangeEvent, FC, useRef, useState } from 'react';
import s from '../Dialogues.module.css'
import { MessageDataType, NewMessageTextType } from "../../../types/declarations";
import { addMessage, updatingMessageText } from "../../../redux";

type Props = {
    messagesData: MessageDataType[]
    addMessage: () => void
    updatingMessageText: (textMessage: string) => void
    textMessage: NewMessageTextType
}

const Messages: React.FC<Props> = (
    {
        messagesData,
        addMessage,
        updatingMessageText,
        textMessage
    }
) => {

    const textareaHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updatingMessageText(e.currentTarget.value)
        console.log(textMessage.message)
    }

    const addMessageHandle = () => {
        addMessage()
    }
    console.log(textMessage)
    return (
        <div className={s.messages}>
            {messagesData.map(el => (
                <div key={el.id} className={s.dialogue}>{el.message}</div>
            ))}
            <div>
                <textarea
                    value={textMessage.message}
                    // ref={newMessage}
                    onChange={textareaHandle}>

                </textarea>
                {/*disabled={!message.trim()}*/}
                <button onClick={addMessageHandle}>Add message</button>
            </div>

        </div>
    )
}

export default Messages

