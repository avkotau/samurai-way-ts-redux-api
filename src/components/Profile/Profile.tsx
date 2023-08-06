import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileResponseType } from "../../redux/profileReducer";

export type PropsType = {
    profile: ProfileResponseType | null
}
const Profile = (props: PropsType) => {

        return (
            <div className={s.content}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer />
            </div>
        )
}

export default Profile;
