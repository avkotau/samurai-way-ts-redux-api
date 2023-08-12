import React from "react";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { compose, Dispatch } from "redux";
import {
    addMessageActionCreator,
    InitialStateType,
} from "../../redux/dialoguesReducer";
import { withAuthRedirect } from "../../hok/withAuthRedirect";

type MapStateToPropsType = InitialStateType

type MapDispatchToPropsType = {
    addMessage: (newMessage: string) => void
}

export type DialoguesType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        dialoguesData: state.dialoguesPage.dialoguesData,
        messagesData: state.dialoguesPage.messagesData,
    }
}

const mapDispatchToProps = ( dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessage: string) => {
            dispatch(addMessageActionCreator(newMessage))
        }
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogues)
