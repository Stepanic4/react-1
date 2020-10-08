import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likeCount='15'/>
                <Post message='It`s my first post' likeCount='20'/>
            </div>
        </div>
    )
};


export default MyPosts;