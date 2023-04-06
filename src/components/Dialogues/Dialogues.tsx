import React from 'react';
import s from './Dialogues.module.css'

const Dialogues = () => {
    return (
        <div className={s.containerDialogues}>
            <div className={s.dialogues}>
                <div className={s.dialogue}>Victor</div>
                <div className={s.dialogue}>Dima</div>
                <div className={s.dialogue}>Sacha</div>
                <div className={s.dialogue}>Vitia</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello Victor</div>
                <div className={s.message}>Hello Dima</div>
                <div className={s.message}>Hello Sacha</div>
                <div className={s.message}>Hello Vitia</div>
            </div>
        </div>
    );
};

export default Dialogues;
