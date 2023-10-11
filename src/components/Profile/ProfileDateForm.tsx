import React from 'react';
import { FormControl } from "components/common/FormsControls/FormsControls";
import { Field, Form } from "react-final-form";
import { ProfileResponseType } from "store/profileReducer";

type Props = {
    profile: ProfileResponseType
    onSubmit: (formData: ProfileResponseType) => void
}

export const ProfileDateForm = (props: Props) => {

    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>

                    {<button>save</button>}
                    <dl>
                        <dt>Full name:</dt>
                        <dd>{<Field type='text' name='fullName' placeholder='Full Name' component={FormControl}/>}</dd>

                        <dt>Looking for a job:</dt>
                        <dd>{<Field type='checkbox' name='lookingForAJob' placeholder='Looking for a job' component={FormControl}/>}</dd>

                        <dt>My professional skills:</dt>
                        <dd>{<Field type='textarea' name='lookingForAJobDescription' placeholder='My professional skills' component={FormControl}/>}</dd>

                        <dt>About me:</dt>
                        <dd>{<Field type='textarea' name='aboutMe' placeholder='About me' component={FormControl}/>}</dd>

                    </dl>
                    <h3>Contact:</h3>
                    <ul>
                        {/*{Object.keys(props.profile.contacts).map((c, i) => {*/}
                        {/*    const key = c as keyof typeof props.profile.contacts;*/}
                        {/*    return <Contact key={i} contactTitle={c}*/}
                        {/*                    contactValue={props.profile.contacts[key] || '-'}/>*/}
                        {/*})}*/}
                    </ul>
                </form>
            )}
        />
    )
}
