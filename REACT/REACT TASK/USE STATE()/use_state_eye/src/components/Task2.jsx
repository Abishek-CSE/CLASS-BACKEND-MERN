import React, { useState } from 'react'

const Task2 = () => {
    const [user,setUser] =useState({Name:"",City:""})
    const handleclick =()=>{
        setUser({...user,Name:"AK"})
    }
  return (
    <>
    <div>
        <h1>{user.Name}</h1>
        <h1>{user.City}</h1>
        <button onClick={handleclick}>Click Me</button>
    </div>
    </>
  )
}

export default Task2