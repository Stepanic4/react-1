import React from 'react';
import s from './Profileinfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.yourImage}>
            <img src="https://octodex.github.com/images/murakamicat.png"
                 alt="ProfileLogo"/>
            <div>
                ava+description
            </div>
        </div>
    )
};

export default ProfileInfo;