import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Dialogs</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Your name</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>John Fobos</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Czech Republic</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>More info</div>
                <div className={s.message}>Cash 500</div>
                <div className={s.message}>Don't stop</div>
                <div className={s.message}>Programmer</div>
            </div>
        </div>
    )
};

export default Dialogs;