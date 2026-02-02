const UserData = ({ data }) => {
  return (
    <div>
      <h2>User List</h2>
      {data.map((user) => (
        <p key={user.id}>
          {user.firstName} {user.lastName}
        </p>
      ))}
    </div>
  );
};

export default UserData;