import React from 'react';
import blogPostList from "../reducers/blogPostList";

class BlogPostList extends React.Component {
    render() {
        const {posts, isFetching} = this.props;

        if (isFetching){
            return(<div><i className="fa fa-spinner fa-spin"></i></div>);
        }

        if (null === posts ||  0 === posts.length){
            return(<div>No blogPost to see here</div>);
        }

        return (
            <div>
                <ul>
                    {posts && posts.map(post => <li key={post.id}>{post.title}</li>)}
                </ul>
            </div>
        )
    }
}

export default BlogPostList;