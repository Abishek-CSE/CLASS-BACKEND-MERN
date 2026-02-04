import useCounter from "./customhooks/useCounter"
import useFetch from "./customhooks/useFetch";
import useTimer from "./customhooks/useTimer";

const App = () => {
    const {increment,decrement,inc,toggle,toggle1,product} =useCounter()
    const seconds = useTimer();
    const { data: users, loading } = useFetch("https://jsonplaceholder.typicode.com/users");
    if (loading) return <h2>Loading...</h2>;
  return (
    <>
    <div>
        <h1>{inc}</h1>
        <button onClick={increment} className="bg-black text-white p-2 rounded m-2">Increment</button>
        <button onClick={decrement} className="bg-black text-white p-2 rounded m-2">Decrement</button>
        <h1>{toggle1?"show":"hide"}</h1>
        <button onClick={toggle} className="bg-black text-white p-2 rounded m-2">Toggle</button>
        <p>{seconds}</p>
        <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} – {user.email}
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  )
}

export default App