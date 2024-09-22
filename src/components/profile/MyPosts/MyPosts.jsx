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
                <Post message='Hi, how are yuo' like='5' />
                <Post message="I'ts my first post" like='6' />
                <Post message="Hi, I like it" like='9' />
            </div>
        </div>

    )
}

export default MyPosts;