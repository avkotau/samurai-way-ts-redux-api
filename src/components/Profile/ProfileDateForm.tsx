import React from 'react';
import { FormControl } from "components/common/FormsControls/FormsControls";

export const ProfileDateForm = (props) => {
    return (
        <form>
            {<button onClick={props.goToEditMode}>save</button>}
            <dl>
                <dt>Full name:</dt>
                <dd>{'sc'}</dd>

                <dt>About me:</dt>
                <dd>{props.profile.aboutMe}</dd>

                <dt>Looking for a job:</dt>
                <dd>{props.profile.lookingForAJob ? "Yes" : "No"}</dd>

                <dt>Description:</dt>
                <dd>{props.profile.lookingForAJobDescription}</dd>
            </dl>
            <h3>Contact:</h3>
            <ul>
                {Object.keys(props.profile.contacts).map((c, i) => {
                    const key = c as keyof typeof props.profile.contacts;
                    return <Contact key={i} contactTitle={c}
                                    contactValue={props.profile.contacts[key] || '-'}/>
                })}
            </ul>
        </form>
    );
};
