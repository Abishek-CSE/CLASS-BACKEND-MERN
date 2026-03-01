import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const[form,setForm]=useState({name:'',email:'',password:''})
  const handlechnage=(e)=>{
    setForm({...form,[e.target.name]: e.target.value})
  }
  const handlesubmit = async(e)=>{
    e.preventDefault()
    try {
      const responce = await axios.post("http://localhost:5000/api/pass/hashpass",form)
      console.log(responce.data);
      alert("User Register Successfully")
      
    } catch (error) {
      console.log("Frontend Error",error);
      
    }
  }
  return (
    <>
    <form onSubmit={handlesubmit}>
      <input type="text"placeholder='Enter your Name' name='name'onChange={handlechnage} />
      <input type="email"placeholder='Enter your Email' name='email'onChange={handlechnage} />
      <input type="passsword"placeholder='Enter your Password' name='password'onChange={handlechnage} />
      <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default App