import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg"/>
            <b>{props.message}</b>
            <div>
                <span>Like{props.likeCount}</span>
            </div>
        </div>
    )
};

export default Post;