import { useState } from "react"
import AdminData from "./AdminData"

const Adminpanel = () => {
    const [counting,setCountiing]=useState(0)
    
    const shopnow =()=>{
        setCountiing(counting + 5)
    }
  return (
    <>
    <div>
        Main Page
    </div>
    <AdminData counting = {counting}shopnow={shopnow}/>
    </>
  )
}

export default Adminpanel