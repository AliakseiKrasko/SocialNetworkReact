import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.items}>
            <img src="https://www.iphones.ru/wp-content/uploads/2024/02/IMG_8792.jpeg"/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>

    )
}

export default Post;