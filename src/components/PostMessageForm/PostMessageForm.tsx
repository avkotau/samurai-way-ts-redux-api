import { Field, Form } from "react-final-form";
import { FormControl } from "../common/FormsControls/FormsControls";
import { composeValidators, maxLength } from "utils/validators";

const maxLength100 = maxLength(100)
const PostMessageForm = (props: PostMessageType) => {

    return (
        <Form
            onSubmit={(values, form) => {
                // processing this message, such as sending to redux
                props.onSubmit(values);
                //this function clean form after push button
                form.reset();
            }}
            render={({handleSubmit, valid, values}) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name='message'
                        type='textarea'
                        placeholder='Enter your message'
                        validate={composeValidators(maxLength100)}
                        component={FormControl}
                    />
                    <button type='submit' disabled={!valid || !values.message}>Add post</button>
                </form>
            )}
        />
    )
}

type PostMessageType = {
    onSubmit: (newPost: Record<string, any>) => void
}
export default PostMessageForm;
