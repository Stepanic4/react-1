import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div className={s.yourImage}>
                <img src="https://tourjournal.ru/media/k2/items/cache/3dcbd8056f504532259e733a4b9e2ae3_XL.jpg"
                     alt="ProfileLogo"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;