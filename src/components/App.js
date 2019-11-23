import React from 'react';
import LoginForm from "./LoginForm";
import {Route, Switch} from "react-router";
import BlogPostListContainer from "./BlogPostListContainer";
import Header from "./Header";
import BlogPostContainer from "./BlogPostContainer";
import {requests} from "../agent";
import {connect} from 'react-redux';

const mapsStateToProps = state => ({
    ...state.auth
});

class App extends React.Component {
    constructor(props) {
        super(props);
        const token = window.localStorage.getItem('jwtToken');

        if (token){
            requests.setToken(token);
        }
    }

    render() {
        const {isAuthenticated} = this.props;
        return (
            <div>
                <Header isAuthenticated={isAuthenticated}/>
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/" exact component={BlogPostListContainer}/>
                    <Route path="/blog-post/:id" component={BlogPostContainer}/>
                </Switch>
            </div>
        )
    }
}

export default connect(mapsStateToProps, null)(App);