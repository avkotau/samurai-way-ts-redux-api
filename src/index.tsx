import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { dialoguesData, messagesData, postsData, sitePanelFriendsData } from "./redux";


ReactDOM.render(
    <BrowserRouter>
        <App dialoguesData={dialoguesData}
             messagesData={messagesData}
             postsData={postsData}
             sitePanelFriendsData={sitePanelFriendsData}
        />
    </BrowserRouter>,
    document.getElementById('root')
);
