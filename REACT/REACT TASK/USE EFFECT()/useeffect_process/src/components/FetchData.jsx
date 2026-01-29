import { useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      setUsers(data.posts)
    } catch (error) {
      console.log("Error fetching data", error)
    }
  };

  return (
    <div>
      <h2>User List</h2>

      <button
        onClick={getData}
        className="bg-amber-400 text-black p-3 rounded"
      >
        Load Users
      </button>

      {users.map((user) => (
        <p key={user.id}>
          {user.title} - {user.reactions?.likes}
        </p>
      ))}
    </div>
  );
};

export default FetchData;
