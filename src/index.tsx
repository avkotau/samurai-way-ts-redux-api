import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {
    addPost,
    updatingTextPost,
    state, addMessage, updatingMessageText, StateType, subscriber
} from "./redux";


export let rerenderTree = (state: StateType) => {
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
rerenderTree(state)


subscriber(rerenderTree)

