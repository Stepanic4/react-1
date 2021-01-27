import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> );

    return (
        <div>
            <h2>My posts</h2>
            <div className={s.ta}>
                <textarea cols="50" rows="5" placeholder ="Type your message"/>
            </div>
            <div>
                <a href="#" className={s.button}>Add post</a>
            </div>
            <div className = {s.posts}>
                {postsElements}
            </div>
        </div>
    )
};


export default MyPosts;