import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value   
    }));
  };

  return (
    <>
      <h2>Registration Form</h2>

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

      <hr />

      <h3>Entered Data</h3>
      <p>Username: {form.username}</p>
      <p>Email: {form.email}</p>
      <p>Password: {form.password}</p>
    </>
  );
};

export default Form;
