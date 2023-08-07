import React, { Component } from 'react';
import s from "./Users.module.css";
import photo from "../../assets/images/photoUser.png";
import { UserType } from "../../types/declarations";
import { NavLink } from "react-router-dom";
import { followAPI, unFollowAPI } from "../../api/api";

type UsersType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowInProgress: (userId: number, isFetching: boolean) => void
    toggleFollow: number[]
}


class Users extends Component<UsersType> {

    render() {

        const {
            users,
            follow,
            unfollow,
            totalUsersCount,
            pageSize,
            currentPage,
            onPageChanged,
            toggleFollow
        } = this.props

        //pagesCount/100 - for show 24 pages
        let pagesCount = Math.ceil(totalUsersCount / pageSize) / 100

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        console.log('toggleFollow', toggleFollow)
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
                                    console.log(this.props)
                                    this.props.toggleFollowInProgress(u.id, true)
                                    unFollowAPI(u.id)
                                        .then(res => {

                                            if (res.data.resultCode === 0) {
                                                unfollow(u.id)
                                            }
                                            this.props.toggleFollowInProgress(u.id, false)
                                        })
                                }}
                                >unfollow</button>
                                : <button disabled={toggleFollow.some(id => id === u.id)} onClick={() => {
                                    this.props.toggleFollowInProgress(u.id, true)
                                    followAPI(u.id)
                                        .then(res => {

                                            if (res.data.resultCode === 0) {
                                                follow(u.id)
                                            }
                                            this.props.toggleFollowInProgress(u.id, false)
                                        })
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
