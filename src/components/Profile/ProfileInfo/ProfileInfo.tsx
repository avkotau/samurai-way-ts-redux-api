import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import { PropsType } from "../Profile";

//    aboutMe: string;
//     contacts: {
//         facebook: string;
//         website: null | string;
//         vk: string;
//         twitter: string;
//         instagram: string;
//     };
//     fullName: string;
//     lookingForAJob: boolean;
//     lookingForAJobDescription: string;
//     photos: {
//         small: string;
//         large: string;
//     };
//     userId: number;

const ProfileInfo = (props: PropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfoContainer}>
            <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                alt=""/>
            <div className={s.description}>

                <img src={props.profile.photos.large} alt=''/>
                ava + descr
                //SHOW ALL PROPS https://social-network.samuraijs.com/api/1.0/profile/2
                <div>{props.profile.aboutMe}</div>
                <div> {props.profile.contacts.facebook}</div>
                <ul>
                    Contact:
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileInfo;
