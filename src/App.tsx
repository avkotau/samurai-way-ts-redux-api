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
    addMessage: () => void
    updatingMessageText: (textMessage: string) => void

}


class App extends Component<TypeProps> {

    render() {
        const {state, dispatch, addMessage, updatingMessageText} = this.props

        return (
            <div className='app'>
                <Header/>
                <Navbar sitePanelFriendsData={state.sitePanelFriendsData}/>

                <div className={s.routers}>
                    <RoutesApp
                        state={state}
                        dispatch={dispatch}
                        addMessage={addMessage}
                        updatingMessageText={updatingMessageText}

                    />
                </div>
            </div>
        )
    }
}

export default App;
