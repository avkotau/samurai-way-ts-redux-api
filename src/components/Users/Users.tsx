import React, { Component } from 'react';
import { UsersType } from "./UsersContainer";
import axios from "axios";
import photo from '../../assets/images/photoUser.png'

class Users extends Component<UsersType> {

    render() {
        const {users, follow, unfollow, setUsers} = this.props

        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                setUsers(response.data.items)
            })
        }

        return (
            <div>
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
