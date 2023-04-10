import React from 'react';
import s from './Dialogues.module.css'
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";
import { DialogueDataType, MessageDataType } from "../../types/declarations";

type Props = {
    dialoguesData: DialogueDataType[]
    messagesData: MessageDataType[];
}

const Dialogues: React.FC<Props> = (
    {
        dialoguesData,
        messagesData
    }
) => {
    return (
        <div className={s.containerDialoguesMessages}>
            <Dialogue dialoguesData={dialoguesData}/>
            <Messages messagesData={messagesData}/>
        </div>
    );
};

export default Dialogues;
