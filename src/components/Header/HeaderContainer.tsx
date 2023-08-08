import React, { Component } from 'react';
import Header from "./Header";
import { connect } from "react-redux";
import { auth } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
export type UsersType = MapStateToPropsType & MapDispatchToPropsType

export type AuthUserDataType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}

export type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    auth: () => void
}

class HeaderContainer extends Component<UsersType> {

    componentDidMount() {
        this.props.auth()
    }

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
export default connect(mapStateToProps, {auth})(HeaderContainer);
