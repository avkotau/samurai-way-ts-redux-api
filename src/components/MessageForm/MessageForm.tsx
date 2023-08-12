import { Form, Field } from 'react-final-form'
import { FormValuesType } from "../../types/declarations";

type MessageFormType = {
    onSubmit: (newMessage: FormValuesType) => void
}
function MessageForm(props: MessageFormType) {

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
                    <button type='submit'>Add message</button>
                </form>
            )}
        />
    );
}

export default MessageForm;
