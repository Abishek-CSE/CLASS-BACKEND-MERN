import UserData from "./UserData"
import { useState } from "react"
const AdminData = (props) => {
    const[value,setvalue]=useState(0)
    const booknow =()=>{
        setvalue(value +10)
    }
  return (
    <>
    <div>
        <h1>{props.counting}</h1>
        <button onClick={props.shopnow}>Shop Now</button>
    </div>
    <UserData value={value} booknow ={booknow}/>
    </>
  )
}

export default AdminData