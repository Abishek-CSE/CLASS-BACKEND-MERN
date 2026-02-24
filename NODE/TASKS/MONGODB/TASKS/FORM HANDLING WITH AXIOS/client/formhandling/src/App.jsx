import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const[form,setForm]=useState({name:'',department:''})
  const handlechnage=(e)=>{
    setForm({...form,[e.target.name]: e.target.value})
  }
  const handlesubmit = async(e)=>{
    e.preventDefault()
    try {
      const responce = await axios.post("http://localhost:5000/api/formdata/getdata",form)
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
      <input type="text"placeholder='Enter your Department' name='department'onChange={handlechnage} />
      <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default App