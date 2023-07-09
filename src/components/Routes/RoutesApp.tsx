import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Dialogues from "../Dialogues/Dialogues";
import Profile from "../Profile/Profile";
import { DispatchType, StateType} from "../../redux";
import DialoguesContainer from "../Dialogues/DialoguesContainer";

type TypeProps = {
    state: StateType
    dispatch: (action: DispatchType) => void
}

class RoutesApp extends Component<TypeProps> {

    render() {
        const {state, dispatch} = this.props
        return (
            <>
                <Route path='/dialogues' render={() =>
                    <DialoguesContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
            </>
        )
    }

}

export default RoutesApp;
