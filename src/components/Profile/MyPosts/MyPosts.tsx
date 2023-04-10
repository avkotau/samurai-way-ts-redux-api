import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsElemData = [
        {id: 1, message: 'Hello bro', like: 12},
        {id: 2, message: 'Hello man', like: 20},
        {id: 3, message: 'Hello women', like: 6}
    ]

    return (
        <div className={s.myPostsContainer}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {postsElemData.map(el => (
                <Post key={el.id} message={el.message} like={el.like}/>
            ))}
        </div>
    );
};

export default MyPosts;
