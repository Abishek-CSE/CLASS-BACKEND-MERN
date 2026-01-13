import { useState } from 'react';
import { FaUser, FaLock, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  function handlechnage(e){
    e.preventDefault()
    navigate("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-700/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-700/30 rounded-full blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-red-700/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-md p-8 sm:p-10 mx-4">
        <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"></div>
        
        <div className="relative z-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black mb-2 tracking-tighter text-white">
              WELCOME <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">BACK</span>
            </h2>
            <p className="text-gray-400 text-sm">Enter your credentials to access the realm</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-400 transition-colors">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/30 border border-gray-700 focus:border-blue-500 rounded-lg px-4 py-3 pl-10 text-white outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(59,130,246,0.5)] placeholder-gray-600"
                  placeholder="name@example.com"
                />
                <FaUser className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-purple-400 transition-colors">Password</label>
              <div className="relative">
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/30 border border-gray-700 focus:border-purple-500 rounded-lg px-4 py-3 pl-10 text-white outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.5)] placeholder-gray-600"
                  placeholder="••••••••"
                />
                <FaLock className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-purple-500 transition-colors" />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-4 h-4 border border-gray-600 rounded bg-black/30 group-hover:border-blue-500 transition-colors relative">
                  <input type="checkbox" className="opacity-0 absolute inset-0 cursor-pointer" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Forgot Password?</a>
            </div>

            <button  onClick={handlechnage}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300"
            >
              SIGN IN
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-gray-500 font-mono">OR CONTINUE WITH</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <button className="flex items-center justify-center py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <FaGoogle className="text-red-500 group-hover:scale-110 transition-transform" />
            </button>
            <button className="flex items-center justify-center py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <FaTwitter className="text-blue-400 group-hover:scale-110 transition-transform" />
            </button>
            <button className="flex items-center justify-center py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <FaGithub className="text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          <p className="mt-8 text-center text-gray-500 text-sm">
            Don't have an account? <a href="#" className="text-blue-400 hover:text-blue-300 font-bold transition-colors">Create one</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;