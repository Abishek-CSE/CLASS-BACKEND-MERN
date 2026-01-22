import { useState } from "react";

const Validate = () => {
  const [change, setChange] = useState("");
  const [button, setButton] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handlechange = (e) => {
    setChange(e.target.value);
    setIsChecked(false);
  };

  const handleclick = () => {
    if (change === "") {
      setButton("Please enter your age");
      setIsChecked(true);
      return;
    }
    
    const age = parseInt(change);
    if (age >= 18) {
      setButton("✅ Eligible - You can vote!");
    } else {
      setButton("❌ Not Eligible - You must be 18 or older");
    }
    setIsChecked(true);
  };

  const resetForm = () => {
    setChange("");
    setButton("");
    setIsChecked(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-emerald-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Age Eligibility Checker
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Check if you're eligible to vote
        </p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Enter Your Age
            </label>
            <input
              onChange={handlechange}
              type="number"
              value={change}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition duration-200"
              placeholder="Enter your age"
              min="0"
              max="120"
            />
          </div>
          
          <div className="flex gap-3">
            <button
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-green-700 hover:to-emerald-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
              onClick={handleclick}
            >
              Check Eligibility
            </button>
            <button
              onClick={resetForm}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-200"
            >
              Reset
            </button>
          </div>
          
          {isChecked && (
            <div className={`mt-6 p-6 rounded-xl transition-all duration-300 animate-fadeIn ${
              button.includes("Eligible") 
                ? "bg-emerald-50 border-2 border-emerald-200" 
                : button.includes("Please enter")
                ? "bg-yellow-50 border-2 border-yellow-200"
                : "bg-rose-50 border-2 border-rose-200"
            }`}>
              <h2 className={`text-xl font-bold text-center ${
                button.includes("Eligible") 
                  ? "text-emerald-700" 
                  : button.includes("Please enter")
                  ? "text-yellow-700"
                  : "text-rose-700"
              }`}>
                {button}
              </h2>
              
              {!button.includes("Please enter") && (
                <div className="mt-4">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          button.includes("Eligible") 
                            ? "bg-emerald-500" 
                            : "bg-rose-500"
                        }`}
                        style={{ 
                          width: `${Math.min(100, (parseInt(change) / 18) * 100)}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-center text-sm">
                    Minimum age required: 18 years
                  </p>
                </div>
              )}
            </div>
          )}
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Eligibility Rules:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                18 years or older: Eligible to vote
              </li>
              <li className="flex items-center">
                <span className="text-rose-500 mr-2">✗</span>
                Under 18: Not eligible to vote
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validate;