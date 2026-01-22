import { useState } from "react"


const Button = ({label,label1}) => {
    const [data,setData] =useState(0)
    const countnumber =()=>{
        setData(data +1)
    }
    const decreaseNumber=()=>{
        setData(data -1)
    }
  return (
    <>
    <p>{data}</p>
    <button  onClick={countnumber}className="bg-black text-white p-2 rounded">{label}</button>
    <button  onClick={decreaseNumber}className="bg-black text-white p-2 rounded">{label1}</button>
    </>
  )
}

export default Button