import Counting from "./Components/Counting"
import Default from "./Components/Default"
import UserDeatils from "./Components/UserDeatils"
import { useState } from "react"
import Adminpanel from "./MultipleProps/Adminpanel"

const App=()=>{
  const [count,setCount]=useState(0)
    function increment(){
        setCount(count +1)
    }
    function decrement(){
        setCount(count-1)
    }
  return(
    <>
    <UserDeatils name="Abishek" age={22} city="Chennai"/>
    <Default name="STR" movie ="Arasan"/>
    <Counting count ={count} increment ={increment} decrement={decrement}/>
    <Adminpanel/>
    </>
  )
}
export default App