import { useState } from "react";
import Task2 from "./components/Task2";
import Form from "./components/Form";
import ValidationForm from "./components/ValidationForm";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => {
      console.log("Prev value:", prev);
      return prev + 1;
    });

    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increase by 3</button>
      <Task2/>
      <Form/>
      <ValidationForm/>
    </>
  );
};

export default App;
