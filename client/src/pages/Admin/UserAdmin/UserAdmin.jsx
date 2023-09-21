import { useEffect, useState } from "react";
import HeaderAdmin from "../HeaderAdmin";
import NavBar from "../NavBar";
import "./UserAdmin.css";
import axios from "axios";
import { notification } from "antd";

function UserAdmin() {
  const [admiUser, setAdmiUser] = useState([]);
  const [users, setUsers] = useState([]);

  console.log(admiUser, "<----------");

  const loadData = () => {
    axios
      .get("http://localhost:3003/api/v1/users")
      .then((res) => setAdmiUser(res.data.user))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3003/api/v1/users/${id}`)
      .then((data) => {
        if (data.data.status === 200) {
          notification.success({
            message: data.data.message,
          });
        }
        loadData();
      })
      .catch((error) => {
        console.log("An error occurred while deleting the user:", error);
      });
  };

  return (
    <div>
      <HeaderAdmin />
      <div className="displ-ctent">
        <NavBar />
        <div className="conten-ctn">
          <div className="tag-name">
            <div className="tag-usr">
              <span className="icon-tag">
                <i class="fa-solid fa-user-tag"></i>
              </span>
            </div>
            <div className="tag-name-usr">
              <p className="name-tag">User</p>
              <span className="application">View,Details,Delete</span>
            </div>
          </div>

          <div className="tbl-user">
            <div className="table-user">
              <div className="search-user">
                <div className="srch-usr">
                  <div className="color-nn">
                    <input
                      className="wh-ipt"
                      type="text"
                      placeholder="Tìm kiếm"
                    />
                    <button className="btn-usradm">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      Search
                    </button>
                  </div>
                </div>
                <table className="table-usr">
                  <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Tên Đăng Nhập</th>
                    <th>Cấp độ</th>
                    <th>Actions</th>
                  </tr>
                  {admiUser.map((user, index) => (
                    <tr className="row1" key={index}>
                      <td>{user.users_id}</td>
                      <td>{user.users_name}</td>
                      <td>{user.users_name}</td>
                      {user.users_roles == 0 ? <td>Admin</td> : <td>User</td>}
                      <td>
                        <button className="detail">
                          <i class="fa-solid fa-lock"></i>
                        </button>
                        <button
                          className="delete-usr"
                          onClick={() => handleDelete(user.users_id)}
                        >
                          <i className="fa-solid fa-trash-can del"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAdmin;
