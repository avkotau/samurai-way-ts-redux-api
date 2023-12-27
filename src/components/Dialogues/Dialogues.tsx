import React from 'react';
import s from './Dialogues.module.css'
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";
import { DialoguesType } from "./DialoguesContainer";
import { AppStateType } from "store/redux-store";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { fetchUserProfile, getUserStatus, ProfileResponseType } from "store/profileReducer";

const Dialogues: React.FC<DialoguesType & {profile: ProfileResponseType;}> = (props) => {
    const {
        dialoguesData,
        messagesData,
        addMessage,
        profile
    } = props
    return (
        <div className={s.containerDialoguesMessages}>
            <Dialogue dialoguesData={dialoguesData}
                      messagesData={messagesData}
            />
            <Messages {...props}
                      messagesData={messagesData}
                      addMessage={addMessage}
                      profile={profile}
            />
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        authorizedUserId: state.auth.id,
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    fetchUserProfile,
    getUserStatus
}), withRouter)(Dialogues)
