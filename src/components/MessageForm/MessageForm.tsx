import { Form, Field } from 'react-final-form'
import { FormValuesType } from "types/declarations";
import { composeValidators, maxLength, required } from "../common/validators";
import { FormControl } from "../common/FormsControls/FormsControls";

type MessageFormType = {
    onSubmit: (newMessage: FormValuesType) => void
}

const maxLength30 = maxLength(200)

function MessageForm(props: MessageFormType) {

    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field component={FormControl}
                           name='textarea'
                           placeholder='Enter your message'
                           validate={composeValidators(required, maxLength30)}
                    >
                    </Field>
                    <button type='submit'>Add message</button>
                </form>
            )}
        />
    );
}

export default MessageForm;
