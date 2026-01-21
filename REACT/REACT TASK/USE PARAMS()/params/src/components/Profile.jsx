import { useLocation } from "react-router-dom";

function Profile() {
  const { state } = useLocation();

  return <h2>Name: {state?.name}</h2>;
}

export default Profile;
