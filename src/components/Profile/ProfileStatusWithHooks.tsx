import React, { ChangeEvent, useEffect, useState } from 'react';
import s from 'components/Profile/ProfileStatusWithHooks.module.css'

export const ProfileStatusWithHooks = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {

        setStatus(e.currentTarget.value)
    }
    return (
        editMode
            ? <div>
                <input style={{padding: 10}}
                       value={status}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={changeStatus}
                />
            </div>
            : <>
                <div onDoubleClick={activateEditMode}
                     className={s.statusText}>
                    {status ? status.trim() : 'empty status'}
                </div>
                <div className={s.error}>{props.statusError || ''}</div>
            </>
    )
}

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
    statusError?: string
}
