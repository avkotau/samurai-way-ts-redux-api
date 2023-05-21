import React from 'react';
import { Route } from "react-router-dom";
import Dialogues from "../Dialogues/Dialogues";
import Profile from "../Profile/Profile";
import {
    DialogueDataType,
    MessageDataType, NewPostTextType,
    PostDataType,

} from "../../types/declarations";
import { addMessage, StateType, updatingMessageText } from "../../redux";


type Props = {
    state: StateType
    addPost: () => void
    updatingTextPost: (textPost: string) => void
    addMessage: () => void
    updatingMessageText: (textMessage: string) => void


}

const RoutesApp: React.FC<Props> = ({
                                        state,
                                        addPost,
                                        updatingTextPost,
                                        addMessage,
                                        updatingMessageText,

                                    }) => {

    return (
        <>
            <Route path='/dialogues' render={() => <Dialogues dialoguesData={state.dialoguesData}
                                                              messagesData={state.messagesData}
                                                              addMessage={addMessage}
                                                              updatingMessageText={updatingMessageText}
                                                              textMessage={state.newMessageText[0]}
            />}/>
            <Route path='/profile' render={() => <Profile postsData={state.postsData}
                                                          addPost={addPost}
                                                          updatingTextPost={updatingTextPost}
                                                          newPostText={state.newPostText}
            />}/>
        </>


    );
};

export default RoutesApp;
