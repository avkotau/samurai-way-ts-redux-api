import React, { memo, PureComponent } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { MyPostsPropsType } from "./MyPostsContainer";
import PostMessageForm from "../../PostMessageForm/PostMessageForm";
import { FormValuesType } from "types/commonTypes";

export const MyPosts = memo<MyPostsPropsType>(props => {
    const sendPost = (values: FormValuesType) => {
        props.addPost(values.textarea)
    }
    return (
        <div className={s.myPostsContainer}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <PostMessageForm onSubmit={sendPost}/>
            </div>
            {props.postsData.map(el => (
                <Post key={el.id} message={el.message} like={el.like}/>
            ))}
        </div>
    )
})

