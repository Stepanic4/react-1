import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <b className={s.item}>Dialogs</b>
                </div>
                <div className={s.dialog}>
                    <b className={s.item}>Your name</b>
                </div>
                <div className={s.dialog}>
                    <b className={s.item}>John Fobos</b>
                </div>
                <div className={s.dialog}>
                    <b className={s.item}>Czech Republic</b>
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