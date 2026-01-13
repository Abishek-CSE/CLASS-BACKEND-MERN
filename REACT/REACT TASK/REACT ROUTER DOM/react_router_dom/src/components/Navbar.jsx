import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 px-8 py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Neon Logo */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <h1 className="relative text-3xl font-black tracking-tighter">
            <NavLink to="/">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                SIRΛI
              </span>
            </NavLink>
          </h1>
        </div>

        <div className="flex items-center gap-8">
          <NavLink 
            to="/"
            className={({isActive}) => 
              `text-gray-300 hover:text-red-700 transition-all duration-300 relative
              hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]
              ${isActive ? "text-red-700 font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" : ""}`
            }
          >
            Movie Details
          </NavLink>
          <NavLink 
            to="/booknow"
            className={({isActive}) => 
              `text-gray-300 hover:text-red-700 transition-all duration-300 relative
              hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]
              ${isActive ? "text-red-700 font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" : ""}`
            }
          >
            Book Now
          </NavLink>
          <NavLink 
            to="/rating"
            className={({isActive}) => 
              `text-gray-300 hover:text-red-700 transition-all duration-300 relative
              hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]
              ${isActive ? "text-red-700 font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" : ""}`
            }
          >
            Rating
          </NavLink>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-30 hover:opacity-50 transition duration-500"></div>
            <NavLink 
              to="/login"
              className={({isActive}) => 
                `relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 
                text-white font-semibold rounded-full
                hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                transition-all duration-300
                ${isActive ? "shadow-[0_0_20px_rgba(59,130,246,0.7)] ring-2 ring-blue-400" : ""}`
              }
            >
              LOGIN
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;