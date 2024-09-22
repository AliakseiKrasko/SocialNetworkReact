import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = (props) => {
    return (
        <div>
            My Posts
            <div>
                <textarea placeholder="Enter your post..."></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>

    )
}

export default MyPosts;