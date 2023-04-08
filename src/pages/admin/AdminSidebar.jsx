import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <Link to="/admin-dashboard" className="admin-sidebar-title">
        <i className="bi bi-columns-gap"></i>
        Panel
      </Link>
      <ul className="admin-dashboard-list">
        <Link className="admin-sidebar-link" to="/admin-dashboard/users-table">
          <i className="bi bi-person-fill"></i>
          Użytkownicy
        </Link>
        <Link className="admin-sidebar-link" to="/admin-dashboard/posts-table">
          <i className="bi bi-stickies-fill"></i>
          Posty
        </Link>
        <Link
          className="admin-sidebar-link"
          to="/admin-dashboard/categories-table"
        >
          <i className="bi bi-bookmarks-fill"></i>
          Tematy
        </Link>
        <Link
          className="admin-sidebar-link"
          to="/admin-dashboard/comments-table"
        >
          <i className="bi bi-chat-left-text-fill"></i>
          Komentarze
        </Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
