import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostDataType } from "../../types/declarations";

type Props = {
    postsData: PostDataType[];
}

const Profile: React.FC<Props> = (
    {
        postsData
    }
) => {
    console.log('postsData', postsData)
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    );
};

export default Profile;
