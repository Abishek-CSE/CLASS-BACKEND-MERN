import { useReducer, useState } from "react"
import Formadata from "./components/Formadata"



const intial =0
const reducerfun =(state,action)=>{
if(action.type === 'increment'){
  return state +1
}
if(action.type === "decrement"){
   return state -1
}



}

const App = () => {
  // const [count,setCount]=useState(0)
  // const increment =()=>{
  //   setCount(count+1)
  // }
  // const decrement =()=>{
  //   setCount(count -1)
  // }

  const[count,dispatch]=useReducer(reducerfun,intial)
  return (
    <>
    <h1>{count}</h1>
    <button className="bg-black text-white p-2 m-2" onClick={()=>dispatch({type : 'increment'})}>Increment</button>
    <button className="bg-black text-white p-2" onClick={()=>dispatch({type: 'decrement'})}>Decrement</button>
    <Formadata/>
    </>
  )
}

export default App