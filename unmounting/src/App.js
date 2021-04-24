
import React, { Component } from 'react'

export default class App extends Component {

  componentDidMount() {
    console.log('App Mounted');
  }

  componentWillUnmount() {
    console.log("App Unmounted");
  }
  render() {
    console.log('App Rendered');
    return (
      <div>
        <h3>Hello I am App.js </h3>
        
      </div>
    )
  }
}







// function App() {
//   return (
//     <div>
//       <Student />
//       <Marks />
//     </div>
//   );
// }

// export default App;
