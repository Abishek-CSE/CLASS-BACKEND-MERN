import { useState } from "react";

const Button = () => {
  const [change, setChange] = useState("");
  const [button, setButton] = useState("");
  
  const handlechange = (e) => {
    setChange(e.target.value);
  };
  
  const handleclick = () => {
    setButton(change);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-400 to-orange-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Text Display App
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Type something and see it appear below
        </p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Enter Text
            </label>
            <input
              onChange={handlechange}
              type="text"
              value={change}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition duration-200"
              placeholder="Type something here..."
            />
          </div>
          
          <button
            className="w-full bg-gradient-to-r from-gray-900 to-black text-white font-semibold py-3 px-4 rounded-lg hover:from-gray-800 hover:to-gray-900 transform hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 shadow-lg"
            onClick={handleclick}
          >
            Display Text
          </button>
          
          {button && (
            <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r">
              <p className="text-sm text-gray-600 mb-1">Displaying:</p>
              <h2 className="text-2xl font-bold text-gray-800">{button}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Button;