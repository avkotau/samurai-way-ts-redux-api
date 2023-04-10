import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostsDataArrayType } from "../../types/declarations";

const Profile: React.FC<PostsDataArrayType> = ({
                                                   postsData
                                               }) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    );
};

export default Profile;
