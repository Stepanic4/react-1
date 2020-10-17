import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        {/*<img src='../../img/earth.png' alt="logo"/><b>Earthlings</b>*/}
        <img src='https://images.vexels.com/media/users/3/157933/isolated/lists/e1855ec756f425b054d7c567a57e95b2-dark-earth-icon.png' alt="logo"/><b>Earthlings</b>
    </header>
};

export default Header;