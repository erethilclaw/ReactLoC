import {requests} from "../agent";
import {
    BLOG_POST_ERROR,
    BLOG_POST_LIST_ADD, BLOG_POST_LIST_ERROR, BLOG_POST_LIST_RECEIVED, BLOG_POST_LIST_REQUEST, BLOG_POST_RECEIVED,
    BLOG_POST_REQUEST, BLOG_POST_UNLOAD
} from "./constants";

export const blogPostListRquest = () => ({
    type: BLOG_POST_LIST_REQUEST,
});

export const blogPostListError = (error) => ({
    type: BLOG_POST_LIST_ERROR,
    error
});

export const blogPostListRecieved = (data) => ({
    type: BLOG_POST_LIST_RECEIVED,
    data
});

export const blogPostListFetch = () => {
    return (dispatch) => {
        dispatch(blogPostListRquest());
        return requests.get('/blog_posts')
            .then(response => dispatch(blogPostListRecieved(response)))
            .catch(error => dispatch(blogPostListError(error)));
    }
};

export const blogPostRequest = () => ({
   type: BLOG_POST_REQUEST,

});

export const blogPostError = (error) => ({
    type: BLOG_POST_ERROR,
    error
});

export const blogPostRecieved = (data) => ({
    type: BLOG_POST_RECEIVED,
    data
});

export const blogPostUnload = () => ({
    type: BLOG_POST_UNLOAD,

});

export const blogPostFetch = (id) => {
    return (dispatch) => {
        dispatch(blogPostRequest());
        return requests.get(`/blog_posts/${id}`)
            .then(response => dispatch(blogPostRecieved(response)))
            .catch(error => dispatch(blogPostError(error)));
    }
};

export const blogPostAdd = () => ({
    type: BLOG_POST_LIST_ADD,
    data: {
        id: Math.floor(Math.random()*100/3),
        title: 'A newly added blog post'
    }
});