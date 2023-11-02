import React, { memo } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { MyPostsPropsType } from "./MyPostsContainer";
import PostMessageForm from "../../PostMessageForm/PostMessageForm";

export const MyPosts = memo<MyPostsPropsType>(props => {

    const sendPost = (values: Record<string, any>) => {
        const currentDate = new Date();
        const formattedDate = `
        ${currentDate.getDate().toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}.${currentDate.getFullYear()}, ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
        props.addPost({message: values.message, published: formattedDate})
    }

    return (
        <div className={s.myPostsContainer}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <PostMessageForm onSubmit={sendPost}/>
            </div>
            <div className={s.posts}>
                {props.postsData.map(el => (
                    <Post key={el.id} message={el.message} like={el.like} photo={props.profile.photos.small} published={el.published}/>
                ))}
            </div>
        </div>
    )
})

