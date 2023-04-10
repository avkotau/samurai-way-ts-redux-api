import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import s  from './components/Routes/RouterApp.module.css'
import RoutesApp from "./components/Routes/RoutesApp";

function App(): JSX.Element {

    const dialoguesData = [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Sacha'},
        {id: 4, name: 'Masha'}
    ]

    const messagesData = [
        {id: 1, message: 'Hello Victor'},
        {id: 2, message: 'Hello Dima'},
        {id: 3, message: 'Hello Sacha'},
        {id: 4, message: 'Hello Masha'}
    ]


    return (

        <div className='app'>
            <Header/>
            <Navbar/>
            {/*<div className={s.dialogs}>*/}
            <div className={s.routers}>
                <RoutesApp dialoguesData={dialoguesData}
                           messagesData={messagesData}/>
            </div>
        </div>

    );
}

export default App;
