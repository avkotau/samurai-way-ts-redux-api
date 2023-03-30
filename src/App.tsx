import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/Profile/MyPosts/MyPosts";

function App() {
    return (
        <div className='app'>
            <Header/>
            <Navbar/>
            <Profile/>

        </div>
    );
}

export default App;
