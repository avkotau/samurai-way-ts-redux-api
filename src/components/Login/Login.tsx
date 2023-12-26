import React, { Component } from 'react';
import { Field, FieldInputProps, FieldMetaState, Form } from 'react-final-form'
import { login } from "store/auth-reducer";
import { connect } from "react-redux";
import { FormControl } from '../common/FormsControls/FormsControls'
import { composeValidators, minLength, required } from "utils/validators";
import { Redirect } from "react-router-dom";
import { AppStateType } from 'store/redux-store';
import s from './Login.module.css'

const maxLength10 = minLength(10)
const minLength4 = minLength(4)

type FormControlProps<T> = {
    input: FieldInputProps<T>
    meta: FieldMetaState<T>
    value: string
};

export const LoginForm = (props: LoginFormProps) => {
    const {onSubmit, captchaUrl} = props;

    const FormControlWithFixedValue = <T extends string>(props: FormControlProps<T>) => {

        return <FormControl {...props} value="Remember Me"/>;
    }
    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, submitError}) => {

                return (
                    <form onSubmit={handleSubmit} className={s.form}>
                        <Field
                            name='email'
                            placeholder='Email'
                            component={FormControl}
                            validate={composeValidators(required, maxLength10)}
                        />

                        <Field
                            name='password'
                            placeholder='Password'
                            type='password'
                            component={FormControl}
                            validate={composeValidators(required, minLength4)}
                        />

                        <Field
                            name='rememberMe'
                            type='checkbox'
                            component={FormControlWithFixedValue}
                        />

                        {captchaUrl && (
                            <>
                                <img className={s.captchaImg} src={captchaUrl} alt='captcha'/>
                                <Field
                                    name='captcha'
                                    placeholder='Enter the symbols from the picture'
                                    component={FormControl}
                                    validate={composeValidators(required)}
                                />
                            </>
                        )}

                        {submitError ? (
                            <div className={s.errorCaptcha}>{submitError}</div>
                        ) : (
                            <div className={s.element}></div>
                        )}

                        <button type='submit' className={s.button}>Sign up</button>
                    </form>
                )
            }}
        />
    )
}

class Login extends Component<LoginType> {

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
                <LoginForm onSubmit={this.handleOnSubmit} captchaUrl={this.props.captchaUrl}/>
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}
type CaptchaUrl = {
    captchaUrl: string
}

type FormFields = {
    email: string
    password: string
    rememberMe: boolean
}

type FormDataType = CaptchaUrl & FormFields;

type LoginFormProps = {
    onSubmit: (values: FormDataType) => void
} & CaptchaUrl;

type AuthInfo = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    login: (values: FormDataType) => void
}

type MapStateToPropsType = CaptchaUrl & AuthInfo;

type LoginType = MapDispatchToPropsType & MapStateToPropsType

export default connect(mapStateToProps, {login})(Login)
