import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div className={s.yourImage}>
                <img src="https://www.pulsar.ua/components/com_jshopping/files/img_products/full_71pOMS8Zv4L.jpg"
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