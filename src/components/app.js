import React from 'react';
import LoginForm from "./LoginForm";
import {Route, Switch} from "react-router";
import BlogPostList from "./BlogPostList";

class App extends React.Component {
    render() {
        return (
            <div>
                hola puta
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/" component={BlogPostList}/>
                </Switch>
            </div>
        )
    }
}

export default App;