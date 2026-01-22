import { useState } from "react";

const EvenNumber = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [even, setEven] = useState([]);

  const handleClick = () => {
    const evenNumbers = numbers.filter((n) => n % 2 === 0);
    setEven(evenNumbers);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Even Numbers Finder
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Click to find even numbers from 1 to 10
        </p>
        
        <button
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 mb-8 shadow-lg"
        >
          Find Even Numbers
        </button>

        {even.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Even Numbers Found:
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {even.map((num) => (
                <div
                  key={num}
                  className="bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-blue-200 rounded-lg p-4 text-center"
                >
                  <span className="text-2xl font-bold text-blue-700">{num}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-4">
              Total: {even.length} even numbers
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EvenNumber;