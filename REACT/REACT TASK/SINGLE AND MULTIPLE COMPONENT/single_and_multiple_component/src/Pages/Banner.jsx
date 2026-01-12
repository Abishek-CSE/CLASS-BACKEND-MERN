const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-amber-400 via-amber-300 to-orange-200 min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full -translate-x-32 -translate-y-32 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full translate-x-48 translate-y-48 opacity-30"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Movie tagline or subtitle */}
          <div className="flex justify-center mb-6">
            <span className="px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full text-amber-900 font-semibold tracking-wide">
              Coming Soon to Theaters
            </span>
          </div>

          {/* Main title with gradient effect */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-900 to-amber-800">
              Hey! Sinamika
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-center text-amber-900 italic font-light mb-12 max-w-2xl mx-auto">
            A Heartwarming Romantic Comedy
          </p>

          {/* Content card with glassmorphism effect */}
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-10 border border-white/30 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Movie poster placeholder */}
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative w-64 h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="text-3xl font-bold mb-2">H!</div>
                      <div className="text-xl font-semibold">SINAMIKA</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
                    <div className="font-bold">Now Showing</div>
                    <div className="text-sm">★★★★☆</div>
                  </div>
                </div>
              </div>

              {/* Movie description */}
              <div className="w-full lg:w-2/3">
                <p className="text-lg md:text-xl text-amber-900 leading-relaxed mb-6">
                  <span className="font-bold text-2xl text-black">Hey! Sinamika</span> (transl. Hey! Angry Belle) is a 2022 Indian Tamil-language romantic comedy film directed by Brinda, in her directorial debut. 
                  This charming adaptation of the 2008 Argentine film "A Boyfriend for My Wife" features a delightful role-swapping twist that brings fresh perspective to modern relationships.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="font-semibold text-amber-900">Starring:</span>
                    <span className="text-amber-800">Dulquer Salmaan, Aditi Rao Hydari</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="font-semibold text-amber-900">With:</span>
                    <span className="text-amber-800">Kajal Aggarwal, Nakshatra Nagesh</span>
                  </div>
                </div>

                <p className="text-amber-800 text-lg italic border-l-4 border-amber-500 pl-4 py-2 mb-8">
                  Follow Yaazhan, a software engineer, whose wife Mouna tries to end their marriage 
                  as she starts to find him annoying. A journey of love, laughter, and self-discovery.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-black to-amber-900 rounded-2xl hover:from-amber-900 hover:to-black transition-all duration-300 shadow-2xl hover:shadow-amber-900/30 hover:scale-105 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                🎬 Book Your Tickets Now
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-amber-800 mt-6 text-lg">
              Limited seats available • Special premiere discounts
            </p>
          </div>

          {/* Additional info */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-amber-300/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">2h 28m</div>
              <div className="text-amber-700">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">U/A</div>
              <div className="text-amber-700">Certificate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">Tamil</div>
              <div className="text-amber-700">Language</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">2022</div>
              <div className="text-amber-700">Release</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;