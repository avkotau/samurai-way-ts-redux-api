import React, { ChangeEvent, Component } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { NewPostTextType, PostDataType } from "../../../types/declarations";
import { DispatchType } from "../../../redux";
import { addPostActionCreator, changeTextareaActionCreator } from "../../../redux/profileReducer";


type TypeProps = {
    postsData: PostDataType[];
    newPostText: NewPostTextType
    updateNewPostText: (text: string) => void
    addPost: () => void

}


class MyPosts extends Component<TypeProps> {

    render() {
        const {
            postsData,
            newPostText,
            updateNewPostText,
            addPost
        } = this.props


const onAddPostHandler = () => {
    addPost()
}
        const onChangeTextareaHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
            updateNewPostText(e.currentTarget.value)

        }

        return (
            <div className={s.myPostsContainer}>
                <h3 className={s.title}>My posts</h3>
                <div>
                    <div>
                    <textarea
                        value={newPostText[0].post}
                        onChange={onChangeTextareaHandle}
                        placeholder='Введите текст'
                    />
                    </div>
                    <div>
                        <button onClick={onAddPostHandler}>Add post</button>
                        {/*    disabled={!text.trim()}*/}
                    </div>
                </div>
                {postsData.map(el => (
                    <Post key={el.id} message={el.message} like={el.like}/>
                ))}
            </div>
        )
    }

}

export default MyPosts;
