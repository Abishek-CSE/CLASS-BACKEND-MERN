import React, { useRef, useState } from "react";

const App = () => {
  const TimerRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleclick = () => {
    if (TimerRef.current) return;
    TimerRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleclick}>Click Me</button>
    </>
  );
};

export default App;