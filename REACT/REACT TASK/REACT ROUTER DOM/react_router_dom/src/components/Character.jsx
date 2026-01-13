import { FaBolt, FaBrain, FaMagic, FaShieldAlt, FaUserNinja } from "react-icons/fa";

const Character = () => {
  const characters = [
    {
      name: "Kaito",
      role: "The Reluctant Hero",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
      element: "Fire",
      stats: { strength: 85, speed: 90, magic: 70 },
      desc: "Last descendant of the Flame Weavers. Wields the Phoenix Blade.",
      color: "from-red-500 to-orange-500",
      icon: FaBolt
    },
    {
      name: "Sakura",
      role: "Mystic Sorceress",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=800&fit=crop",
      element: "Spirit",
      stats: { strength: 60, speed: 75, magic: 95 },
      desc: "Guardian of the Spirit Grove. Master of ancient healing arts.",
      color: "from-pink-500 to-purple-500",
      icon: FaMagic
    },
    {
      name: "Ryuji",
      role: "Shadow Assassin",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      element: "Shadow",
      stats: { strength: 75, speed: 98, magic: 65 },
      desc: "A silent blade in the night. Seeking redemption for his clan.",
      color: "from-indigo-500 to-blue-500",
      icon: FaUserNinja
    },
    {
      name: "Miyuki",
      role: "Tech Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop",
      element: "Tech",
      stats: { strength: 55, speed: 80, magic: 90 },
      desc: "Cyber-enhanced tactician. Interfaces with the city's grid.",
      color: "from-cyan-500 to-teal-500",
      icon: FaBrain
    },
    {
      name: "Hiroshi",
      role: "Iron Vanguard",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop",
      element: "Metal",
      stats: { strength: 95, speed: 50, magic: 60 },
      desc: "The unmovable object. Defends the weak with his life.",
      color: "from-gray-500 to-slate-500",
      icon: FaShieldAlt
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-black text-center mb-16 tracking-tighter">
          <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
            LEGENDS REVEALED
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((char, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Image Container */}
              <div className="h-96 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                <img 
                  src={char.image} 
                  alt={char.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Floating Icon */}
                <div className={`absolute top-4 right-4 bg-gradient-to-br ${char.color} p-3 rounded-xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-300`}>
                  <char.icon className="text-2xl text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-20 -mt-12 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                      {char.name}
                    </h2>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${char.color} bg-clip-text text-transparent`}>
                      {char.role}
                    </p>
                  </div>
                  <div className="text-right">
                     <span className="block text-xs text-gray-400">Element</span>
                     <span className="font-bold">{char.element}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {char.desc}
                </p>

                {/* Bars */}
                <div className="space-y-3">
                  {Object.entries(char.stats).map(([stat, value]) => (
                    <div key={stat} className="flex items-center gap-4">
                      <span className="w-16 text-xs uppercase text-gray-500 font-bold">{stat}</span>
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${char.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-mono text-gray-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Character;