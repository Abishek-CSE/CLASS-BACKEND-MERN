import { useState } from "react"

const On = () => {
    const [on,setOn]=useState(false)
    const onandoff =()=>{
        setOn(!on)
    }
  return (
    <>
    <p>{on ?"ON":"OFF"}</p>
    <button onClick={onandoff} className='bg-black text-white p-3 rounded'> ON and OFF</button>
    </>
  )
}

export default On