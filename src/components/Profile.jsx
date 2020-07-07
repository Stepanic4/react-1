import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return  <div className={s.content}>
        <div className={s.yourImage}>
            <img src="https://www.pulsar.ua/components/com_jshopping/files/img_products/full_71pOMS8Zv4L.jpg" alt="ProfileLogo"/>
        </div>
        <div>
            ava+description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>Post-1-</div>
                <div className={s.item}>Post-2-</div>
            </div>
        </div>
    </div>
};

export default Profile;