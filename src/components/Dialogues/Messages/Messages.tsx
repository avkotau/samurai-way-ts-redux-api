import React, { useEffect, useRef } from 'react';
import s from '../Dialogues.module.css'
import MessageForm from "../../MessageForm/MessageForm";
import { MessageDataType } from "types/commonTypes";
import g from '../../common/stylesForScroll.module.css'
import avaGirl from 'assets/images/avaGirl.png'
import photo from 'assets/images/photoUser.png'
import { ProfileType, refreshProfile } from "components/Profile/ProfileContainer";

type Props = {
    messagesData: MessageDataType[]
    addMessage: (newMessage: string) => void
}

const Messages: React.FC<ProfileType & Props> = (
    props
) => {
    const {
        messagesData,
        addMessage,
        profile
    } = props

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

    useEffect(() => {
        refreshProfile(props);
    }, []);

    const ava = profile.photos.large

    return (
        <div className={s.messagesOnline}>
            <div className={`${s.messagesContainer} ${g.customScrollbar}`}>
                <div className={s.contact}>
                    <div className={s.avatar}>
                        <img src={avaGirl} alt="Linda Johnson"/>
                    </div>
                    <div className={s.contactInfo}>
                        <div className={s.name}>James Smith</div>
                        <div className={s.online}>Online</div>
                    </div>
                </div>

                <div className={s.messages}>
                    <div key={messagesData[0].id} className={` ${s.message}`}>
                        <div className={s.avatar}><img
                            src={ava || photo} alt="logo"/>
                        </div>
                        <div className={s.text}>{messagesData[0].message}</div>
                    </div>
                    <div key={messagesData[0].id} className={` ${s.message}`}>
                        <div className={s.avatar}><img
                            src={ava || photo} alt="logo"/>
                        </div>
                        <div className={s.text}>Did you like it there?</div>
                    </div>
                    {messagesData.slice(8).map(m => (
                        <div key={m.id} className={` ${s.message}`}>
                            <div className={s.avatar}><img
                                src={ava || photo} alt="logo"/>
                            </div>
                            <div className={s.text}>{m.message}</div>
                        </div>
                    ))}
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
