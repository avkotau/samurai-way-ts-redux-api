import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { FormControl } from '../common/FormsControls/FormsControls'
import { composeValidators, minLength, required } from "../common/validators";
import { Redirect } from "react-router-dom";
import { AppStateType } from '../../redux/redux-store';


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginFormProps = {
    onSubmit: (values: FormDataType) => void;
}
// & InjectedFormProps<FormDataType>;

const maxLength10 = minLength(10)
export const LoginForm = (props: LoginFormProps) => {

    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name='email' placeholder='Email' type='text' component={FormControl}
                               validate={composeValidators(required, maxLength10)}
                        />
                    </div>
                    <div>
                        <Field name='password' placeholder='password' type='password' component={FormControl}
                               validate={composeValidators(required, maxLength10)}
                        />
                    </div>
                    <div>
                        <Field name='rememberMe' type='checkbox' component={FormControl}/> Remember Me
                    </div>
                    <div>
                        <button type='submit'>Sign up</button>
                    </div>
                </form>
            )}
        />
    )

}

type MapDispatchToPropsType = {
    login: (values: FormDataType) => void
}

type MapStateToPropsType = {
    isAuth: boolean
}

type LoginType = MapDispatchToPropsType & MapStateToPropsType

class Login extends Component<LoginType> {
    // login - callback which set params for thunk creator
    handleOnSubmit = (values: FormDataType) => {
        this.props.login(values)
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
// login - this thunk creator
export default connect(
    mapStateToProps,
    {login}
    // {credentialsData}
)(Login)
