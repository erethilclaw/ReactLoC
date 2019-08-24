import React from 'react';
import timeago from 'timeago.js';
import Message from "./Message";

export class CommentList extends React.Component {
    render() {
        const {commentList} = this.props;

        if (null === commentList) {
            return (<Message message="This post has not comments yet"/>);
        }

        return (
            <div className=" card mb-3 mt-3 shadow-sm">
                <div className="card-body">
                    Not done yet
                </div>
            </div>
        )
    }
}