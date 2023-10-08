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
                this.props.savePhoto(e.target.files[0])
            }
        }

        const Contact: React.FC<ContactProps> = ({contactTitle, contactValue}) => {
            return <li>{contactTitle}: {contactValue}</li>
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

                        <dt>About me:</dt>
                        <dd>{this.props.profile.aboutMe}</dd>

                        <dt>Looking for a job:</dt>
                        <dd>{this.props.profile.lookingForAJob ? "Yes" : "No"}</dd>

                        <dt>Description:</dt>
                        <dd>{this.props.profile.lookingForAJobDescription}</dd>
                    </dl>
                    <h3>Contact:</h3>
                    <ul>
                        {Object.keys(this.props.profile.contacts).map((c, i) => {
                            return <Contact key={i} contactTitle={c}
                                            contactValue={this.props.profile.contacts[c] !== null ? this.props.profile.contacts[c] : '-'}/>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;

type ContactProps = {
    contactTitle: string;
    contactValue: string;
};
