import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/redux-store";
import { Provider } from "react-redux";

export let rerenderTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderTree()
store.subscribe(() => rerenderTree())
