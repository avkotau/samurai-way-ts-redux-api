import React, { useEffect, useRef } from 'react';
import s from '../Dialogues.module.css'
import MessageForm from "../../MessageForm/MessageForm";
import { MessageDataType } from "types/commonTypes";
import { myFriendBase64 } from "assets/images/base64";
import g from '../../common/stylesForScroll.module.css'

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
    const sendMessage = (values: Record<string, any>) => {
        addMessage(values.textarea)
    }
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messagesData]);

    return (
        <div>
            <div className={`${s.messagesContainer} ${g.customScrollbar}`}>
                <div className={s.contact}>
                    <div className={s.avatar}>
                        <img src={myFriendBase64} alt="Linda Johnson"/>
                    </div>
                    <div className={s.contactInfo}>
                        <div className={s.name}>James Smith</div>
                        <div className={s.online}>Online</div>
                    </div>
                </div>

                <div className={s.messages}>
                    <div key={messagesData[0].id} className={` ${s.message}`}>
                        <div className={s.avatar}><img
                            src={myFriendBase64} alt="logo"/>
                        </div>
                        <div className={s.text}>{messagesData[0].message}</div>
                    </div>
                    <div key={messagesData[0].id} className={` ${s.message}`}>
                        <div className={s.avatar}><img
                            src={myFriendBase64} alt="logo"/>
                        </div>
                        <div className={s.text}>Did you like it there?</div>
                    </div>
                </div>
                <div ref={messagesEndRef}/>
            </div>
            <MessageForm
                onSubmit={sendMessage}
            />
        </div>
    )
}

export default Messages

