import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";
import {
    addMessageActionCreator,
    InitialStateType,
    updateMessageTextActionCreator
} from "../../redux/dialoguesReducer";

type MapStateToPropsType = InitialStateType & { isAuth: boolean }

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
        isAuth: state.auth.isAuth
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

const DialoguesContainer= connect(mapStateToProps, mapDispatchToProps)(Dialogues)

export default DialoguesContainer
