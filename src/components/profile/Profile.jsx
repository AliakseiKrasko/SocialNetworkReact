import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={classes.content}>

            <ProfileInfo/>

            <MyPosts/>
        </div>


    )
}

export default Profile;