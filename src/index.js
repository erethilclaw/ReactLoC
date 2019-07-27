import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import history from "./history";
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router';
import App from "./components/App";
import reducer from "./reducer";
import thunkMiddleWare from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunkMiddleWare));

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Route path="/" component={App}/>
    </ConnectedRouter>
</Provider>, document.getElementById('root'));