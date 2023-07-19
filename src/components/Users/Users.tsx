import React, { Component } from 'react';
import { UsersType } from "./UsersContainer";
import axios from "axios";
import photo from '../../assets/images/photoUser.png';
import s from './Users.module.css'


type ResponseType<T = []> = {
    items: T
    error: null | string
    totalCount: number
}

class Users extends Component<UsersType> {

    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
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
            setCurrentPage
        } = this.props

        let pagesCount = Math.ceil(totalUsersCount / pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        const onPageChanged = (pageNumber: number) => {
            setCurrentPage(pageNumber)
            axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
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
