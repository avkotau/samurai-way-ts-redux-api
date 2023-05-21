import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { NewPostTextType, PostDataType } from "../../types/declarations";

type Props = {
    postsData: PostDataType[];
    addPost: () => void
    updatingTextPost: (textPost: string) => void
    newPostText: NewPostTextType
}

const Profile: React.FC<Props> = (
    {
        postsData,
        addPost,
        updatingTextPost,
        newPostText,

    }
) => {

    console.log('newPostText',newPostText)
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}
                     addPost={addPost}
                     updatingTextPost={updatingTextPost}
                     newPostText={newPostText}
            />
        </div>
    );
};

export default Profile;
