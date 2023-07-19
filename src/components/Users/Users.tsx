import React, { Component } from 'react';
import s from "./Users.module.css";
import photo from "../../assets/images/photoUser.png";
import { UserType } from "../../types/declarations";

type UsersType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
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
            onPageChanged
        } = this.props

        let pagesCount = Math.ceil(totalUsersCount / pageSize)

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
                            <img src={u.photos.small ? u.photos.small
                                : photo}
                                 alt={''} style={{width: '100px'}}/>

                            {u.followed
                                ? <button onClick={() => follow(u.id)}>follow</button>
                                : <button onClick={() => unfollow(u.id)}>unfollow</button>}

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
