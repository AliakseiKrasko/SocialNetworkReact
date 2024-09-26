import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are yuo', likesCount: 12 },
        {id: 2, message: "I'ts my first post", likesCount: 22 },
        {id: 3, message: 'Hi, I like it', likesCount: 3 },

    ]

    let poastElement = postData.map(m => (
        <Post message={m.message} likesCount={m.likesCount} />
    ));

    return (
        <div className={classes.MyContent}>
            <h3>My Posts</h3>
            <div>
                <textarea placeholder="Enter your post..."></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {poastElement}
            </div>
        </div>

    )
}

export default MyPosts;