import UserData from "./components/UserData";
import withDataFetch from "./hoc/withDataFetch";

const App = () => {
  const UserWithData = withDataFetch(
    UserData,
    "https://dummyjson.com/users"
  );

  return (
    <div>
      <h1>HOC Example - Fetch User</h1>
      <UserWithData />
    </div>
  );
};

export default App;