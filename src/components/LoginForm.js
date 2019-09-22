import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {renderField} from "../form";

class LoginForm extends React.Component {
    render(){
        return (
            <div className="text-center">
                <form className="mt-4">
                    <Field name="username" label="Username" type="text" component={renderField}></Field>
                    <Field name="password" label="Password" type="password" component={renderField}></Field>
                    <button className="btn btn-dark btn-big btn-block">log in</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'LoginForm'
})(LoginForm);