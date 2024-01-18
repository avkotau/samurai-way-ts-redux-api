import React, { Component } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";
import Login from "../Login/Login";
import { withSuspense } from "hok/withSuspense";
import { Photos } from "components/Photos/Photos";

const DialoguesContainer = React.lazy(() => import("../Dialogues/DialoguesContainer"))
const ProfileContainer = React.lazy(() => import("../Profile/ProfileContainer"))

class RoutesApp extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                    <Route path='/dialogues' render={withSuspense(DialoguesContainer)}/>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/photos' render={() => <Photos/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='*' render={() => <div>404 NOTE FOUND</div>}/>
                </Switch>
            </>
        )
    }
}

export default RoutesApp;
