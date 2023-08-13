import s from './FormsControls.module.css'
import { FieldMetaState, FieldInputProps } from "react-final-form";
import React from "react";

type FormControlProps<T> = {
    input: FieldInputProps<T>
    meta: FieldMetaState<T>
};

export const FormControl = <T extends string | number | readonly string[]>({
    input,
    meta,
    ...resProps
}: FormControlProps<T>) => {

    const hasErrorInput = (meta.error && meta.dirty) || (meta.error && meta.touched)
    const hasErrorTextarea = meta.error && meta.dirty
    return (
        <div>
            {
                input.name === 'textarea'
                    ? <textarea {...input} {...resProps} className={hasErrorTextarea ? s.errorTextarea : ''}/>
                    : <input {...input} {...resProps} className={hasErrorInput ? s.errorTextarea : ''}/>
            }
            {
                input.name === 'textarea'
                    ? hasErrorTextarea && <span className={s.error}>{meta.error}</span>
                    : hasErrorInput && <span className={s.error}>{meta.error}</span>
            }
        </div>
    )
}
