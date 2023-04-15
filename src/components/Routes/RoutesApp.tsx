import React from 'react';
import { Route } from "react-router-dom";
import Dialogues from "../Dialogues/Dialogues";
import Profile from "../Profile/Profile";
import {
    DialogueDataType,
    MessageDataType, NewPostTextType,
    PostDataType,

} from "../../types/declarations";
import {  StateType } from "../../redux";


type Props = {
    state: StateType
    addPost: () => void
    updatingTextPost: (textPost: string) => void


}

const RoutesApp: React.FC<Props> = ({
                                        state,
                                        addPost,
                                        updatingTextPost,

                                    }) => {

    return (
        <>
            <Route path='/dialogues' render={() => <Dialogues dialoguesData={state.dialoguesData}
                                                              messagesData={state.messagesData}/>}/>
            <Route path='/profile' render={() => <Profile postsData={state.postsData}
                                                          addPost={addPost}
                                                          updatingTextPost={updatingTextPost}
                                                          newPostText={state.newPostText[0]}
            />}/>
        </>


    );
};

export default RoutesApp;
