import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {
    StateType,
    // store
} from "./redux";
import { store } from "./redux/redux-store";


export let rerenderTree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState())

// store.subscriber(() => rerenderTree(store.getState()))
store.subscribe(() => rerenderTree(store.getState()))
