import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import { UsersType } from "./HeaderContainer";

const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://media.istockphoto.com/id/1224392306/photo/dark-blue-minimal-texture-banner-with-space-for-text-word-or-product-display-for-your-banner.jpg?b=1&s=612x612&w=0&k=20&c=YStm9RMTku0LOVgqRoS4kjEHviAISV6EBY5n2ElnXro="
                alt=''
            />
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login}
                            <button onClick={props.logout}>Log out</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
}

type PropsType = UsersType

export default Header;
