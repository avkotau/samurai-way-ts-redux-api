import React from 'react';
import s from './Dialogues.module.css'
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";
import { DialoguesType } from "./DialoguesContainer";

const Dialogues: React.FC<DialoguesType> = (
    {
        dialoguesData,
        messagesData,
        addMessage,
    }
) => {

    return (
        <div className={s.containerDialoguesMessages}>
            <Dialogue dialoguesData={dialoguesData}/>
            <Messages messagesData={messagesData}
                      addMessage={addMessage}
            />
        </div>
    );
};

export default Dialogues;
