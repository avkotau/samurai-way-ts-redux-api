import React, { Component } from 'react';
import s from './Post.module.css';

type TypeProps = {
    message: string,
    like: number
}

class Post extends Component<TypeProps> {
    render() {

        return (
            <div className={s.posts}>
                <div className={s.item}>
                    {this.props.message}
                    <img
                        src="data:image/jpeg;base64,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"
                        alt=""/>
                    <div>
                        <span>like: {this.props.like}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;
