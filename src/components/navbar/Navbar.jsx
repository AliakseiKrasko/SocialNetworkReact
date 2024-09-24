import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.items}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? classes.active : ''}>Profile</NavLink>
            </div>
            <div className={classes.items}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? classes.active : ''}>Messages</NavLink>
            </div>
            <div className={classes.items}>
                <NavLink to="/news" className={({ isActive }) => isActive ? classes.active : ''}>News</NavLink>
            </div>
            <div className={classes.items}>
                <NavLink to="/music" className={({ isActive }) => isActive ? classes.active : ''}>Music</NavLink>
            </div>
            <div className={classes.items}>
                <NavLink to="/settings" className={({ isActive }) => isActive ? classes.active : ''}>Settings</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
