import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { MyPostsPropsType } from "./MyPostsContainer";
import PostMessageForm from "../../PostMessageForm/PostMessageForm";
import { FormValuesType } from "types/commonTypes";

class MyPosts extends Component<MyPostsPropsType> {
    render() {
        const {
            postsData,
            addPost
        } = this.props
        const sendPost = (values: FormValuesType) => {
            addPost(values.textarea)
        }
        return (
            <div className={s.myPostsContainer}>
                <h3 className={s.title}>My posts</h3>
                <div>
                    <PostMessageForm onSubmit={sendPost}/>
                </div>
                {postsData.map(el => (
                    <Post key={el.id} message={el.message} like={el.like}/>
                ))}
            </div>
        )
    }
}

export default MyPosts;
