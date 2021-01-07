import React from 'react';
const Post = (props) => {
    console.log(props);
    return(
        <div className="">
             <div className="Name">
            <p>{props.author.name}</p>
             </div>
            <div className="Photo">
                <img
                    src = {props.author.photo}
                    alt=""
                />
            </div>
            <div className="Nickname">
                <p>{props.author.nickname}</p>
            </div>
            <div className="Content">
                <p>{props.content}</p>
            </div>
            <div className="Image">
                <img src = {props.image}
                alt=""/>
            </div>
            <div className="Data">
                <p>{props.date}</p>
            </div>
    </div>
    )
}
export default Post;