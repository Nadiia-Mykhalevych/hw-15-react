import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="posts">
            <div className="upper">
                <div className="author">
                    <img className="photo" src={props.author.photo} alt="avatar"/>
                </div>
                <div className="info-data">
                    <div className="author-data">
                        <div className="name-author">
                            {props.author.name}
                        </div>
                        <div className="Nickname">
                            {props.author.nickname}
                        </div>
                        <div className="dot-sign">.</div>
                        <div className="post-data">{props.date}</div>
                    </div>
                    <div className="content-data">
                        {props.content}
                    </div>
                </div>

            </div>
            <div className="middle">
                <img className="image" src={props.image} alt="postImage"/>
            </div>

        </div>
    )
}
export default Post;
