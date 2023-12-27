import React, { Component } from 'react';
import s from './Profile.module.css'
import Profile from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "store/redux-store";
import {
    fetchUserProfile,
    getUserStatus,
    ProfileResponseType,
    savePhoto, saveProfile,
    updateUserStatus
} from "store/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from 'hok/withAuthRedirect';

export const refreshProfile = (props: OwnUsersType & ProfileType) => {
    let userId = props.match.params.userId;
    if (!userId) {
        userId = props.authorizedUserId as string;
    }
    const userIdNumber = parseInt(userId, 10);
    props.fetchUserProfile(userIdNumber);
    props.getUserStatus(userIdNumber);
}

class ProfileContainer extends Component<ProfileType> {

    componentDidMount() {
        refreshProfile(this.props)
    }

    componentDidUpdate(prevProps: Readonly<ProfileType>, prevState: Readonly<{}>, snapshot?: any) {
        let userId = prevProps.match.params.userId
        if (userId !== this.props.match.params.userId) {
            refreshProfile(this.props)
        }
    }

    render() {

        return (
            <div className={s.content}>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         savePhoto={this.props.savePhoto}
                         saveProfile={this.props.saveProfile}
                         statusError={this.props.statusError}
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
    statusError: state.profilePage.statusError
})

type MapStateToPropsType = {
    profile: ProfileResponseType
    status: string
    authorizedUserId: string | null
    isAuth: boolean
    statusError?: string
}
type MapDispatchToPropsType = {
    fetchUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (formData: ProfileResponseType) => Promise<{ submitErrors: string } | undefined>
}

type PathParamsType = {
    userId: string
}

type OwnUsersType = MapStateToPropsType & MapDispatchToPropsType
export type ProfileType = RouteComponentProps<PathParamsType> & OwnUsersType

//With help withRouter new component for get url data from props
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {fetchUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer)

