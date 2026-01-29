import { useState } from "react";

const MapDates = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={fetchUsers}>Fetch Users</button>

      {loading && <p>Loading...</p>}

      {!loading &&
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
    </div>
  );
};

export default MapDates;
