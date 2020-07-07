import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src='https://www.thesmbguide.com/images/hatchful-by-shopify-1024x512-20190808.png' alt="logo"/>
    </header>
};

export default Header;