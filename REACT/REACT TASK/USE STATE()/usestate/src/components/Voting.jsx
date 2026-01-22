import { useState } from "react"

const Voting = () => {
    const [voting,setVoting]=useState('')
    const clikeme =(e)=>{
        setVoting(e.target.value)
    }
  return (
    <>
    <input onChange={clikeme} />
    <p>{voting >=18 ?"Eligible":"Not-Eligible"}</p>
    </>
  )
}

export default Voting