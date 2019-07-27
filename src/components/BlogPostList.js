import React from 'react';
import timeago from 'timeago.js';
import {Link} from 'react-router-dom';

class BlogPostList extends React.Component {
    render() {
        const {posts, isFetching} = this.props;

        if (isFetching) {
            return (<div><i className="fa fa-spinner fa-spin"></i></div>);
        }

        if (null === posts || 0 === posts.length) {
            return (<div>No blogPost to see here</div>);
        }

        return (<div>
            {posts && posts.map(post => (
                <div className="card mb-3 mt-3 shadow-sm" key={post.id}>
                    <div className="card-body">
                        <h3>
                            <Link to={`/blog-post/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="card-text border-top">
                            <small className="text-muted">{timeago().format(post.published)}</small>
                        </p>
                    </div>
                </div>
            ))}
        </div>)
    }
}

export default BlogPostList;