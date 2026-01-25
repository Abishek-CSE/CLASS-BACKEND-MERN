import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="bg-black text-white flex justify-between items-center p-5">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">PREVIEW</h1>
      </div>
      <div className="flex gap-4 md:gap-8 lg:gap-10 text-lg md:text-xl lg:text-2xl">
        <Link to="/" className="hover:opacity-80">REGISTER</Link>
        <Link to="/login" className="hover:opacity-80">LOGIN</Link>
        <Link to="/dashboard" className="hover:opacity-80">DASHBOARD</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar