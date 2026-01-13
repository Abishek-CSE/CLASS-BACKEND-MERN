import { FaPlay, FaStar, FaClock, FaCalendarAlt, FaTicketAlt, FaFire, FaHeart, FaShareAlt, FaImdb, FaVideo, FaUsers, FaAward, FaLanguage } from "react-icons/fa";
import { MdLocalFireDepartment, MdTheaters, MdHighQuality, MdSlowMotionVideo } from "react-icons/md";

const MovieDetails = () => {
  // Updated cast with actual actor images
  const cast = [
    { 
      name: "Alex Rivera", 
      character: "Kaito", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
    },
    { 
      name: "Lena Chen", 
      character: "Sakura", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" 
    },
    { 
      name: "Marcus Thorne", 
      character: "Ryuji", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w-400&h=400&fit=crop&crop=face" 
    },
    { 
      name: "Isabella Cruz", 
      character: "Miyuki", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" 
    },
    { 
      name: "David Park", 
      character: "Hiroshi", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
    },
  ];

  const crew = [
    { role: "Director", name: "Kenji Yamamoto" },
    { role: "Producer", name: "Maria Santos" },
    { role: "Music", name: "Hans Zimmer" },
    { role: "Cinematography", name: "Robert Richardson" },
  ];

  // Scene images from Unsplash (movie/cinema related)
  const scenes = [
    { 
      title: "Epic Battle", 
      type: "Action", 
      image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=800&h=400&fit=crop&crop=entropy" 
    },
    { 
      title: "Emotional Climax", 
      type: "Drama", 
      image: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?w=800&h=400&fit=crop&crop=entropy" 
    },
    { 
      title: "Visual Spectacle", 
      type: "Fantasy", 
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=400&fit=crop&crop=entropy" 
    },
    { 
      title: "Mystery Reveal", 
      type: "Thriller", 
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=400&fit=crop&crop=entropy" 
    },
  ];

  const awards = [
    { award: "Best Visual Effects", status: "Nominated", icon: MdTheaters },
    { award: "Best Original Score", status: "Won", icon: FaAward },
    { award: "Best Cinematography", status: "Won", icon: MdHighQuality },
    { award: "Best Director", status: "Nominated", icon: FaVideo },
  ];

  // Movie poster image
  const moviePoster = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=1200&fit=crop&crop=entropy";

  // Hero background image
  const heroBackground = "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1920&h=1080&fit=crop&crop=entropy";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
        </div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.2) 0%, transparent 55%),
                            radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.15) 0%, transparent 55%)`
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-8 flex items-end pb-16">
          <div className="w-full">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Movie Poster */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition duration-1000"></div>
                <div 
                  className="relative w-64 h-96 rounded-xl overflow-hidden border-2 border-red-500/30 shadow-2xl shadow-red-900/30 bg-cover bg-center"
                  style={{ backgroundImage: `url(${moviePoster})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8 relative z-10">
                      <FaFire className="text-6xl text-red-500 mx-auto mb-4 animate-pulse" />
                      <span className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                        SIRAI
                      </span>
                      <p className="text-gray-300 text-sm mt-2">The Legend Begins</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-800 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 flex items-center justify-center gap-2 font-semibold group">
                      <FaPlay className="group-hover:scale-110 transition-transform" />
                      Watch Trailer
                    </button>
                  </div>
                </div>
              </div>

              {/* Movie Info */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                    SIRAI
                  </h1>
                  <div className="px-4 py-1 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-sm font-semibold">
                    NOW SHOWING
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <span className="font-bold">4.8/5</span>
                    <span className="text-gray-400">(1.2M ratings)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-red-500" />
                    <span>2h 28m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-red-500" />
                    <span>2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTicketAlt className="text-red-500" />
                    <span>PG-13</span>
                  </div>
                </div>

                <div className="flex gap-4 mb-8">
                  <span className="px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full">Action</span>
                  <span className="px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full">Adventure</span>
                  <span className="px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full">Fantasy</span>
                  <span className="px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full">Drama</span>
                </div>

                <p className="text-lg text-gray-300 mb-8 max-w-3xl">
                  In a world where ancient legends awaken, a young warrior must embrace his destiny to save humanity 
                  from an impending darkness. SIRAI is an epic journey of courage, sacrifice, and the power of hope.
                </p>

                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 flex items-center gap-2 font-semibold hover:scale-105">
                    <FaTicketAlt />
                    Book Tickets
                  </button>
                  <button className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                    <FaHeart className="hover:text-red-500" />
                    Add to Watchlist
                  </button>
                  <button className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                    <FaShareAlt />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Synopsis & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Synopsis */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MdSlowMotionVideo className="text-red-500 text-2xl" />
                Synopsis
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  SIRAI follows the journey of Kaito, a reluctant hero who discovers he is the last descendant of an ancient 
                  lineage of warriors sworn to protect humanity from supernatural threats.
                </p>
                <p>
                  As dark forces gather to unleash an eternal night upon the world, Kaito must master ancient powers passed 
                  down through generations and unite with unlikely allies to prevent the impending apocalypse.
                </p>
                <p>
                  Through breathtaking visual effects, emotionally charged storytelling, and groundbreaking cinematography, 
                  SIRAI explores themes of destiny, sacrifice, and the enduring power of human connection.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 h-full">
              <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                {[
                  { icon: FaImdb, label: "IMDb Rating", value: "8.7/10", color: "text-yellow-500" },
                  { icon: FaUsers, label: "Box Office", value: "$450M", color: "text-green-500" },
                  { icon: FaLanguage, label: "Languages", value: "5", color: "text-blue-500" },
                  { icon: MdLocalFireDepartment, label: "Budget", value: "$200M", color: "text-red-500" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <item.icon className={`${item.color}`} />
                      <span className="text-gray-300">{item.label}</span>
                    </div>
                    <span className="font-bold">{item.value}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cast */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Cast</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cast.map((actor, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-3">
                  <div 
                    className="h-48 bg-cover bg-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${actor.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">{actor.name}</h4>
                  <p className="text-sm text-gray-400">{actor.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crew & Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Crew */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Production Crew</h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="space-y-4">
                {crew.map((person, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div>
                      <div className="font-bold">{person.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{person.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Awards & Nominations</h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      award.status === 'Won' 
                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-800' 
                        : 'bg-gradient-to-r from-gray-700 to-gray-900'
                    }`}>
                      <award.icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{award.award}</div>
                      <div className={`text-sm ${
                        award.status === 'Won' ? 'text-yellow-400' : 'text-gray-400'
                      }`}>
                        {award.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Scenes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Scenes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scenes.map((scene, index) => (
              <div key={index} className="group">
                <div 
                  className="h-48 rounded-xl mb-3 transition-transform duration-300 group-hover:scale-105 relative overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${scene.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaPlay className="text-3xl text-white bg-red-600/80 p-3 rounded-full" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <div className="font-bold text-white">{scene.title}</div>
                    <div className="text-sm text-gray-300">{scene.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1595769812725-4c6564f712c5?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=800&h=600&fit=crop"
            ].map((image, index) => (
              <div key={index} className="group">
                <div 
                  className="h-48 rounded-xl bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="h-full w-full bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-gradient-to-r from-red-900/20 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30">
          <h2 className="text-2xl font-bold mb-6">Technical Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">4K</div>
              <div className="text-gray-400">Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">7.1</div>
              <div className="text-gray-400">Dolby Atmos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">IMAX</div>
              <div className="text-gray-400">Enhanced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">3D</div>
              <div className="text-gray-400">Available</div>
            </div>
          </div>
        </div>

        {/* Video Trailer Preview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Official Trailer</h2>
          <div className="relative rounded-2xl overflow-hidden border border-gray-700/50">
            <div 
              className="h-64 md:h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1920&h=1080&fit=crop)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                  <FaPlay className="text-2xl ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold">Official Trailer</h3>
                <p className="text-gray-300">Watch the epic preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;