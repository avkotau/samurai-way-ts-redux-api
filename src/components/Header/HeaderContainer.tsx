import React, { Component } from 'react';
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "store/auth-reducer";
import { AppStateType } from "store/redux-store";

class HeaderContainer extends Component<UsersType> {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export type UsersType = MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    logout: () => void
}
export default connect(mapStateToProps, {logout})(HeaderContainer);
