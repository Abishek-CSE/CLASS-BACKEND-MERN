import { Link } from "react-router-dom"
import AppRoute from './Routing/AppRoute'
const App = () => {
  return (
    <>
    <Navbar/>
    <AppRoute/>
    </>
  )
}

export default App


export const Navbar = () => {
  return (
    <div className="bg-gray-100 px-8 py-4 flex items-center justify-between">
      
      {/* Left Links */}
      <div className="flex gap-6">
        <Link to="/" className="text-gray-600 hover:text-black">
          Home
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-black">
          About
        </Link>
      </div>

      {/* Center Title */}
      <h1 className="text-xl font-bold tracking-wide text-gray-800">
        HEY! SINAMIKA
      </h1>

      {/* Right Button */}
      <Link
        to="/book"
        className="border border-gray-400 px-4 py-2 rounded hover:bg-black hover:text-white"
      >
        Book
      </Link>
    </div>
  )
}