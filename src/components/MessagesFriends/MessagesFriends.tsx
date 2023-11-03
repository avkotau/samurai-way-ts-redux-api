import { myFriendBase64 } from "assets/images/base64";
import s from './MessagesFriends.module.css'
import g from '../common/stylesForScroll.module.css'
import React, { FC } from "react";
import { DialogueDataType, MessageDataType } from "types/commonTypes";

type Props = {
    dialoguesData: DialogueDataType[]
    messagesData: MessageDataType[]
}

export const MessagesFriends: FC<Props> = ({dialoguesData, messagesData}) => {
    return (
        <div>
            <h2>Messages</h2>
            <div className={`${s.contactPart} ${g.customScrollbar}`}>

                {dialoguesData.map((f,i) => (

                    <div className={s.contact}>
                        <div className={s.avatar}>
                            <img src={myFriendBase64} alt={f.name}/></div>
                        <div className={s.contactInfo}>
                            <div className={s.name}>
                                <a className=""
                                   href="#">
                                    {f.name}
                                </a>
                            </div>
                            <div className={s.message}>{messagesData[i].message}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
