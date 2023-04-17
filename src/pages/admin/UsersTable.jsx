import "./admin-table.css";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteProfile,
  getAllUsersProfile,
} from "../../redux/apiCalls/profileApiCall";

const UsersTable = () => {
  const dispatch = useDispatch();
  const { profiles, isProfileDeleted } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getAllUsersProfile());
  }, [isProfileDeleted]);

  // Delete User Handler
  const deleteUserHandler = (userId) => {
    swal({
      title: "Jesteś pewien?",
      text: "Po usunięciu nie będzie można odzyskać tego użytkownika!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProfile(userId));
      }
    });
  };

  return (
    <div className="table-container">
      <AdminSidebar />
      <div className="table-wrapper">
        <h2 className="table-title">Użytkownicy</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Nr</th>
              <th>Użytkownik</th>
              <th>Email</th>
              <th>Działanie</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="table-image">
                    <img
                      src={item.profilePhoto?.url}
                      alt="..."
                      className="table-user-image"
                    />
                    <span className="table-username">{item.username}</span>
                  </div>
                </td>
                <td>
                  <b className="user-email">{item.email}</b>
                </td>
                <td>
                  <div className="table-button-group">
                    <button>
                      <Link to={`/profile/${item._id}`}>Zobacz profil</Link>
                    </button>
                    <button onClick={() => deleteUserHandler(item._id)}>
                      Usuń użytkownika
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
