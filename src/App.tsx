import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import s from './components/Routes/RouterApp.module.css'
import RoutesApp from "./components/Routes/RoutesApp";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { initializeApp } from "store/app-reducer";
import { AppStateType } from "store/redux-store";
import Preloader from "components/common/Preloader/Preloader";
import { DispatchType, StateType } from "types/commonTypes";
import Login from "components/Login/Login";
import stl from "LoginPage.module.css"
import { LoginPassword } from "components/Login/LoginPassword";

class App extends Component<AppStateType & TypeProps & MapDispatchToPropsType & mapStateToPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        const {state} = this.props

        if (!this.props.isAuth && this.props.initialized) {
            return <div className={stl.loginPage}>
                <div className={stl.left}>
                    <LoginPassword/>

                </div>
                <div className={stl.right}>
                    <Login/>
                </div>

            </div>
        }

        if (!this.props.initialized) return <Preloader/>
        return (
            <div className='app'>
                <HeaderContainer/>
                <Navbar sidebarData={state.sidebar.sidebarData}/>
                <div className={s.routers}>
                    <RoutesApp/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth
    }
}

type TypeProps = {
    state: StateType
    dispatch: (action: DispatchType) => void
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type mapStateToPropsType = {
    initialized: boolean
    isAuth: boolean
}

export default connect(mapStateToProps, {initializeApp})(App);

