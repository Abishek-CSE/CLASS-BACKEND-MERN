import { useState } from 'react';
import { FaCouch, FaCalendarAlt, FaClock } from 'react-icons/fa';

const BookNow = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  const rows = 8;
  const seatsPerRow = 8;
  const price = 12.50;

  const toggleSeat = (row, col) => {
    const seatId = `${row}-${col}`;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Screen & Seats */}
        <div className="lg:col-span-2 bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
          
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-400">SELECT YOUR SEATS</h2>

          {/* Screen */}
          <div className="mb-12 relative">
            <div className="h-16 w-3/4 mx-auto bg-gradient-to-b from-white/10 to-transparent rounded-t-[50%] transform perspective-1000 rotate-x-12 shadow-[0_-10px_30px_rgba(255,255,255,0.1)]"></div>
            <p className="text-center text-sm text-gray-500 mt-2 tracking-widest">SCREEN</p>
          </div>

          {/* Seats Grid */}
          <div className="flex justify-center gap-12 mb-8">
             <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${seatsPerRow}, minmax(0, 1fr))` }}>
              {[...Array(rows)].map((_, r) => (
                [...Array(seatsPerRow)].map((_, c) => {
                  const seatId = `${r}-${c}`;
                  const isSelected = selectedSeats.includes(seatId);
                  const isOccupied = Math.random() < 0.2; // Random occupied seats
                  
                  return (
                    <button
                      key={seatId}
                      disabled={isOccupied}
                      onClick={() => toggleSeat(r, c)}
                      className={`
                        w-8 h-8 md:w-10 md:h-10 rounded-t-lg transition-all duration-300 relative group
                        ${isOccupied 
                          ? 'bg-gray-800 cursor-not-allowed opacity-50' 
                          : isSelected 
                            ? 'bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.6)] scale-110 z-10' 
                            : 'bg-gray-700 hover:bg-gray-600 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]'
                        }
                      `}
                    >
                      <FaCouch className={`mx-auto text-xs ${isSelected ? 'text-white' : 'text-gray-900'}`} />
                    </button>
                  );
                })
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-700 rounded"></div> Available
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div> Selected
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-800 rounded opacity-50"></div> Occupied
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl p-8 border border-gray-800 h-fit sticky top-8">
          <h3 className="text-xl font-black mb-6 border-b border-gray-800 pb-4">BOOKING SUMMARY</h3>
          
          <div className="space-y-6 mb-8">
            <div>
              <p className="text-gray-500 text-sm mb-1">Movie</p>
              <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">SIRAI: Legend of Fire</h4>
            </div>
            
            <div className="flex gap-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">Date</p>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaCalendarAlt className="text-red-500" />
                  <span>Oct 24, 2024</span>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Time</p>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaClock className="text-red-500" />
                  <span>19:30 PM</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-1">Selected Seats</p>
              <div className="flex flex-wrap gap-2">
                {selectedSeats.length > 0 ? (
                  selectedSeats.map(id => (
                    <span key={id} className="px-2 py-1 bg-red-900/30 border border-red-500/30 rounded text-xs text-red-400">
                      Row {Number(id.split('-')[0]) + 1} - Seat {Number(id.split('-')[1]) + 1}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-600 italic">No seats selected</span>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex justify-between items-end mb-6">
              <span className="text-gray-400">Total Price</span>
              <span className="text-3xl font-bold">${(selectedSeats.length * price).toFixed(2)}</span>
            </div>
            
            <button 
              className={`
                w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300
                ${selectedSeats.length > 0 
                  ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 shadow-lg shadow-red-900/40 transform hover:-translate-y-1' 
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                }
              `}
              disabled={selectedSeats.length === 0}
            >
              Confirm Booking
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BookNow