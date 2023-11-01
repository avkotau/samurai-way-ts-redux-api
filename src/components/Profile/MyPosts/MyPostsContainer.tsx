import React from 'react';
import { connect } from "react-redux";
import { AppStateType } from "store/redux-store";
import { Dispatch } from "redux";
import { addPostAC, InitialStateType } from "store/profileReducer";
import { MyPosts } from "components/Profile/MyPosts/MyPosts";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        statusError: state.profilePage.statusError
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (postData) => {
            dispatch(addPostAC(postData))
        },
    }
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = InitialStateType

type MapDispatchToPropsType = {
    addPost: (postData: DateMessage) => void
}

export type DateMessage = {
    message: string
    published: string
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
