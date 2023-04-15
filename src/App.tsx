import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import s from './components/Routes/RouterApp.module.css'
import RoutesApp from "./components/Routes/RoutesApp";

import { StateType } from "./redux";


type Props = {

    state: StateType
    addPost: () => void
    updatingTextPost: (textPost: string) => void

}

const App: React.FC<Props> = (
    {
        state,
        addPost,
        updatingTextPost,

    }
) => {

    return (
        <div className='app'>
            <Header/>
            <Navbar sitePanelFriendsData={state.sitePanelFriendsData}/>

            <div className={s.routers}>
                <RoutesApp
                    state={state}
                    addPost={addPost}
                    updatingTextPost={updatingTextPost}

                />
            </div>
        </div>

    );
}

export default App;
