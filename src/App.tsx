import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import s from './components/Dialogues/Dialogues.module.css'

function App() {
    return (
        <div className='app'>
            <Header/>
            <Navbar/>
            <div className={s.dialogs}>
                {/*<Dialogues/>*/}
                <Profile/>
            </div>

        </div>
    );
}

export default App;
