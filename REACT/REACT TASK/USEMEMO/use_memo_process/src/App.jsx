import React, { useMemo, useState } from 'react'
import Fetch from './Fetch'

const App = () => {
  const [increment,setIncrement] =useState(0)
  const [toggle1,setToggle1]=useState(false)
  const heavyloop =()=>{
    console.log("Running Main Component");
    for(let i=0;i<=100;i++){
      console.log(i);
    }
  }
  const save =useMemo(()=>{
    heavyloop(increment)
  },[increment])
  const handleclick =()=>{
    setIncrement(increment+1)
  }
  return (
    <>
    <div>
      <div>
        <h1>Counter Increment {increment}</h1>
        <button onClick={handleclick} className='bg-black text-white p-2 m-2 rounded'>Increment</button>
        
      </div>
      <div>
        <h1>{toggle1?"Show":"hide"}</h1>
        <button onClick={()=>setToggle1(!toggle1)} className='bg-black text-white p-2 m-2 rounded flex'>Toggle the button</button>
      </div>
    </div>
    <Fetch/>
    </>
  )
}

export default App