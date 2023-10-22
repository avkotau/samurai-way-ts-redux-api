import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Dialogues from "../Dialogues/Dialogues";
import Profile from "../Profile/Profile";
import UsersContainer from "../Users/UsersContainer";
import Login from "../Login/Login";
import Preloader from 'components/common/Preloader/Preloader';
import { withSuspense } from "hok/withSuspense";

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
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='*' render={() => <div>404 NOTE FOUND</div>}/>
                </Switch>
            </>
        )
    }
}

export default RoutesApp;
