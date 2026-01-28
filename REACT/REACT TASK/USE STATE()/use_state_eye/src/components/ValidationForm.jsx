import { useState } from "react";

const ValidationForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ stop page reload

    // 1️⃣ Empty field check
    if (!form.username || !form.email || !form.password) {
      setError("All fields are required");
      return; // 🛑 STOP
    }

    // 2️⃣ Email validation
    if (!form.email.includes("@")) {
      setError("Email must contain @");
      return; // 🛑 STOP
    }

    // 3️⃣ Password length
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return; // 🛑 STOP
    }

    // ✅ If everything is valid
    setError("");
    alert("Form submitted successfully 🎉");
  };

  return (
    <>
      <h2>Register</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ValidationForm;
