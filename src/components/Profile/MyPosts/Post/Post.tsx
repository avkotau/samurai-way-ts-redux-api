import React, { Component } from 'react';
import s from './Post.module.css';
import photoUser from '../../../../assets/images/photoUser.png'

class Post extends Component<TypeProps> {
    render() {
        return (
            <>
                <div className={s.post}>

                    <img src={this.props.photo || photoUser} alt='My photo' className={s.photo}/>

                    <div>
                        <div>{this.props.published}</div>
                        <div>{this.props.message}</div>

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
                </div>
            </>
        )
    }
}

type TypeProps = {
    message: string,
    like: number
    photo: string,
    published: string
}

export default Post;
