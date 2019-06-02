import React from 'react';
import LoginForm from "./LoginForm";
import {Route, Switch} from "react-router";
import BlogPostListContainer from "./BlogPostListContainer";

class App extends React.Component {
    render() {
        return (
            <div>
                hola puta
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/" component={BlogPostListContainer}/>
                </Switch>
            </div>
        )
    }
}

export default App;