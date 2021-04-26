import React, { Component } from 'react'
import Student from './components/Student';
import Marks from './components/Marks'

class Mounting extends Component {

  constructor(props) {
    super(props);
    console.log('App -Constructor Called');
    console.log(props + "I am from constructor.");
    this.state = {
      roll: "101",
      name: 'Makin Ahmed'
    }

  }
  static getDerivedStateFromProps(props, state) {
    console.log("App- Get Derived State From Props");
    console.log(props, state);
  }

  componentDidMount() {
    console.log('Component is mounted');
  }
  render() {
    console.log('I am App.js => The Father of Student');
    return (
      <div>

        <Student name="Makin" />
        <Marks />
      </div>
    )
  }

}
export default Mounting;