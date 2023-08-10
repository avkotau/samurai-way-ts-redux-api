import React, { Component } from 'react';

// class ProfileStatus extends Component = (props) => {
//     return {}
// }

export class ProfileStatus extends Component<any, any> {
    state = {
        editMode: false
    }

    handleBlur = () => {
        this.setState({
            editMode: false
        })
    }

    handleInput = () => {
        this.setState({
            editMode: true
        })
    }

    render() {

        return (
            this.state.editMode
                ? <div>
                    <input value={'hello my friend'} autoFocus={true} onBlur={this.handleBlur}/>
                </div>
                : <div onDoubleClick={this.handleInput}>{'hello my friend'}</div>
        )

    }
}
