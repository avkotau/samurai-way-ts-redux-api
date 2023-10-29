import React, { Component } from 'react';
import photo from 'assets/images/photoUser.png';
import { NavLink } from "react-router-dom";
import { UserType } from "types/commonTypes";

class User extends Component<PropsType> {
    render() {
        const {
            user,
            toggleFollow,
            unFollowUser,
            followUser,
        } = this.props
        return (
            <div>
                <span>
                    <NavLink to={'profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small
                            : photo}
                             alt={''} style={{width: '100px'}}/>
                    </NavLink>
                    {user.followed
                        ? <button
                            disabled={toggleFollow.some(id => id === user.id)}
                            onClick={() => {
                                unFollowUser(user.id)
                            }}
                        >unfollow</button>
                        : <button
                            disabled={toggleFollow.some(id => id === user.id)}
                            onClick={() => {
                                followUser(user.id)
                            }}
                        >follow</button>
                    }
                </span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
            </div>
        );
    }
}

export default User;

// type UsersType = {
//     users: UserType[]
//     totalUsersCount: number
//     pageSize: number
//     currentPage: number
//     followUser: (userId: number) => void
//     unFollowUser: (userId: number) => void
//     onPageChanged: (pageNumber: number) => void
//     toggleFollowInProgress: (userId: number, isFetching: boolean) => void
//     toggleFollow: number[]
// }

type PropsType = {
    user: UserType
    toggleFollow: number[]
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
}
