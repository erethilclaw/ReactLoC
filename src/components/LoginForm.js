import React from 'react';
import {reduxForm} from 'redux-form';

class LoginForm extends React.Component {
    render(){
        return (<div>futur login form!</div>)
    }
}

export default reduxForm({
    form: 'LoginForm'
})(LoginForm);