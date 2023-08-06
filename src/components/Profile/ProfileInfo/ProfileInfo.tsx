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

                <dl>
                    <dt>Full name:</dt>
                    <dd>{props.profile.fullName}</dd>

                    <dt>about me:</dt>
                    <dd>{props.profile.aboutMe}</dd>

                    <dt>Looking for a job:</dt>
                    <dd>{props.profile.lookingForAJob ? "Yes" : "No"}</dd>

                    <dt>Description:</dt>
                    <dd>{props.profile.lookingForAJobDescription}</dd>
                </dl>
                <h3>Contact:</h3>
                <ul>
                    <li>facebook: {props.profile.contacts.facebook}</li>
                    <li>website: {props.profile.contacts.website}</li>
                    <li>vk: {props.profile.contacts.vk}</li>
                    <li>twitter: {props.profile.contacts.twitter}</li>
                    <li>instagram: {props.profile.contacts.instagram}</li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileInfo;
