import React, { Component } from 'react';
import { UsersType } from "./UsersContainer";

class Users extends Component<UsersType> {

    render() {
        const {users, follow, unfollow, setUsers} = this.props

        if (users.length === 0) {
            setUsers(

                [{
                    id: Math.random().toString(36).slice(2),
                    photo: 'https://cs5.pikabu.ru/post_img/big/2014/04/08/6/1396941265_708144103.jpg',
                    fullName: 'Victor',
                    location: {country: 'Legnica', city: 'Poland'}, followed: true, status: 'Hey i like football'
                },
                {
                    id: Math.random().toString(36).slice(2),
                    photo: 'https://cs5.pikabu.ru/post_img/big/2014/04/08/6/1396941265_708144103.jpg',
                    fullName: 'Dima',
                    location: {country: 'Legnica', city: 'Poland'}, followed: false, status: 'Hey i like football'
                },
                {
                    id: Math.random().toString(36).slice(2),
                    photo: 'https://cs5.pikabu.ru/post_img/big/2014/04/08/6/1396941265_708144103.jpg',
                    fullName: 'Sacha',
                    location: {country: 'Legnica', city: 'Poland'}, followed: true, status: 'Hey i like football'
                },
                {
                    id: Math.random().toString(36).slice(2),
                    photo: 'https://cs5.pikabu.ru/post_img/big/2014/04/08/6/1396941265_708144103.jpg',
                    fullName: 'Masha',
                    location: {country: 'Legnica', city: 'Poland'}, followed: false, status: 'Hey i like football'
                }]
            )
        }

        return (
            <div>
                {users.map(u =>
                    <div key={u.id}>
                        <span>
                            <img src={u.photo} alt={'df'} style={{width: '100px'}}/>

                            {u.followed
                                ? <button onClick={() => follow(u.id)}>follow</button>
                                : <button onClick={() => unfollow(u.id)}>unfollow</button>}

                        </span>

                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>

                    </div>
                )}
            </div>
        );
    }
}

export default Users;
