import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileResponseType } from "store/profileReducer";
import { ProfileInfo } from "components/Profile/ProfileInfo/ProfileInfo";

const Profile = (props: PropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}

export type PropsType = {
    profile: ProfileResponseType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: Blob) => void
    saveProfile: (formData: ProfileResponseType) => Promise<{ submitErrors: string } | undefined>

}

export default Profile;
