import React, { Component, Suspense } from 'react';
import { Route } from "react-router-dom";
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
                <Route path='/dialogues' render={withSuspense(DialoguesContainer)}/>
                <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </>
        )
    }
}

export default RoutesApp;
