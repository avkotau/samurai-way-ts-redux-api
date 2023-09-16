import React, { Component } from 'react';
import s from './Profile.module.css'
import Profile from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "store/redux-store";
import { fetchUserProfile, getUserStatus, ProfileResponseType, updateUserStatus } from "store/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from 'hok/withAuthRedirect';


type MapStateToPropsType = {
    profile: ProfileResponseType | null
    status: string
    authorizedUserId: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    fetchUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

type PathParamsType = {
    userId: string
}

type OwnUsersType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnUsersType

class ProfileContainer extends Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            debugger
            // userId = '29290'
            userId = this.props.authorizedUserId;
            // if (!userId) {
            //     this.props.history.push('/login')
            // }
        }
        //parseInt for change type because backend return type number, RouteComponentProps return type string
        const userIdNumber = parseInt(userId, 10);
        this.props.fetchUserProfile(userIdNumber)
        this.props.getUserStatus(userIdNumber)
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props}
                         profile={this.props.profile}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

//With help withRouter new component for get url data from props
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {fetchUserProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer)

