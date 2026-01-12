const Counting = (numbervalues) => {
    
  return (
    <>
    <h1>{numbervalues.count}</h1>
    <button onClick={numbervalues.increment}>increment</button>
    <button onClick={numbervalues.decrement}>Decrement</button>
    </>
  )
}

export default Counting