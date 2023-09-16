import React, { Component } from 'react';
import { UserType } from "types/declarations";
import s from "./Users.module.css";
import photo from '../../assets/images/photoUser.png';
import { NavLink } from "react-router-dom";

type UsersType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowInProgress: (userId: number, isFetching: boolean) => void
    toggleFollow: number[]
}

class Users extends Component<UsersType> {
    render() {
        const {
            users,
            totalUsersCount,
            pageSize,
            currentPage,
            onPageChanged,
            toggleFollow,
            unFollowUser,
            followUser
        } = this.props

        //pagesCount/100 - for show 24 pages
        let pagesCount = Math.ceil(totalUsersCount / pageSize) / 100

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map((p, i) => {
                        return <span key={i}
                                     className={
                                         `${s.pages} ${currentPage === p ? s.selectedPage : ''}`
                                     }
                                     onClick={() => onPageChanged(p)}
                        >{p}</span>
                    })}
                </div>
                {users.map(u =>
                    <div key={u.id}>
                        <span>
                            <NavLink to={'profile/' + u.id}>
                                             <img src={u.photos.small ? u.photos.small
                                                 : photo}
                                                  alt={''} style={{width: '100px'}}/>
                            </NavLink>

                            {u.followed
                                ? <button disabled={toggleFollow.some(id => id === u.id)} onClick={() => {
                                    unFollowUser(u.id)
                                }}
                                >unfollow</button>
                                : <button disabled={toggleFollow.some(id => id === u.id)} onClick={() => {
                                    followUser(u.id)
                                }}
                                >follow</button>
                            }

                        </span>

                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default Users;
