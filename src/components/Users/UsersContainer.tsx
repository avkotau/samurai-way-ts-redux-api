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
import {
    getCurrentPageSelector, getIsFetchingSelector,
    getPageSizeSelector, getToggleFollowSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "store/users-selectors";

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
            totalItemsCount,
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
                    totalItemsCount={totalItemsCount}
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
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalItemsCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        toggleFollow: getToggleFollowSelector(state)
    }
}

export type UsersType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: UserType[]
    totalItemsCount: number
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
