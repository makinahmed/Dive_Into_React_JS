import React, { Component } from 'react'

class Event extends Component {

    constructor(props) {
        super(props)
        console.log(props.name)
        console.log(props)
    }


    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}
export default Event