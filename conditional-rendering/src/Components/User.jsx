import React, { Component } from 'react'
import Guest from './Guest'
import Register from './Register'

export default class User extends Component {
    render() {
        const isRegistered = this.props.user
        return (
            <div>
                {isRegistered && <Register/>}
               
            </div>
        )

    }
}





