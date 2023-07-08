import React, { ChangeEvent } from 'react';
import s from '../Dialogues.module.css'
import { MessageDataType, NewMessageTextType } from "../../../types/declarations";

type Props = {
    messagesData: MessageDataType[]
    updateMessageText: (value: string) => void
    addMessage: () => void
    textMessage: NewMessageTextType[]
}

const Messages: React.FC<Props> = (
    {
        messagesData,
        updateMessageText,
        addMessage,
        textMessage
    }
) => {

    const textareaHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateMessageText(e.currentTarget.value)
    }

    const addMessageHandle = () => {
        addMessage()
    }

    return (
        <div className={s.messages}>
            {messagesData.map(el => (
                <div key={el.id} className={s.dialogue}>{el.message}</div>
            ))}
            <div>
                <textarea
                    value={textMessage[0].message}
                    onChange={textareaHandle}>
                </textarea>

                <button onClick={addMessageHandle}>Add message</button>
            </div>

        </div>
    )
}

export default Messages

