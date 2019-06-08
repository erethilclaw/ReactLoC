import React from 'react';
import BlogPostList from "./BlogPostList";

class BlogPostListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.posts = [
            {
                id: '1',
                title: 'hello'
            },
            {
                id: '2',
                title: 'un altre post'
            }
        ];
    }

    render() {
        return (
            <BlogPostList posts={this.posts}/>
        )
    }
}

export default BlogPostListContainer;