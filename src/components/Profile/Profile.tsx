import React, { Component } from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { NewPostTextType, PostDataType } from "../../types/declarations";
import { DispatchType } from "../../redux";

type TypeProps = {
    postsData: PostDataType[];
    dispatch: (action: DispatchType) => void
    newPostText: NewPostTextType
}


class Profile extends Component<TypeProps> {

    render() {
        const {postsData, dispatch, newPostText} = this.props
        console.log('newPostText',newPostText)
        return (
            <div className={s.content}>
                <ProfileInfo/>
                <MyPosts postsData={postsData}
                         dispatch={dispatch}
                         newPostText={newPostText}
                />
            </div>
        )
    }
}

export default Profile;
