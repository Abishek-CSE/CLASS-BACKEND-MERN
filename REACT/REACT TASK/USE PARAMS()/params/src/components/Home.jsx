import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        navigate("/profile", {
          state: { name: "Abishek" }
        })
      }
    >
      Go Profile
    </button>
  );
}

export default Home;
