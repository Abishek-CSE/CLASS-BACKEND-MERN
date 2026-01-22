import React from 'react'
import {useState} from 'react'
const Button = ({label}) => {
    const [increment,setIncrement]=useState(0)
    const JanaNayagan =()=>{
        setIncrement(increment +1)
    }
  return (
    <>
    <p>{increment}</p>
    <button onClick={JanaNayagan}>{label} </button>
    </>
  )
}

export default Button