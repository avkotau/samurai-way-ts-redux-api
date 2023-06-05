import React, { ChangeEvent } from 'react';
import s from '../Dialogues.module.css'
import { MessageDataType, NewMessageTextType } from "../../../types/declarations";
import { DispatchType } from "../../../redux";
import { addMessageActionCreator, updateMessageTextActionCreator } from "../../../redux/dialoguesReducer";

type Props = {
    messagesData: MessageDataType[]
    dispatch: (action: DispatchType) => void
    textMessage: NewMessageTextType
}

const Messages: React.FC<Props> = (
    {
        messagesData,
        dispatch,
        textMessage
    }
) => {

    const textareaHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateMessageTextActionCreator(e.currentTarget.value))
    }

    const addMessageHandle = () => {
        dispatch(addMessageActionCreator())
    }

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

