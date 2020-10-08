import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {

    let patch = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={patch}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Ivan Zolotukhin' id='1'/>
                <DialogItem name='John Fobos' id='2'/>
                <DialogItem name='Your name' id='3'/>
                <DialogItem name='Anna Mikhailovna' id='4'/>
                <DialogItem name='Czech Republic' id='5'/>
            </div>

            <div className={s.messages}>
                <Message message='Hello my friend' />
                <Message message='More info' />
                <Message message='Cash 500' />
                <Message message="Don't stop" />
                <Message message='Programmer is life and happy' />
            </div>
        </div>
    )
};

export default Dialogs;