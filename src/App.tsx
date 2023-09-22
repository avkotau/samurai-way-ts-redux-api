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

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}
class App extends Component<AppStateType & TypeProps & MapDispatchToPropsType & mapStateToPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        const {state} = this.props

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

type TypeProps = {
    state: StateType
    dispatch: (action: DispatchType) => void
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type mapStateToPropsType = {
    initialized: boolean
}

export default connect(mapStateToProps, {initializeApp})(App);

