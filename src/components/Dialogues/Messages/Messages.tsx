import React from 'react';
import s from '../Dialogues.module.css'
import { FormValuesType, MessageDataType } from "../../../types/declarations";
import MessageForm from "../../MessageForm/MessageForm";

type Props = {
    messagesData: MessageDataType[]
    addMessage: (newMessage: string) => void
}

const Messages: React.FC<Props> = (
    {
        messagesData,
        addMessage,
    }
) => {

    const sendMessage = (values: FormValuesType) => {
        addMessage(values.textarea)
    }

    return (
        <div className={s.messages}>
            {messagesData.map(el => (
                <div key={el.id} className={s.dialogue}>{el.message}</div>
            ))}
            <MessageForm
                onSubmit={sendMessage}
            />
        </div>
    )
}

export default Messages

