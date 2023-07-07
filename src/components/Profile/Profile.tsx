import React, { Component } from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { NewPostTextType, PostDataType } from "../../types/declarations";
import { DispatchType } from "../../redux";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type TypeProps = {
    postsData: PostDataType[];
    dispatch: (action: DispatchType) => void
    newPostText: NewPostTextType
}


class Profile extends Component<TypeProps> {

    render() {
        const {postsData, dispatch, newPostText} = this.props

        return (
            <div className={s.content}>
                <ProfileInfo/>
                <MyPostsContainer postsData={postsData}
                         dispatch={dispatch}
                         newPostText={newPostText}

                />
            </div>
        )
    }
}

export default Profile;
