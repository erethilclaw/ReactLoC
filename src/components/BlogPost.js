import React from 'react';

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
            <div>
                {post.title}
            </div>
        )
    }
}