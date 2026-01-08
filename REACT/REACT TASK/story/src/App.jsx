import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Story from "./Components/Story"; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/story" element={<Story />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;