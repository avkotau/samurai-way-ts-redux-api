import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Dialogues from "../Dialogues/Dialogues";
import Profile from "../Profile/Profile";
import {
    DialogueDataType,
    MessageDataType, NewPostTextType,
    PostDataType,

} from "../../types/declarations";
import { addMessage, DispatchType, StateType} from "../../redux";


type TypeProps = {
    state: StateType
    dispatch: (action: DispatchType) => void
}


class RoutesApp extends Component<TypeProps> {

    render() {
        const {state, dispatch} = this.props

        return (
            <>
                <Route path='/dialogues' render={() => <Dialogues dialoguesData={state.dialoguesData}
                                                                  messagesData={state.messagesData}
                                                                  dispatch={dispatch}
                                                                  // updatingMessageText={updatingMessageText}
                                                                  textMessage={state.newMessageText[0]}
                />}/>
                <Route path='/profile' render={() => <Profile postsData={state.postsData}
                                                              dispatch={dispatch}
                                                              newPostText={state.newPostText}
                />}/>
            </>
        )
    }

}

export default RoutesApp;
