import React from 'react';

const Post = ({ author, content, image, date }) => {
    return (
        <div className = 'container'>
            <div className = 'info'>
                <img className = 'avatar' src={author.photo} alt="" />
                <div className = 'content'>
                    <div>
                        <span className = 'author-name'>{author.name} &#10004; </span>
                        <span className = 'author-nickname'>{author.nickname} &middot; {date}</span>
                    </div>
                    <div>
                        <span>{content}</span>
                    </div>
                </div>
            </div>
            <img className = 'image' src={image} alt="" />
        </div>
    );
};

export default Post;
