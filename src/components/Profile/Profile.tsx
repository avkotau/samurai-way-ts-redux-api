import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileResponseType } from "store/profileReducer";

const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}

export type PropsType = {
    profile: ProfileResponseType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: Blob) => void
}

export default Profile;
