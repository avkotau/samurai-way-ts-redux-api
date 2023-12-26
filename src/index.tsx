import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store/redux-store";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
