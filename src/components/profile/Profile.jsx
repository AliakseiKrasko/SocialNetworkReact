import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <img
                src="https://cdn.tripster.ru/thumbs2/0fbeccf2-ab9b-11ed-b718-36c17ab82c90.1220x600.jpeg"/>
            <MyPosts />
        </div>


    )
}

export default Profile;