import React, { Component } from 'react';
import s from './Post.module.css';

class Post extends Component<TypeProps> {
    render() {
        return (
            <>
                <div className={s.post}>
                    <img
                        src="data:image/jpeg;base64,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"
                        alt=""/>
                    <span>
                        {this.props.message}
                        </span>
                    <span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart"
                                 className="svg-inline--fa fa-heart fa-lg Post_icon__tP710" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z">
                            </path>
                            </svg>
                        {this.props.like}
                        </span>
                </div>
            </>
        )
    }
}

type TypeProps = {
    message: string,
    like: number
}

export default Post;
