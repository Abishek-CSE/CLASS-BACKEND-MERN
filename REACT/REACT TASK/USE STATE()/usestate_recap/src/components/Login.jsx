import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [datas,setDatas]=useState({Name:"",Email:"",Password:""})
  const navigate =useNavigate()
  const handlechnage=(e)=>{
    const {name,value} =e.target
    setDatas({...datas,[name]:value}) 
  }
  const handlesubmit =(e)=>{
    e.preventDefault()
    const takedata =JSON.parse(localStorage.getItem("FormData"))
    if(takedata.Email === datas.Email && takedata.Password === datas.Password ){
      navigate("/dashboard")
       alert("Login Successfully")
    }
    else{
      alert("Invalid Email and PAssword")
    }
  }
  const handleClick =()=>{
    alert("Move to Regsiter page")
    navigate("/")
  }
  
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-violet-400 to-purple-600 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Login Form</h1>
        <p className="text-gray-600 text-center mb-8">Welcome back! Please login to your account</p>
        
        <form onSubmit={handlesubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input 
              onChange={handlechnage}
              type="email" 
              name="Email" 
              placeholder="Enter Your Email" 
              value={datas.Email}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition duration-200"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Password</label>
            <input 
              onChange={handlechnage} 
              type="password" 
              name="Password" 
              placeholder="Password"
              value={datas.Password}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition duration-200"
              required
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-bold p-3 rounded-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Login
          </button>
          
          <div className="text-center mt-4">
            <p 
              onClick={handleClick}
              className="bg-black hover:bg-gray-800 text-white font-medium p-3 rounded-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-block"
            >
              Register Now
            </p>
          </div>
        </form>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            Don't have an account?{" "}
            <button 
              onClick={handleClick}
              className="text-violet-600 hover:text-violet-800 font-medium"
            >
              Create one here
            </button>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login