import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

 const submit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);

    const res = await API.post("/auth/login", { email, password });

    // ⭐ SAVE TOKEN (IMPORTANT FIX)
    localStorage.setItem("token", res.data.token);

    // context login (optional but good)
    login(res.data.token);

    navigate("/");

  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <form onSubmit={submit} className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-3">Login</h3>

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="btn btn-primary w-100" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default Login;
