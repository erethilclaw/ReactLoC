import React from 'react';
import LoginForm from "./LoginForm";
import {Route, Switch} from "react-router";
import BlogPostListContainer from "./BlogPostListContainer";
import Header from "./Header";
import BlogPostContainer from "./BlogPostContainer";


class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/" exact component={BlogPostListContainer}/>
                    <Route path="/blog-post/:id" component={BlogPostContainer}/>
                </Switch>
            </div>
        )
    }
}

export default App;