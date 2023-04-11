import React, { useRef, useState } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostDataType } from "../../../types/declarations";

type Props = {
    postsData: PostDataType[];
}

const MyPosts: React.FC<Props> = (
    {
        postsData
    }
) => {
    const [text, setText] = useState(' ');
    let newPost = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        console.log(text)
        setText('')
    }

    const onChangeTextareaHandle = () => {

        setText(newPost.current?.value || '')
    }
    return (
        <div className={s.myPostsContainer}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost}
                              value={text}
                              onChange={onChangeTextareaHandle}
                              placeholder='Введите текст'
                    />
                </div>
                <div>
                    <button onClick={addPost} disabled={!text.trim()}>Add post</button>
                </div>
            </div>
            {postsData.map(el => (
                <Post key={el.id} message={el.message} like={el.like}/>
            ))}
        </div>
    );
};

export default MyPosts;
