import React, { ChangeEvent, LegacyRef, useState } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { NewPostTextType, PostDataType } from "../../../types/declarations";


type Props = {
    postsData: PostDataType[];
    addPost: () => void
    updatingTextPost: (textPost: string) => void
    newPostText: NewPostTextType
}

const MyPosts: React.FC<Props> = (
    {
        postsData,
        addPost,
        updatingTextPost,
        newPostText
    }
) => {

// const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandle = () => {

        addPost()
    }

    const onChangeTextareaHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {

        updatingTextPost(e.currentTarget.value)

    }

    return (
        <div className={s.myPostsContainer}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div>
                    <textarea
                        // ref={newPostElement}
                        value={newPostText.post}
                        onChange={onChangeTextareaHandle}
                        placeholder='Введите текст'
                    />
                </div>
                <div>
                    <button onClick={addPostHandle} >Add post</button>
                {/*    disabled={!text.trim()}*/}
                </div>
            </div>
            {postsData.map(el => (
                <Post key={el.id} message={el.message} like={el.like}/>
            ))}
        </div>
    );
};

export default MyPosts;
