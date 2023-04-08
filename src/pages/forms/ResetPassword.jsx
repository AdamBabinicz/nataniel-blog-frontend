import "./form.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getResetPassword,
  resetPassword,
} from "../../redux/apiCalls/passwordApiCall";
import { useEffect } from "react";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.password);

  const [password, setPassword] = useState("");

  const { userId, token } = useParams();

  useEffect(() => {
    dispatch(getResetPassword(userId, token));
  }, [userId, token]);

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (password.trim() === "") return toast.error("Hasło jest wymagane");

    dispatch(resetPassword(password, { userId, token }));
  };

  return (
    <section className="form-container">
      {isError ? (
        <h2>Nie znaleziono 🤕</h2>
      ) : (
        <>
          <h2 className="form-title">Resetowanie hasła</h2>
          <form onSubmit={formSubmitHandler} className="form">
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Nowe hasło
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
                placeholder="Wpisz swoje nowe hasło"
                className="form-input"
              />
            </div>
            <button type="submit" className="form-btn">
              Wyślij
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default ResetPassword;
