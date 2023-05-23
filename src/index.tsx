import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {
    // addPost,
    // updatingTextPost,
    // state, addMessage, updatingMessageText,
    StateType,
    // subscriber,
    store
} from "./redux";

// console.log(store.getState())

export let rerenderTree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updatingTextPost={store.updatingTextPost.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updatingMessageText={store.updatingMessageText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

// store._rerenderTree()

rerenderTree(store.getState())

store.subscriber(rerenderTree)

