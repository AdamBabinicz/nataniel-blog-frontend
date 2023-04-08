import { Link } from "react-router-dom";
import "./not-found.css";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found-title">404</div>
      <h2 className="not-found-text">Nie znaleziono strony</h2>
      <Link className="not-found-link" to="/">
        Wróć do strony głównej
      </Link>
    </section>
  );
};

export default NotFound;
