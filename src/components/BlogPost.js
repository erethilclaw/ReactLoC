import React from 'react';
import timeago from 'timeago.js';
import Message from "./Message";

export class BlogPost extends React.Component {
    render() {
        const {post} = this.props;

        if (null === post) {
            return (<Message message="Blogpost doesn't exist"/>);
        }

        return (
            <div className=" card mb-3 mt-3 shadow-sm">
                <div className="card-body">
                    <h2>{post.title}</h2>
                    <p className="card-terxt">{post.content}</p>
                    <p className="card-text border-top">
                        {timeago().format(post.published)} by&nbsp;
                        {post.author.username}
                    </p>
                </div>
            </div>
        )
    }
}