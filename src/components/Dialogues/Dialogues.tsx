import React from 'react';
import s from './Dialogues.module.css'
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";
import { DialogueDataType, MessageDataType, NewMessageTextType } from "../../types/declarations";
import { DispatchType } from "../../redux";

type Props = {
    dialoguesData: DialogueDataType[]
    messagesData: MessageDataType[]
    dispatch: (action: DispatchType) => void
    textMessage: NewMessageTextType
}

const Dialogues: React.FC<Props> = (
    {
        dialoguesData,
        messagesData,
        dispatch,
        textMessage
    }
) => {
    return (
        <div className={s.containerDialoguesMessages}>
            <Dialogue dialoguesData={dialoguesData}/>
            <Messages messagesData={messagesData}
                      dispatch={dispatch}
                      textMessage={textMessage}/>
        </div>
    );
};

export default Dialogues;
