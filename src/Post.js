import React from 'react';
import './Post.css';
const Post = (props) => {
    console.log(props);
    return(
        <div className= "PostS">
            <div className="Author">
                 <div className="Name">
                    {props.author.name}
                 </div>
                <div className="Photo">
                    <img src = {props.author.photo} alt=""/>
                </div>
                <div className="Nickname">
                    {props.author.nickname}
                </div>
            </div>
            <div className="Content">
                <p>{props.content}</p>
            </div>
            <div className="Image">
                <img src = {props.image} alt=""/>
            </div>
            <div className="Data">
                <p>{props.date}</p>
            </div>
    </div>
    )
}
export default Post;