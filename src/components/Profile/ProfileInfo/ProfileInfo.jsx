import React from 'react';
import s from './Profileinfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.yourImage}>
            <img src="https://tourjournal.ru/media/k2/items/cache/3dcbd8056f504532259e733a4b9e2ae3_XL.jpg"
                 alt="ProfileLogo"/>
            <div>
                ava+description
            </div>
        </div>
    )
};

export default ProfileInfo;