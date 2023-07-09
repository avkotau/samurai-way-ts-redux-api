import React from 'react';
import Users from "./Users";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import { Dispatch } from "redux";
import { UserType } from "../../types/declarations";

export type UsersType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UserType[]
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
