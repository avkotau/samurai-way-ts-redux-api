import React from 'react';
import { Field, Form } from "react-final-form";
import { FormControl } from "../common/FormsControls/FormsControls";
import { composeValidators, maxLength, required } from "utils/validators";
import { FormValuesType } from "types/commonTypes";

const maxLength100 = maxLength(100)
const PostMessageForm = (props: PostMessageType) => {

    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name='message'
                        type='textarea'
                        placeholder='Enter your message'
                        validate={composeValidators(required, maxLength100)}
                        component={FormControl}
                    />
                    <button type='submit'>Add post</button>
                </form>
            )}
        />
    )
}

type PostMessageType = {
    onSubmit: (newPost: FormValuesType) => void
}
export default PostMessageForm;
