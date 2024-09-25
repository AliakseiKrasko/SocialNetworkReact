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

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Tolik'},
        {id: 6, name: 'Sasha'},
        {id: 7, name: 'Oleg'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: "What's up?"},
    ]
    return (
        <div className={classes.dialog}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />

            </div>

            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />

            </div>
        </div>
    );
};

export default Dialogs;
