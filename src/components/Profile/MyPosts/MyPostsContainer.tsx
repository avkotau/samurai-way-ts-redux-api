import React, { ChangeEvent, Component } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { NewPostTextType, PostDataType } from "../../../types/declarations";
import { DispatchType } from "../../../redux";
import { addPostActionCreator, changeTextareaActionCreator, InitialStateType } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";


type TypeProps = {
    postsData: PostDataType[];
    dispatch: (action: DispatchType) => void
    newPostText: NewPostTextType
}

// class MyPostsContainer extends Component<TypeProps> {
//
//     render() {
//         const {postsData, dispatch, newPostText} = this.props
//
//         const addPost = () => {
//             dispatch(addPostActionCreator())
//         }
//
//         const onChangeTextarea = (text: string) => {
//             dispatch(changeTextareaActionCreator(text))
//
//         }
//
//         return (<MyPosts
//             postsData={postsData}
//             newPostText={newPostText}
//             addPost={addPost}
//             updateNewPostText={onChangeTextarea}/>)
//     }
//
// }

//
// type mapStateToPropsType = {
//     postsData: PostDataType[];
//     newPostText: NewPostTextType
// }

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = InitialStateType

type MapDispatchToPropsType = {
    // dispatch: (action: DispatchType) => void
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
          dispatch(addPostActionCreator())
      },
      updateNewPostText: (text) => {
          dispatch(changeTextareaActionCreator(text))
      }

  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
