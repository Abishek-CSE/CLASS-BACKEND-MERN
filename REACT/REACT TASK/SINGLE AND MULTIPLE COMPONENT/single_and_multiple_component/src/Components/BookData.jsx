import logo from "../assets/logo.jpg";

const BookData = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-sm overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
        {/* Movie Poster */}
        <div className="relative">
          <img
            src={logo}
            alt="Hey Sinamika Poster"
            className="w-full h-80 object-cover"
          />
          <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            NOW SHOWING
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-1">
            <span className="text-amber-400">★</span>
            <span className="text-white font-bold text-sm bg-black/50 px-2 py-1 rounded">
              4.2/5
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Hey! Sinamika
          </h1>
          <p className="text-gray-500 text-sm mb-4">
            Romantic Comedy • 2h 28m • U/A
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-amber-500">📅</span>
              <span className="text-sm">March 3, 2022</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-amber-500">🎭</span>
              <span className="text-sm">Dulquer Salmaan, Aditi Rao Hydari</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-amber-500">📍</span>
              <span className="text-sm">Available in theaters near you</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 text-sm">Standard Ticket</span>
              <span className="font-bold text-gray-900">₹250</span>
            </div>
            <div className="text-xs text-gray-500">
              *Includes all taxes • Free cancellation until 1 hour before show
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
            <span className="text-lg">🎬</span>
            Book Tickets Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookData;