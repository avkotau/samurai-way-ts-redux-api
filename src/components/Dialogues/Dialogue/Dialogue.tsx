import React from 'react';
import s from '../Dialogues.module.css'
import { DialogueDataType, MessageDataType } from "types/commonTypes";
import { MessagesFriends } from "components/MessagesFriends/MessagesFriends";

type Props = {
    dialoguesData: DialogueDataType[]
    messagesData: MessageDataType[]
}

const Dialogue: React.FC<Props> = (
    {
        dialoguesData,
        messagesData
    }
) => {

    return (
        <div className={s.dialogues}>
            <MessagesFriends dialoguesData={dialoguesData} messagesData={messagesData}/>
        </div>
    )
}
export default Dialogue
