import s from './FormsControls.module.css'
import { FieldMetaState, FieldInputProps } from "react-final-form";
import React from "react";

type FormControlProps<T> = {
    input: FieldInputProps<T>
    meta: FieldMetaState<T>
    value: string
};

export const FormControl = <T extends string | number | readonly string[]>(
    {
        input,
        meta: {error, dirty, touched},
        value,
        ...resProps
    }: FormControlProps<T>) => {

    const hasErrorInput = (error && dirty) || (error && touched)
    const hasErrorTextarea = error && dirty

    const renderInputBasedOnType = () => {
        switch (input.type) {
            case 'textarea':
                return <textarea {...input} {...resProps} className={hasErrorTextarea ? s.errorTextarea : ''}/>;

            case 'checkbox':
                return <input {...input} {...resProps} type='checkbox'
                              className={hasErrorInput ? s.errorTextarea : ''}/>;

            case 'password':
                return <input {...input} {...resProps} type='password'
                              className={`${hasErrorInput ? s.errorTextarea : ''} ${s.common}`}/>;

            default:
                return <input {...input} {...resProps} type='text'
                              className={`${hasErrorInput ? s.errorTextarea : ''} ${s.common}`}/>;
        }
    };

    return (
        <>
            {renderInputBasedOnType()}

            {(hasErrorInput || hasErrorTextarea) && <span className={s.error}>{error}</span>}

            <span>{value}</span>
        </>
    )
}
