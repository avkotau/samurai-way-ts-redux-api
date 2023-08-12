import React from 'react';
import { Field, Form } from "react-final-form";
import { FormValuesType } from "../../types/declarations";

type PostMessageType = {
    onSubmit: (newPost: FormValuesType) => void
}
const PostMessageForm = (props: PostMessageType) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field component='textarea'
                           name='textarea'
                           placeholder='Enter your message'
                    >
                    </Field>
                    <button type='submit'>Add post</button>
                </form>
            )}
        />
    )
}

export default PostMessageForm;
