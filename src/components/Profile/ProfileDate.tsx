import React from 'react';
import { ProfileResponseType } from "store/profileReducer";

type Props = {
    profile: ProfileResponseType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileDate: React.FC<any> = (props: Props) => {
    const Contact = ({contactTitle, contactValue}: ContactProps) => {
        return <li>{contactTitle}: {contactValue}</li>
    }
    return (
        <>
            {props.isOwner && <button onClick={props.goToEditMode}>edit</button>}
            <dl>
                <dt>Full name:</dt>
                <dd>{props.profile.fullName}</dd>

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
        </>
    );
}

type ContactProps = {
    contactTitle: string;
    contactValue: string;
};
