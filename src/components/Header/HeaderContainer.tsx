import React, { Component } from 'react';
import axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
export type UsersType = MapStateToPropsType & MapDispatchToPropsType

export type AuthUserDataType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}


type ResponseType = {
    data: AuthUserDataType
    fieldsErrors: []
    messages: []
    resultCode: number
}

export type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    setAuthUserData: (data: AuthUserDataType) => void
}


const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

class HeaderContainer extends Component<UsersType> {

    componentDidMount() {
        axios.get<ResponseType>(baseURL + 'auth/me', {withCredentials: true}
        )
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            })
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
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
