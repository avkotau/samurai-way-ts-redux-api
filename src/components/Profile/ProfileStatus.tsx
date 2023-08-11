import React, { ChangeEvent, Component } from 'react';

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<typeof this.state>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        
        return (
            this.state.editMode
                ? <div>
                    <input style={{padding: 10}} value={this.state.status || ''} autoFocus={true}
                           onBlur={this.deactivateEditMode} onChange={this.changeStatus}/>
                </div>
                : <div onDoubleClick={this.activateEditMode}>{this.props.status || 'empty status'}</div>
        )

    }
}
