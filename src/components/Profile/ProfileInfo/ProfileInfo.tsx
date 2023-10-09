import React, { ChangeEvent, Component, useState } from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import { PropsType } from "../Profile";
import { ProfileStatusWithHooks } from "components/Profile/ProfileStatusWithHooks";
import photo from '../../../assets/images/photoUser.png';
import { ProfileDate } from "components/Profile/ProfileDate";
import { ProfileDateForm } from "components/Profile/ProfileDateForm";

// class ProfileInfo extends Component<PropsType> {
export const ProfileInfo = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profileInfoContainer}>
            <div className={s.description}>
                <img src={props.profile.photos.large || photo} alt='' style={{width: '300px'}}/>

                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                {props.isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                {
                    editMode
                        ? <ProfileDateForm profile={props.profile}/>
                        : <ProfileDate profile={props.profile} isOwner={props.isOwner}
                                       goToEditMode={() => setEditMode(!editMode)}/>
                }
            </div>
        </div>
    );
}


