import "./form.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiCalls/authApiCall";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email jest wymagany");
    if (password.trim() === "") return toast.error("Hasło jest wymagane");

    dispatch(loginUser({ email, password }));
  };

  return (
    <section className="form-container">
      <h1 className="form-title">Zaloguj się na swoje konto</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="Wpisz swój email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Hasło
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder="Wpisz swoje hasło"
            className="form-input"
          />
        </div>
        <button type="submit" className="form-btn">
          Zaloguj się
        </button>
      </form>
      <div className="form-footer">
        Zapomniałeś/aś hasła?
        <Link to="/forgot-password"> Kliknij tutaj</Link>
      </div>
    </section>
  );
};

export default Login;
