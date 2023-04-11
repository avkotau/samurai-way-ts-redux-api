import React, { FC, useRef, useState } from 'react';
import s from '../Dialogues.module.css'
import { MessageDataType } from "../../../types/declarations";

type Props = {
    messagesData: MessageDataType[];
}

const Messages: React.FC<Props> = (
    {
        messagesData
    }
) => {
    const [message, setMessage] = useState('');
    let newMessage = useRef<HTMLTextAreaElement>(null);

    const textareaHandle = () => {
        setMessage(newMessage.current?.value || '');

    }

    const addMessageHandle = () => {
        console.log(message)
        setMessage('');
    }

    return (
        <div className={s.messages}>
            {messagesData.map(el => (
                <div key={el.id} className={s.dialogue}>{el.message}</div>
            ))}
            <div>
                <textarea value={message} ref={newMessage} onChange={textareaHandle}>

                </textarea>
                <button onClick={addMessageHandle} disabled={!message.trim()}>Add message</button>
            </div>

        </div>
    )
}

export default Messages

