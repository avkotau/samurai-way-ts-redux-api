import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Dialogues from "../Dialogues/Dialogues";
import Profile from "../Profile/Profile";
import {
    DialogueDataType,
    MessageDataType, NewPostTextType,
    PostDataType,

} from "../../types/declarations";
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
                    // must delete all props
                    <DialoguesContainer dialoguesData={state.dialoguesPage.dialoguesData}
                                                                  messagesData={state.dialoguesPage.messagesData}
                                                                  dispatch={dispatch}
                                                                  // updatingMessageText={updatingMessageText}
                                                                  textMessage={state.dialoguesPage.newMessageText[0]}
                />}/>
                <Route path='/profile' render={() => <Profile postsData={state.profilePage.postsData}
                                                              dispatch={dispatch}
                                                              newPostText={state.profilePage.newPostText}
                />}/>
            </>
        )
    }

}

export default RoutesApp;
