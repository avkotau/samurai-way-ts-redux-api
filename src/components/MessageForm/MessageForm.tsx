import { Form, Field } from 'react-final-form'
import { composeValidators, maxLength, required } from "utils/validators";
import { FormControl } from "../common/FormsControls/FormsControls";
import { FormValuesType } from "types/commonTypes";

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

type MessageFormType = {
    onSubmit: (newMessage: FormValuesType) => void
}

export default MessageForm;
