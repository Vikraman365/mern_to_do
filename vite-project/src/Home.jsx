/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Create from './Create'
// type rfce and press tab to get this snippet 
// this snippet is  called react functional component snippet
// rfce full form is react functional component export

function Home() {
    const [todos,setTodos]=useState([]);
    // this line is used  to create a state variable called todos
    // and a function called setTodos to update the state variable
  return (
    <div className="home">
      <h2>To Do List</h2>
      <Create />
      {
        todos.length===0
        ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo => (
            <div>
                {todo}
            </div>
        ))
      }
    </div>
  )
}

export default Home
