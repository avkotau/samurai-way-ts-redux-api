import React, { Component } from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

class Profile extends Component {
    render() {
        return (
            <div className={s.content}>
                <ProfileInfo/>
                <MyPostsContainer />
            </div>
        )
    }
}

export default Profile;
