import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const datashow = JSON.parse(localStorage.getItem("FormData"))
  const handleclick = (e) => {
    e.preventDefault()
    navigate("/login")
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Dashboard</h1>
          
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Your Email</p>
              <p className="text-lg font-semibold text-gray-800">{datashow.Email}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Your Password</p>
              <p className="text-lg font-semibold text-gray-800">{datashow.Password}</p>
            </div>
          </div>
          
          <button 
            onClick={handleclick}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default Dashboard