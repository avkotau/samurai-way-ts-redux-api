import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {
    addPost,
    updatingTextPost,
    state, addMessage, updatingMessageText
} from "./redux";


export let renderTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updatingTextPost={updatingTextPost}
                addMessage={addMessage}
                updatingMessageText={updatingMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree(state)
