import React from 'react';
import classes from './ProfileInfi.module.css';


const ProfileInfo = (props) => {
    return (

        <div>
            <img
                src="https://cdn.tripster.ru/thumbs2/0fbeccf2-ab9b-11ed-b718-36c17ab82c90.1220x600.jpeg"/>
            <div className={classes.discriptionBlock}>
                ava + discription
            </div>

        </div>


    )
}

export default ProfileInfo;