import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hello bro' like={12}/>
            <Post message='Hello man' like={20}/>
            <Post message='Hello women' like={6}/>
        </div>
    );
};

export default MyPosts;
