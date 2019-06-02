import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Route, Switch} from 'react-router';
import App from "./components/app";


const store = createStore(
    state => state
);
const history = createHistory();

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Route path="/" component={App}/>
    </ConnectedRouter>
</Provider>, document.getElementById('root'));