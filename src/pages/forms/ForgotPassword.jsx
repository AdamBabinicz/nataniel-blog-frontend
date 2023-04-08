import "./form.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/apiCalls/passwordApiCall";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email jest wymagany");

    dispatch(forgotPassword(email));
  };

  return (
    <section className="form-container">
      <h1 className="form-title">Zapomniałeś/aś hasła?</h1>
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
        <button type="submit" className="form-btn">
          Wyślij
        </button>
      </form>
    </section>
  );
};

export default ForgotPassword;
