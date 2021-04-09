import React from 'react';
import classes from '../index.module.css';


class Clock extends React.Component {


    state = {
        date: new Date(),
        name: '',
        locale: 'bn-BD'
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }

    clickMeHandeler = () => {
        console.log('I am a button!');
    }

    changeState = event => {
        this.setState({ name: event.target.value })
    }

    printName = event => console.log(event.target.value);

    handleFocus = event => {
        console.log('I am focus event');
    }

    handleBlue = event => {
        if (!this.state.name) {
            alert('Please enter your Name')
        } else {
            console.log('Welcome To Blur Event');
        }
    }

    handleClick = () => {
        this.setState({
            locale: 'en-US'
        })
    }


    render() {
        const { date, locale } = this.state
        return (
            <div>
                <h1 className="heading">
                    <span>{this.state.date.toLocaleTimeString(locale)}</span>
                </h1>

                <button type="submit" onClick={this.handleClick}>click here</button>

                <button className={classes.btn} onClick={this.clickMeHandeler} type="submit">Click Me!</button>

                <button onClick={this.clickMeHandeler} className={classes.btn} type="submit">haha</button>
                <br />
                <label htmlFor="myId">Enter Text: </label>
                <br />
                <br />
                <input
                    value={this.state.name} //initial value
                    onChange={this.changeState}  //updating the value by updating state
                    onBlur={this.handleBlue}
                    onFocus={this.handleFocus}
                    type="text" name="myText" id="myId" placeholder="Enter Some Text.."
                />

                {this.state.name && <h3>Welcome, {this.state.name}</h3>}
            </div>
        )
    }
}

export default Clock;
