import React from "react";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import { AppStateType } from "store/redux-store";
import { compose, Dispatch } from "redux";
import {
    addMessageActionCreator,
    InitialStateType,
} from "store/dialoguesReducer";
import { withAuthRedirect } from "hok/withAuthRedirect";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialoguesData: state.dialoguesPage.dialoguesData,
        messagesData: state.dialoguesPage.messagesData,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessage: string) => {
            dispatch(addMessageActionCreator(newMessage))
        }
    }
}

type MapStateToPropsType = InitialStateType
type MapDispatchToPropsType = {
    addMessage: (newMessage: string) => void
}
export type DialoguesType = MapStateToPropsType & MapDispatchToPropsType

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogues)
