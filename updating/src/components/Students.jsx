import React, { Component } from 'react'
import Marks from './Marks'

export default class Students extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roll: 1115,
            name: 'Makin'
        }

    }


    // static getDerivedStateFromProps(props, state) {
    //     console.log(props + 'I am from Props');
    //     console.log(state + 'I am from State');
    //     console.log(this.roll);

    // }

    handleClick = () => {
        console.log('Button Clicked');

        this.setState({ roll: this.state.roll + 2 })
    }

    render() {
        console.log('Student Renderedd!');
        return (
            <div>
                <Marks roll={this.state.roll} />
                <button type="submit" onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
}
