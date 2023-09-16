import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Dialogues from "../Dialogues/Dialogues";
import Profile from "../Profile/Profile";
import { DispatchType, StateType } from "../../store";
import DialoguesContainer from "../Dialogues/DialoguesContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import Login from "../Login/Login";

class RoutesApp extends Component {

    render() {
        return (
            <>
                <Route path='/dialogues' render={() => <DialoguesContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </>
        )
    }

}

export default RoutesApp;
