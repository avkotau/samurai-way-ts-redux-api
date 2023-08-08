import React, { Component } from 'react';
import s from './Profile.module.css'
import Profile from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { fetchUserProfile, ProfileResponseType} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";


type MapStateToPropsType = {
    profile: ProfileResponseType | null
}

type MapDispatchToPropsType = {
    fetchUserProfile: (userId: number) => void
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
            userId = '2'
        }
        //parseInt for change type because backend return type number, RouteComponentProps return type string
        const userIdNumber = parseInt(userId, 10);
        this.props.fetchUserProfile(userIdNumber)
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
    profile: state.profilePage.profile
})

//new component for get url data from props
const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {fetchUserProfile})(WithUrlDataContainerComponent);
