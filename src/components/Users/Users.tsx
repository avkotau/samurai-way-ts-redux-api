import React, { Component } from 'react';
import { UserType } from "types/commonTypes";
import { Paginator } from "components/common/Pagonator/Paginator";
import User from "components/Users/User";

class Users extends Component<UsersType> {
    render() {
        const {
            users,
            totalItemsCount,
            pageSize,
            currentPage,
            onPageChanged,
            toggleFollow,
            unFollowUser,
            followUser
        } = this.props

        return (
            <div>
                <Paginator totalItemsCount={totalItemsCount}
                           pageSize={pageSize}
                           currentPage={currentPage}
                           onPageChanged={onPageChanged}/>
                {users.map(u =>
                    <User key={u.id}
                          user={u}
                          followUser={followUser}
                          unFollowUser={unFollowUser}
                          toggleFollow={toggleFollow}/>
                )}
            </div>
        );
    }
}

export default Users;

type UsersType = {
    users: UserType[]
    totalItemsCount: number
    pageSize: number
    currentPage: number
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowInProgress: (userId: number, isFetching: boolean) => void
    toggleFollow: number[]
}
