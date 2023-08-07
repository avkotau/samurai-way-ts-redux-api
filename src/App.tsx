import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import s from './components/Routes/RouterApp.module.css'
import RoutesApp from "./components/Routes/RoutesApp";

import { DispatchType, StateType } from "./redux";
import HeaderContainer from "./components/Header/HeaderContainer";

type TypeProps = {
    state: StateType
    dispatch: (action: DispatchType) => void
}

class App extends Component<TypeProps> {

    render() {
        const {state} = this.props

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

export default App;
