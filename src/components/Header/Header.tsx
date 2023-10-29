import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import { UsersType } from "./HeaderContainer";

const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <div>
                {
                    props.isAuth
                        ? <div>{props.login}
                            <button onClick={props.logout}>
                                Log out
                            </button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

type PropsType = UsersType

export default Header;
