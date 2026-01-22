import { useState } from "react";

const FormHandling = () => {
  const [change, setChange] = useState("");

  const handlechange = (e) => {
    setChange(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-teal-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Real-time Form Input
        </h1>
        <p className="text-gray-600 text-center mb-8">
          See your text appear instantly as you type
        </p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Type Anything
            </label>
            <input
              onChange={handlechange}
              value={change}
              type="text"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition duration-200"
              placeholder="Start typing..."
            />
          </div>
          
          {change && (
            <div className="mt-6 animate-fadeIn">
              <p className="text-sm text-gray-600 mb-2">Live Preview:</p>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 break-words">
                  {change}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Characters: {change.length}
                </p>
              </div>
            </div>
          )}
          
          {!change && (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">👆</div>
              <p className="text-gray-500">Your text will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormHandling;