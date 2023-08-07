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
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

export type UsersType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
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

type ResponseType<T = []> = {
    items: T
    error: null | string
    totalCount: number
}

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

class UsersContainer extends Component<UsersType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<ResponseType>(
            baseURL + `users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {

                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged(pageNumber: number) {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        axios.get<ResponseType>(
            baseURL + `users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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
