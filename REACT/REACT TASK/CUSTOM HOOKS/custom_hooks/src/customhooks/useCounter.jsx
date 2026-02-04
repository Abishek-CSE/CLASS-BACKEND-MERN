import { useEffect, useState } from "react"

const useCounter = () => {
    const [inc,setInc]=useState(0)
    const [toggle1,settoggle ]=useState(false)
    const [product,setProduct]=useState([])
    const increment =()=>{
        setInc(inc +1)
    }
    const decrement =()=>{
        setInc(inc -1)
    }
    const toggle =()=>{
        settoggle(!toggle1)

    }
    useEffect(()=>{
        const fetchdata = async()=>{
            const data = await fetch("https://dummyjson.com/products")
            const changedata =await data.json()
            setProduct(changedata)
            
        }
    },[])
  return {increment,decrement,inc,toggle,toggle1,product}
}

export default useCounter