import React, { ChangeEvent, Component } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { NewPostTextType, PostDataType } from "../../../types/declarations";
import { DispatchType } from "../../../redux";
import { addPostActionCreator, changeTextareaActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


type TypeProps = {
    postsData: PostDataType[];
    dispatch: (action: DispatchType) => void
    newPostText: NewPostTextType
}

class MyPostsContainer extends Component<TypeProps> {

    render() {
        const {postsData, dispatch, newPostText} = this.props

        const addPost = () => {
            dispatch(addPostActionCreator())
        }

        const onChangeTextarea = (text: string) => {
            dispatch(changeTextareaActionCreator(text))

        }

        return (<MyPosts
            postsData={postsData}
            newPostText={newPostText}
            addPost={addPost}
            updateNewPostText={onChangeTextarea}/>)
    }

}

export default MyPostsContainer;
