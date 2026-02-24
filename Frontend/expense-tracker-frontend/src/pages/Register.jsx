import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

const submit = async (e) => {
  e.preventDefault();
  try {
    const res = await API.post("/auth/register", form);

    // ⭐ backend agar token bhejta hai to direct login
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } else {
      alert("Registration successful. Please login.");
      navigate("/login");
    }

  } catch (err) {
    alert(err.response?.data?.message || "Registration failed");
  }
};


  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3 text-center">Create Account</h3>

      <form onSubmit={submit} className="card p-4 shadow-sm">
        <input
          className="form-control mb-3"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className="btn btn-success w-100"type="submit">Register</button>
      </form>

      <p className="text-center mt-3">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
