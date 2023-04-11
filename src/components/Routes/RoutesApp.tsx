import React from 'react';
import { Route } from "react-router-dom";
import Dialogues from "../Dialogues/Dialogues";
import Profile from "../Profile/Profile";
import {
    DialogueDataType,
    MessageDataType,
    PostDataType,

} from "../../types/declarations";


type Props = {
    dialoguesData: DialogueDataType[]
    messagesData: MessageDataType[]
    postsData: PostDataType[]
}

const RoutesApp: React.FC<Props> = ({
                                        dialoguesData,
                                        messagesData,
                                        postsData,

                                    }) => {

    return (
        <>
            <Route path='/dialogues' render={() => <Dialogues dialoguesData={dialoguesData}
                                                              messagesData={messagesData}/>}/>
            <Route path='/profile' render={() => <Profile postsData={postsData}/>}/>
        </>


    );
};

export default RoutesApp;
