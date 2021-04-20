import React, { Component } from 'react'

export default class guest extends Component {
    render() {
        return (
            <div>
                <h2>Welcome To Our Website</h2>
                <label htmlFor="text">Type Your Name: </label>
                <br/><br/>
                <input type="text" name="youtext" id="text" placeholder="Makin" /><br/><br/>
                <label htmlFor="mail">Type Your Mail: </label><br/><br/>
                <input type="text" name="yourmail" id="mail" placeholder="example@gmail.com" /><br/><br/>
                <label htmlFor="number">Type Your Mobile No.</label><br/><br/>
                <input type="number" name="mobile" id="number" /><br/><br/>
                <button type="submit">Submit</button>


            </div>
        )
    }
}
