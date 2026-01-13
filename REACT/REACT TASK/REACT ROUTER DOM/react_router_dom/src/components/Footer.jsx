import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="relative group inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <h1 className="relative text-3xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                  SIRΛI
                </span>
              </h1>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Experience the cinematic universe like never before. 
              Immerse yourself in legendary storytelling and breathtaking visuals.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500 transition-all duration-300 group"
                >
                  <Icon className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">EXPLORE</h3>
            <ul className="space-y-4">
              {[
                { name: "Movie Details", path: "/" },
                { name: "Character", path: "/character" },
                { name: "Book Tickets", path: "/booknow" },
                { name: "Ratings", path: "/rating" }
              ].map((link) => (
                <li key={link.name}>
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `text-sm font-medium transition-colors duration-300 hover:text-red-500 flex items-center gap-2
                      ${isActive ? 'text-red-500' : 'text-gray-400'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">STAY UPDATED</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get exclusive updates and early access to tickets.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-gray-600"
                />
              </div>
              <button 
                className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-white font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg shadow-red-900/20"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2024 SIRAI Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>for Cinema Lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
