import { useState } from 'react'

const Even = () => {
    const [even,setEven]=useState(1)
    const habndleEven =()=>{
        setEven(even +1)
    }
  return (
    <>
    <p>{even}</p>
    <p>{even%2==0?"Even":"Odd"}</p>
    <button onClick={habndleEven} className='bg-black text-white p-3 rounded'>Click Me Even or Odd</button>
    </>
  )
}

export default Even