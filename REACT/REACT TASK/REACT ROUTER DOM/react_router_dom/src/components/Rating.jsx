import { FaStar, FaFire, FaHeart, FaRegStar, FaPlay, FaQuoteLeft } from "react-icons/fa";

const Rating = () => {
  const ratings = [
    { source: "IMDb", rating: 8.7, color: "from-yellow-400 to-yellow-600" },
    { source: "Rotten Tomatoes", rating: 92, color: "from-red-500 to-red-700" },
    { source: "Metacritic", rating: 88, color: "from-blue-500 to-blue-700" },
    { source: "Audience Score", rating: 4.5, color: "from-purple-500 to-purple-700" },
  ];

  const reviews = [
    { name: "Alex Turner", role: "Film Critic", rating: 9, comment: "A cinematic masterpiece that redefines the genre. Visually stunning!" },
    { name: "Maria Rodriguez", role: "Movie Enthusiast", rating: 10, comment: "The best movie I've seen this decade. Emotional and powerful." },
    { name: "James Wilson", role: "Director", rating: 8, comment: "Innovative storytelling with breathtaking visuals. A must-watch!" },
    { name: "Sarah Chen", role: "Film Student", rating: 9.5, comment: "The cinematography alone deserves all the awards. Pure art." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.3
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Glowing Title */}
        <div className="text-center mb-16">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-lg blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent py-4">
              SIRAI RATINGS
            </h1>
          </div>
          <p className="text-gray-300 text-xl mt-4 max-w-3xl mx-auto">
            Discover why critics and audiences alike are raving about this cinematic phenomenon
          </p>
        </div>

        {/* Overall Rating Card */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-gray-700/50 shadow-2xl shadow-red-900/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-4 mb-4">
                <FaFire className="text-4xl text-red-500 animate-pulse" />
                <h2 className="text-3xl font-bold">Overall Rating</h2>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl">
                SIRAI has captivated audiences worldwide with its groundbreaking visuals, 
                emotional depth, and masterful storytelling. Join the millions who have experienced 
                this cinematic journey.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-2xl" />
                  ))}
                </div>
                <span className="text-2xl font-bold ml-2">4.8/5</span>
                <span className="text-gray-400 ml-2">(1.2M ratings)</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/30 to-red-800/30 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-full w-48 h-48 flex flex-col items-center justify-center border-2 border-red-500/30">
                <span className="text-6xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  9.2
                </span>
                <span className="text-gray-300 mt-2">Average Score</span>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 mx-0.5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Platforms Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FaStar className="text-yellow-500" />
            Ratings Across Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ratings.map((item, index) => (
              <div 
                key={item.source}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 
                hover:border-red-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-lg">{item.source}</h4>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <FaStar className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                    {item.rating}
                    {item.source === "Audience Score" ? "/5" : "%"}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${item.rating}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Reviews */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <FaHeart className="text-red-500 animate-pulse" />
              What People Are Saying
            </h3>
            <button className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-800 rounded-lg 
              hover:from-red-700 hover:to-red-900 transition-all duration-300 
              hover:scale-105 flex items-center gap-2">
              <FaPlay /> Add Your Review
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 
                hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center">
                        <span className="font-bold">{review.name[0]}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-gray-400 text-sm">{review.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        i < Math.floor(review.rating / 2) ? 
                        <FaStar key={i} className="text-yellow-500" /> : 
                        <FaRegStar key={i} className="text-gray-600" />
                      ))}
                      <span className="ml-2 font-bold">{review.rating}/10</span>
                    </div>
                  </div>
                  <FaQuoteLeft className="text-red-500/50 text-3xl" />
                </div>
                <p className="text-gray-300 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-gray-700/50">
          <h3 className="text-2xl font-bold mb-8">Rating Breakdown</h3>
          <div className="space-y-4">
            {[
              { label: "5 Stars", percentage: 65, color: "from-green-500 to-emerald-600" },
              { label: "4 Stars", percentage: 22, color: "from-blue-500 to-cyan-600" },
              { label: "3 Stars", percentage: 8, color: "from-yellow-500 to-amber-600" },
              { label: "2 Stars", percentage: 3, color: "from-orange-500 to-orange-600" },
              { label: "1 Star", percentage: 2, color: "from-red-500 to-red-600" },
            ].map((item, index) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-24 text-gray-300">{item.label}</div>
                <div className="flex-1 bg-gray-800 rounded-full h-4 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 delay-${index * 100}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="w-16 text-right font-bold">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-red-700/20 to-red-800/20 rounded-full blur-xl group-hover:blur-2xl transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-2xl font-bold mb-4">Experience SIRAI Yourself</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join over 5 million viewers who have already experienced this cinematic masterpiece.
                Your rating matters!
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 rounded-lg 
                hover:from-red-700 hover:to-red-900 transition-all duration-300 
                hover:scale-105 text-lg font-semibold shadow-lg shadow-red-900/30
                hover:shadow-red-900/50">
                Rate This Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;