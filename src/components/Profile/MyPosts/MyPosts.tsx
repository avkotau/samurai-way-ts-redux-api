import React from 'react';
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

    return (
        <div className={s.myPostsContainer}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div>
                    <textarea value="Some default value" onChange={() => {
                    }}> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {postsData.map(el => (
                <Post key={el.id} message={el.message} like={el.like}/>
            ))}
        </div>
    );
};

export default MyPosts;
