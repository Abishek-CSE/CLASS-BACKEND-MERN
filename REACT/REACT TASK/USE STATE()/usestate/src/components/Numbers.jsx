import { useState } from "react"

const Numbers = () => {
    const [numbers,setNumbers] =useState(0)
    const numberhandling =()=>{
        setNumbers(numbers -1)
    }
    const numberhandling1 =()=>{
        setNumbers(numbers +1)
    }
  return (
    <>
    <p>{numbers}</p>
    <p>{numbers >0?"Positive":numbers<0?"Negative":"Zero"}</p>
    <button onClick={numberhandling} className='bg-black text-white p-3 rounded'>decrement </button>
    <button onClick={numberhandling1} className='bg-black text-white p-3 rounded'>increment</button>
    </>
  )
}

export default Numbers