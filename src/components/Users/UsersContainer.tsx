import React, { Component } from 'react';
import { connect } from "react-redux";
import { AppStateType } from "store/redux-store";
import {
    followUser, getUsers,
    setCurrentPage,
    toggleFollowInProgress,
    unFollowUser
} from "store/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { UserType } from "types/commonTypes";


class UsersContainer extends Component<UsersType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        const {
            users,
            followUser,
            unFollowUser,
            totalUsersCount,
            pageSize,
            currentPage,
            isFetching,
            toggleFollow,
            toggleFollowInProgress
        } = this.props

        return (
            <>
                {isFetching && <Preloader/>}
                <Users
                    users={users}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    followUser={followUser}
                    unFollowUser={unFollowUser}
                    onPageChanged={(p) => this.onPageChanged(p)}
                    toggleFollow={toggleFollow}
                    toggleFollowInProgress={toggleFollowInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollow: state.usersPage.toggleFollow
    }
}

export type UsersType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    toggleFollow: number[]
}

type MapDispatchToPropsType = {
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    toggleFollowInProgress: (userId: number, isFetching: boolean) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export default connect(mapStateToProps, {
    followUser,
    unFollowUser,
    setCurrentPage,
    toggleFollowInProgress,
    getUsers
})(UsersContainer)
