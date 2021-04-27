import React, { Component } from 'react'

export default class Input extends Component {

    state = {
        skills: []
    }

    handleChange = e => {
        if(e.target.value === 'checked') {

        }
    }
    render() {
        return (
            <div>
                <h2>Check you the programming languages tha you know: </h2>
                <input onChange={this.handleChange} type="checkbox" name="skill" value="Javascript" />JavaScript
                <br />
                <input onChange={this.handleChange} checked={this.state.skills} type="checkbox" name="skill" value="Java" />Java
                <br />

                <input onChange={this.handleChange} type="checkbox" name="skill" value="c" />C
                <br />

                <input onChange={this.handleChange} type="checkbox" name="skill" value="Dart" />Dart
                <br />

                <input onChange={this.handleChange} type="checkbox" name="skill" value="Python" />Python
                <br />

                <input onChange={this.handleChange} type="checkbox" name="skill" value="go" />GO
                <br />

                <input onChange={this.handleChange} type="checkbox" name="skill" value="Ruby" />Ruby
                <br />

            </div>
        )
    }
}
