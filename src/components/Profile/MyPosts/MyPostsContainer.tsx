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
        addPost: (newPost) => {
            dispatch(addPostAC(newPost))
        },
    }
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = InitialStateType

type MapDispatchToPropsType = {
    addPost: (newPost: string) => void
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
