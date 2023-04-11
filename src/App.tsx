import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import s from './components/Routes/RouterApp.module.css'
import RoutesApp from "./components/Routes/RoutesApp";
import { DialogueDataType, MessageDataType, PostDataType, SitePanelFriendsDataType } from "./types/declarations";
import { sitePanelFriendsData } from "./redux";


type Props = {
    dialoguesData: DialogueDataType[]
    messagesData: MessageDataType[]
    postsData: PostDataType[]
    sitePanelFriendsData: SitePanelFriendsDataType[]
}

const App: React.FC<Props> = (
    {
        dialoguesData,
        messagesData,
        postsData,
        sitePanelFriendsData
    }
) => {

    return (
        <div className='app'>
            <Header/>
            <Navbar sitePanelFriendsData={sitePanelFriendsData}/>

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
