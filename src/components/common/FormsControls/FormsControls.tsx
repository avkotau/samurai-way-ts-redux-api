import s from './FormsControls.module.css'
import { FieldMetaState, FieldInputProps } from "react-final-form";
import React from "react";

type FormControlProps<T> = {
    input: FieldInputProps<T>
    meta: FieldMetaState<T>
};

export const FormControl = <T extends string | number | readonly string[]>(
    {
        input,
        meta: {error, dirty, touched},
        ...resProps
    }: FormControlProps<T>) => {

    const hasErrorInput = (error && dirty) || (error && touched)
    const hasErrorTextarea = error && dirty
    return (
        <div>
            {
                input.name === 'textarea'
                    ? <textarea {...input} {...resProps} className={hasErrorTextarea ? s.errorTextarea : ''}/>
                    : <input {...input} {...resProps} className={hasErrorInput ? s.errorTextarea : ''}/>
            }
            {
                input.name === 'textarea'
                    ? hasErrorTextarea && <span className={s.error}>{error}</span>
                    : hasErrorInput && <span className={s.error}>{error}</span>
            }
        </div>
    )
}
