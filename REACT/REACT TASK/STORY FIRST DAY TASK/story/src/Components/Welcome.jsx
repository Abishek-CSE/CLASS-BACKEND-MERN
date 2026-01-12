import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Welcome to LEO WORLD
                </h1>
                <p className="text-gray-600 mb-8">
                    Click the button to see story
                </p>
                
                <button 
                    onClick={() => navigate("/story")}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition duration-200"
                >
                    Go to story page
                </button>
            </div>
        </div>
    );
};

export default Welcome