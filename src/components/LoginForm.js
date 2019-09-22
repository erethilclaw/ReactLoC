import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {renderField} from "../form";
import {connect} from "react-redux";
import {userLoginAttempt} from "../actions/actions";

const mapDispatchToProps = {
    userLoginAttempt
};

class LoginForm extends React.Component {

    onSubmit(values){
        console.log(values);
        return this.props.userLoginAttempt(
            values.username,
            values.password
        );
    }

    render(){
        const {handleSubmit} = this.props;

        return (
            <div className="text-center">
                <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
})(connect(null, mapDispatchToProps)(LoginForm));