import React, { ChangeEvent, Component } from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import { PropsType } from "../Profile";
import { ProfileStatusWithHooks } from "components/Profile/ProfileStatusWithHooks";
import photo from '../../../assets/images/photoUser.png';

class ProfileInfo extends Component<PropsType> {
    render() {
        if (!this.props.profile) {
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
                    <img src={this.props.profile.photos.large || photo} alt='' style={{width: '300px'}}/>

                    <ProfileStatusWithHooks status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
                    {this.props.isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                    <dl>
                        <dt>Full name:</dt>
                        <dd>{this.props.profile.fullName}</dd>

                        <dt>about me:</dt>
                        <dd>{this.props.profile.aboutMe}</dd>

                        <dt>Looking for a job:</dt>
                        <dd>{this.props.profile.lookingForAJob ? "Yes" : "No"}</dd>

                        <dt>Description:</dt>
                        <dd>{this.props.profile.lookingForAJobDescription}</dd>
                    </dl>
                    <h3>Contact:</h3>
                    <ul>
                        <li>facebook: {this.props.profile.contacts.facebook}</li>
                        <li>website: {this.props.profile.contacts.website}</li>
                        <li>vk: {this.props.profile.contacts.vk}</li>
                        <li>twitter: {this.props.profile.contacts.twitter}</li>
                        <li>instagram: {this.props.profile.contacts.instagram}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;
