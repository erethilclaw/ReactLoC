import React from 'react';
import timeago from 'timeago.js';

export class BlogPost extends React.Component {
    render() {
        const {post, isFetching} = this.props;

        if (isFetching) {
            return (<div><i className="fa fa-spinner fa-spin"></i></div>);
        }

        if (null === post) {
            return (<div>blogPost doesn't exist</div>);
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