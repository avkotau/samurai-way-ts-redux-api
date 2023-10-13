import React, { Component } from 'react';
import { Field, Form } from 'react-final-form'
import { login } from "store/auth-reducer";
import { connect } from "react-redux";
import { FormControl } from '../common/FormsControls/FormsControls'
import { composeValidators, minLength, required } from "utils/validators";
import { Redirect } from "react-router-dom";
import { AppStateType } from 'store/redux-store';

const maxLength10 = minLength(10)
export const LoginForm = (props: LoginFormProps) => {
    const {onSubmit} = props;

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, submitError}) => {

                return (
                    <form onSubmit={handleSubmit}>
                        {submitError && <div style={{color: 'red'}}>{submitError}</div>}
                        <Field name='email' placeholder='Email' component={FormControl}
                               validate={composeValidators(required, maxLength10)}
                        />
                        <Field name='password' placeholder='password' type='password' component={FormControl}
                               validate={composeValidators(required, maxLength10)}
                        />
                        <Field name='rememberMe' type='checkbox' component={FormControl}/> Remember Me
                        <div>
                            {submitError && <div className="error">{submitError}</div>}
                            <button type='submit'>Sign up</button>
                        </div>
                    </form>
                )
            }

        }
        />
    )
}

class Login extends Component<LoginType> {
    // login - callback which set params for thunk creator
    handleOnSubmit = async (values: FormDataType) => {
        return this.props.login(values);
    };

    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return (
            <>
                <h2>login</h2>
                <LoginForm onSubmit={this.handleOnSubmit}/>
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginFormProps = {
    onSubmit: (values: FormDataType) => void;
}
type MapDispatchToPropsType = {
    login: (values: FormDataType) => void
}
type MapStateToPropsType = {
    isAuth: boolean
}
type LoginType = MapDispatchToPropsType & MapStateToPropsType

// login - this thunk creator
export default connect(
    mapStateToProps,
    {login}
)(Login)
