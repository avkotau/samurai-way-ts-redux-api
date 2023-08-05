import React, { Component } from 'react';
import s from './Profile.module.css'
import Profile from "./Profile";
import axios from "axios";

class ProfileContainer extends Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger
                // this.props.toggleIsFetching(false)
                // this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props}/>
            </div>
        )
    }
}

export default ProfileContainer;
