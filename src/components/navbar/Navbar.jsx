import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <ul className={classes.items}>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </div>
    )
}

export default Navbar;