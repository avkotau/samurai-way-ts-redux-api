import React from 'react';
import s from './Dialogues.module.css'
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";
import { DialoguesDataArrayType } from "../../types/declarations";


const Dialogues: React.FC<DialoguesDataArrayType> = ({
                                                         dialoguesData,
                                                         messagesData
                                                     }) => {
    return (
        <div className={s.containerDialoguesMessages}>
            <Dialogue dialoguesData={dialoguesData}/>
            <Messages messagesData={messagesData}/>
        </div>
    );
};

export default Dialogues;
