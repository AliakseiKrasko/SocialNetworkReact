import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

// Компонент для одного элемента диалога
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${classes.dialog} ${props.isActive ? classes.active : ''}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

// Компонент для одного сообщения
const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>;
};

// Главный компонент для диалогов
const Dialogs = (props) => {
    return (
        <div className={classes.dialog}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Alex" id="1" />
                <DialogItem name="Dima" id="2" />
                <DialogItem name="Sveta" id="3" />
                <DialogItem name="Valera" id="4" />
                <DialogItem name="Tolik" id="5" />
                <DialogItem name="Sasha" id="6" />
                <DialogItem name="Oleg" id="7" />
            </div>

            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="How are you" />
                <Message message="Yo" />
                <Message message="What's up?" />
            </div>
        </div>
    );
};

export default Dialogs;
