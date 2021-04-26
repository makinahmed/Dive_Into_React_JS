import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        console.log('I am Student => The Father of Marks');

        return (
            <div>
                <h2>Hello {this.props.name}</h2>
            </div>
        )
    }
}
