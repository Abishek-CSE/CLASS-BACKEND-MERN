import { useState } from "react";

const Oddnumber = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleCheck = () => {
    if (number === "") {
      setMessage("Please enter a number");
    } else if (parseInt(number) % 2 === 0) {
      setMessage("This is an even number");
    } else {
      setMessage("This is an odd number");
    }
  };

  const resetForm = () => {
    setNumber("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-blue-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Even/Odd Checker
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Check if a number is even or odd
        </p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Enter a Number
            </label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition duration-200"
              placeholder="Enter any number"
            />
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={handleCheck}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
            >
              Check Number
            </button>
            <button
              onClick={resetForm}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-200"
            >
              Reset
            </button>
          </div>
          
          {message && (
            <div className={`mt-6 p-6 rounded-xl text-center transition-all duration-300 ${
              message === "Please enter a number"
                ? "bg-yellow-50 border-2 border-yellow-200"
                : message.includes("even")
                ? "bg-emerald-50 border-2 border-emerald-200"
                : "bg-rose-50 border-2 border-rose-200"
            }`}>
              <div className="text-4xl mb-3">
                {message === "Please enter a number" && "⚠️"}
                {message.includes("even") && "✅"}
                {message.includes("odd") && "❌"}
              </div>
              <h3 className={`text-xl font-bold ${
                message === "Please enter a number"
                  ? "text-yellow-700"
                  : message.includes("even")
                  ? "text-emerald-700"
                  : "text-rose-700"
              }`}>
                {message}
              </h3>
              {number && message !== "Please enter a number" && (
                <p className="text-gray-600 mt-2">
                  You entered: <span className="font-bold">{number}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Oddnumber;