/* eslint-disable react/jsx-key */
import React, { useState,useEffect } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill,BsFillCheckCircleFill,BsFillTrashFill } from "react-icons/bs";
// type rfce and press tab to get this snippet 
// this snippet is  called react functional component snippet
// rfce full form is react functional component export

function Home() {
    const [todos,setTodos]=useState([]);
    // this line is used  to create a state variable called todos
    // and a function called setTodos to update the state variable

    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result=>setTodos(result.data))
        .catch(err=>console.log(err))
    }
    ,[])

    const  handleEdit = (id)=>{
      axios.put('http://localhost:3001/update/'+id)
      .then(result=>{location.reload()})
      .catch(err=>console.log(err))
    }



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
            <div className='task'>
              <div className='checkbox' onClick={()=> handleEdit(todo._id)}>
              {todo.done?
              <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                : <BsCircleFill className='icon'/>
            }
             
              </div>
                
             <p className={todo.done? "line_through":""}>
               {todo.task} 
              </p>   
            
            <div>
              <span><BsFillTrashFill className='icon'/></span>
            </div>
            </div>
        ))
      }
    </div>
  )
}

export default Home
