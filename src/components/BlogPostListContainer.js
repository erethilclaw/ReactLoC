import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostList, blogPostListAdd} from "../actions/actions";
import {connect} from "react-redux";
import {requests as request} from "../agent";

const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostList,
    blogPostListAdd
};

class BlogPostListContainer extends React.Component {
    componentDidMount(){
        request.get('/blog_posts').then(response => console.log(response));
        setTimeout(this.props.blogPostListAdd, 10000);
        this.props.blogPostList();
    }
    render() {
        console.log(this.props);
        return (
            <BlogPostList posts={this.props.posts} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);