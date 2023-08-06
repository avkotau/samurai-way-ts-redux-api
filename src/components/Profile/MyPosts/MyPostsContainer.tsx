import React from 'react';
import { addPostAC, changeTextareaAC, InitialStateType } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";


export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = InitialStateType

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

  return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = ( dispatch: Dispatch): MapDispatchToPropsType => {
  return {
      addPost: () => {
          dispatch(addPostAC())
      },
      updateNewPostText: (text) => {
          dispatch(changeTextareaAC(text))
      }

  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
