import React from 'react';
import { addPostAC, InitialStateType } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = InitialStateType

type MapDispatchToPropsType = {
    addPost: (newPost: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        postsData: state.profilePage.postsData,
        //not use now
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPost) => {
            dispatch(addPostAC(newPost))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
