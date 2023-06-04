import React, { ChangeEvent, Component, LegacyRef, useState } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { NewPostTextType, PostDataType } from "../../../types/declarations";
import { addPostActionCreator, DispatchType, changeTextareaActionCreator } from "../../../redux";


type TypeProps = {
    postsData: PostDataType[];
    dispatch: (action: DispatchType) => void
    newPostText: NewPostTextType
}



class MyPosts extends Component<TypeProps> {

    render() {
        const {postsData, dispatch, newPostText} = this.props

        const addPostHandle = () => {

            dispatch(addPostActionCreator())
        }

        const onChangeTextareaHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(changeTextareaActionCreator(e.currentTarget.value))

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
                        <button onClick={addPostHandle}>Add post</button>
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
