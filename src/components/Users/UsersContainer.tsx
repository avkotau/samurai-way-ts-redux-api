import React, { Component } from 'react';
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import { UserType } from "../../types/declarations";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getUsersAPI } from "../../api/api";

export type UsersType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean

}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}



class UsersContainer extends Component<UsersType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        getUsersAPI(this.props.currentPage, this.props.pageSize)
            .then(data => {

                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged(pageNumber: number) {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        getUsersAPI(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        const {
            users,
            follow,
            unfollow,
            totalUsersCount,
            pageSize,
            currentPage,
            isFetching
        } = this.props


        return (
            <>
                {isFetching && <Preloader/>}
                <Users
                    users={users}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    follow={follow}
                    unfollow={unfollow}
                    onPageChanged={(p)=>this.onPageChanged(p)}
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching})(UsersContainer)
