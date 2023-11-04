import { Form, Field } from 'react-final-form'
import { composeValidators, maxLength } from "utils/validators";
import { FormControl } from "../common/FormsControls/FormsControls";
import s from './MessageForm.module.css'

const maxLength30 = maxLength(200)
function MessageForm(props: MessageFormType) {
    return (
        <Form
            onSubmit={(values, form) => {
                props.onSubmit(values);
                setTimeout(form.reset);
            }}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} className={s.messageForm}>
                    <Field component={FormControl}
                           name='textarea'
                           placeholder='Enter your message'
                           validate={composeValidators(maxLength30)}
                    >
                    </Field>
                    <button type='submit'>Add message</button>
                </form>
            )}
        />
    );
}

type MessageFormType = {
    onSubmit: (newMessage: Record<string, any>) => void
}

export default MessageForm;
