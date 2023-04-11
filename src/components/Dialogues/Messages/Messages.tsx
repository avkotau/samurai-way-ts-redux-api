import React, { FC } from 'react';
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
    return (
        <div className={s.messages}>
            {messagesData.map(el => (
                <div key={el.id} className={s.dialogue}>{el.message}</div>
            ))}
        </div>
    )
}

export default Messages

