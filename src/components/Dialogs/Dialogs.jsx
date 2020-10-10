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

    let dialogs = [
        {id: 1, name: 'Ivan Zolotukhin'},
        {id: 2, name: 'John Fobos'},
        {id: 3, name: 'Your name'},
        {id: 4, name: 'Anna Mikhailovna'},
        {id: 5, name: 'Czech Republic'}
    ];

    let messages = [
        {id: 1, message: 'Hello my friend'},
        {id: 2, message: 'More info'},
        {id: 3, message: 'Cash 500'},
        {id: 4, message: 'Dont stop'},
        {id: 5, message: 'Programmer is life and happy'}
    ];

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = messages.map( m => <Message message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;