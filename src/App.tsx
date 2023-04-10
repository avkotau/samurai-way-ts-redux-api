import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import s from './components/Routes/RouterApp.module.css'
import RoutesApp from "./components/Routes/RoutesApp";
import { DialogueDataType, MessageDataType, PostDataType } from "./types/declarations";

function App(): JSX.Element {

    const dialoguesData: DialogueDataType[] = [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Sacha'},
        {id: 4, name: 'Masha'}
    ]

    const messagesData: MessageDataType[] = [
        {id: 1, message: 'Hello Victor'},
        {id: 2, message: 'Hello Dima'},
        {id: 3, message: 'Hello Sacha'},
        {id: 4, message: 'Hello Masha'}
    ]

    let postsData: PostDataType[] = [
        {id: 1, message: 'Hello bro', like: 12},
        {id: 2, message: 'Hello man', like: 20},
        {id: 3, message: 'Hello women', like: 6}
    ]

    return (
        <div className='app'>
            <Header/>
            <Navbar/>
            {/*<div className={s.dialogs}>*/}
            <div className={s.routers}>
                <RoutesApp dialoguesData={dialoguesData}
                           messagesData={messagesData}
                           postsData={postsData}
                />
            </div>
        </div>

    );
}

export default App;
