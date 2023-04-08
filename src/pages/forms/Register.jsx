import { Link, useNavigate } from "react-router-dom";
import "./form.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/apiCalls/authApiCall";
import swal from "sweetalert";

const Register = () => {
  const dispatch = useDispatch();
  const { registerMessage } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "") return toast.error("Dane są wymagane");
    if (email.trim() === "") return toast.error("Email jest wymagany");
    if (password.trim() === "") return toast.error("Hasło jest wymagane");

    dispatch(registerUser({ username, email, password }));
  };

  const navigate = useNavigate();

  if (registerMessage) {
    swal({
      title: registerMessage,
      icon: "success",
    }).then((isOK) => {
      if (isOK) {
        // go to login page
        navigate("/login");
      }
    });
  }

  return (
    <section className="form-container">
      <h2 className="form-title">Utwórz nowe konto</h2>
      <form onSubmit={formSubmitHandler} className="form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Użytkownik
          </label>
          <input
            type="text"
            className="form-input"
            id="username"
            placeholder="Wpisz swoje imię i nazwisko lub Nick"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            placeholder="Wpisz swój email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Hasło
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            placeholder="Wpisz swoje hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="form-btn" type="submit">
          Zarejestruj się
        </button>
      </form>
      <div className="form-footer">
        Masz już konto? <Link to="/login">Zaloguj się</Link>
      </div>
    </section>
  );
};

export default Register;
