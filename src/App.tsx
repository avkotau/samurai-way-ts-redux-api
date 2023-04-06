import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import s  from './components/Routes/RouterApp.module.css'
import RoutesApp from "./components/Routes/RoutesApp";

function App() {
    return (

        <div className='app'>
            <Header/>
            <Navbar/>
            {/*<div className={s.dialogs}>*/}
            <div className={s.routers}>
                <RoutesApp/>
            </div>
        </div>

    );
}

export default App;
