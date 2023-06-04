import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import s from './components/Routes/RouterApp.module.css'
import RoutesApp from "./components/Routes/RoutesApp";

import { DispatchType, StateType } from "./redux";


type TypeProps = {

    state: StateType
    dispatch: (action: DispatchType) => void
}


class App extends Component<TypeProps> {

    render() {
        const {state, dispatch} = this.props

        return (
            <div className='app'>
                <Header/>
                <Navbar sidebarData={state.sidebar.sidebarData}/>

                <div className={s.routers}>
                    <RoutesApp
                        state={state}
                        dispatch={dispatch}
                     />
                </div>
            </div>
        )
    }
}

export default App;
