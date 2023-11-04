import React, { ChangeEvent, useState } from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import { PropsType } from "../Profile";
import { ProfileStatusWithHooks } from "components/Profile/ProfileStatusWithHooks";
import photo from 'assets/images/photoUser.png';
import { ProfileDate } from "components/Profile/ProfileDate";
import { ProfileDateForm } from "components/Profile/ProfileDateForm";
import { ProfileResponseType } from "store/profileReducer";

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

    const handleOnSubmit = async (formData: ProfileResponseType) => {

        const error = await props.saveProfile(formData);

        if (error) {
            return error
        }
        setEditMode(false)
    }

    return (
        <div className={s.description}>

            <img src={props.profile.photos.large || photo} alt='My photo'/>

            <div className={s.online}></div>

            <ProfileStatusWithHooks status={props.status}
                                    updateUserStatus={props.updateUserStatus}
                                    statusError={props.statusError}
            />
            {props.isOwner &&
                <button>
                    <input type={'file'} id="fileInput" style={{ display: 'none' }} onChange={mainPhotoSelected}/>
                    <label htmlFor="fileInput" >
                        Edit Photo
                    </label>
                </button>
            }
            {
                editMode
                    ? <ProfileDateForm initialValues={props.profile} onSubmit={handleOnSubmit}
                                       profile={props.profile}
                    />
                    : <ProfileDate profile={props.profile} isOwner={props.isOwner}
                                   goToEditMode={() => setEditMode(true)}
                    />
            }
        </div>
    );
}


