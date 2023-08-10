import React from "react";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { compose, Dispatch } from "redux";
import {
    addMessageActionCreator,
    InitialStateType,
    updateMessageTextActionCreator
} from "../../redux/dialoguesReducer";
import { withAuthRedirect } from "../../hok/withAuthRedirect";

type MapStateToPropsType = InitialStateType

type MapDispatchToPropsType = {
    updateMessageText: (value: string) => void
    addMessage: () => void
}

export type DialoguesType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        dialoguesData: state.dialoguesPage.dialoguesData,
        messagesData: state.dialoguesPage.messagesData,
        newMessageText: state.dialoguesPage.newMessageText,
    }
}

const mapDispatchToProps = ( dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateMessageText: (value) => {
            dispatch(updateMessageTextActionCreator(value))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogues)
