import { useCallback, useState } from "react"
import Child from "./Child"

const App = () => {
  const [increment,setIncrement]=useState(0)
  const [theme,setTheme]=useState("light")
  const handleclick =useCallback(()=>{
    setIncrement((prev)=>prev +1)
  },[])
  const toggle =()=>{
    setTheme((prev)=>prev === "light"?"dark":"light")
  }
  return (
    <>
    <div>
      <h1>{increment}</h1>
      <button onClick={handleclick} className="bg-black text-white p-2 m-2 rounded">INCREMENT</button>
      <h1>{theme}</h1>
      <button onClick={toggle} className="bg-black text-white p-2 m-2 rounded">TOGGLLE</button>
    </div>
    <Child onincrement ={handleclick}/>
    </>
  )
}

export default App