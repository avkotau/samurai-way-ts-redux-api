import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileResponseType } from "store/profileReducer";
import { ProfileInfo } from "components/Profile/ProfileInfo/ProfileInfo";

const Profile = (props: PropsType) => {

    return (
        <>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
                         statusError={props.statusError}
            />
            <MyPostsContainer/>
        </>
    )
}

export type PropsType = {
    profile: ProfileResponseType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: Blob) => void
    saveProfile: (formData: ProfileResponseType) => Promise<{ submitErrors: string } | undefined>
    statusError?: string
}

export default Profile;
