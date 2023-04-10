import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={s.profileInfoContainer}>
            <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                alt=""/>
            <div className={s.description}>
                ava + descr
            </div>
        </div>
    );
};

export default ProfileInfo;
