


import React from 'react'

const App = (props) => {

  return (
    <div>
      <h4>My Social Links</h4>
      {console.log(props.links)}
      <ul>
        {props.links.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )


}
export default App;


