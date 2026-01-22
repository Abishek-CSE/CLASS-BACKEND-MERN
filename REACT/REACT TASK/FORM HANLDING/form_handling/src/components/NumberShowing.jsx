import { useState } from "react";

const NumberShowing = () => {
  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    if (number === "") return;
    setNumbers([...numbers, Number(number)]);
    setNumber("");
  };

  const clearAll = () => {
    setNumbers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 to-pink-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Number Collection
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Add numbers to your collection
        </p>
        
        <div className="space-y-6">
          <div className="flex gap-3">
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter a number"
              className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition duration-200"
            />
            <button
              onClick={addNumber}
              className="bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-rose-700 hover:to-pink-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
            >
              Add
            </button>
          </div>
          
          {numbers.length > 0 && (
            <>
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Your Numbers ({numbers.length})
                  </h3>
                  <button
                    onClick={clearAll}
                    className="text-sm text-rose-600 hover:text-rose-800 font-medium"
                  >
                    Clear All
                  </button>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {numbers.map((num, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-lg p-3 text-center group hover:border-rose-400 transition duration-200"
                    >
                      <span className="text-lg font-bold text-rose-700">{num}</span>
                      <span className="block text-xs text-gray-500 mt-1">
                        #{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Sum</p>
                      <p className="text-xl font-bold text-rose-700">
                        {numbers.reduce((a, b) => a + b, 0)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Average</p>
                      <p className="text-xl font-bold text-rose-700">
                        {(numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {numbers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-rose-300 text-5xl mb-4">🔢</div>
              <p className="text-gray-500">No numbers added yet</p>
              <p className="text-gray-400 text-sm mt-2">Start by entering a number above</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberShowing;