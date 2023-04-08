import "./verify-email.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { verifyEmail } from "../../redux/apiCalls/authApiCall";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { isEmailVerified } = useSelector((state) => state.auth);

  const { userId, token } = useParams();

  useEffect(() => {
    dispatch(verifyEmail(userId, token));
  }, [userId, token]);

  return (
    <section className="verify-email">
      {isEmailVerified ? (
        <>
          <h2 className="verify-email-not-found">Nie znaleziono ☹</h2>
        </>
      ) : (
        <>
          <i className="bi bi-patch-check-fill verify-email-icon"></i>
          <h2 className="verify-email-title">
            Twój adres email został pomyślnie zweryfikowany
          </h2>
          <Link to="/login" className="verify-email-link">
            Przejdź do strony logowania
          </Link>
        </>
      )}
    </section>
  );
};

export default VerifyEmail;
