import React from 'react';
import s from './Dialogues.module.css'
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";
import { DialoguesType } from "./DialoguesContainer";
import { Redirect } from "react-router-dom";

const Dialogues: React.FC<DialoguesType> = (
    {
        dialoguesData,
        messagesData,
        updateMessageText,
        addMessage,
        newMessageText,
        isAuth
    }
) => {
    if (!isAuth) return <Redirect to={'login'}/>

    return (
        <div className={s.containerDialoguesMessages}>
            <Dialogue dialoguesData={dialoguesData}/>
            <Messages messagesData={messagesData}
                      updateMessageText={updateMessageText}
                      addMessage={addMessage}
                      textMessage={newMessageText}
            />
        </div>
    );
};

export default Dialogues;
