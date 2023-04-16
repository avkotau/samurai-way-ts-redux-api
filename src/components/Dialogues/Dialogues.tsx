import React from 'react';
import s from './Dialogues.module.css'
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";
import { DialogueDataType, MessageDataType, NewMessageTextType } from "../../types/declarations";
import { addMessage, updatingMessageText } from "../../redux";

type Props = {
    dialoguesData: DialogueDataType[]
    messagesData: MessageDataType[]
    addMessage: () => void
    updatingMessageText: (textMessage: string) => void
    textMessage: NewMessageTextType
}

const Dialogues: React.FC<Props> = (
    {
        dialoguesData,
        messagesData,
        addMessage,
        updatingMessageText,
        textMessage
    }
) => {
    return (
        <div className={s.containerDialoguesMessages}>
            <Dialogue dialoguesData={dialoguesData}/>
            <Messages messagesData={messagesData}
                      addMessage={addMessage}
                      updatingMessageText={updatingMessageText}
                      textMessage={textMessage}/>
        </div>
    );
};

export default Dialogues;
