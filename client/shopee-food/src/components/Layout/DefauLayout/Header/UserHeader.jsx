import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import assImages from "../../../../asset/images/images";

function UserHeader() {
  const navigate = useNavigate();
  const [openUser, setOpenUser] = useState(false);
  const ref = useRef(null);

  const UserLocal = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenUser(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDeleteLocal = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleOpen = () => {
    setOpenUser(!openUser);
  };
  return (
    <>
      {UserLocal != null ? (
        <>
          <div className="current-user" onClick={handleOpen} ref={ref}>
            <div className="user-container">
              <div className="img-user">
                <img
                  className="img-add"
                  src={assImages.shopeefoodUser}
                  alt=""
                />
              </div>
              <div className="name-user">
                <span className="name-add">{UserLocal.data.users_name}</span>
              </div>
            </div>
          </div>
          {openUser && (
            <div className="dropdown-menuu showw">
              <a href="/grub">
                <div className="dropdown-itemm">
                  <div>
                    <span className="icon-user history">
                      <i className="fa-solid fa-briefcase color"></i>
                    </span>
                    <span className="text-user ">Giỏ hàng</span>
                  </div>
                  <div className="sl-count"></div>
                </div>
              </a>
              <a href="">
                <div className="dropdown-itemm">
                  <span className="icon-user bop">
                    <i className="fa-sharp fa-solid fa-money-bill-wave"></i>
                  </span>
                  <span className="text-user">Ví Voucher</span>
                </div>
              </a>
              <a href="/account/profile">
                <div className="dropdown-itemm">
                  <span className="icon-user update">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <span className="text-user">Cập nhật tài khoản</span>
                </div>
              </a>
              <div className="dropdown-itemm" onClick={handleDeleteLocal}>
                <span className="icon-user logout">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </span>
                <span className="text-user">Đăng xuất</span>
              </div>
            </div>
          )}
        </>
      ) : (
        <NavLink to="/login" exact="true" activeclassname="active">
          {" "}
          <div className="login">
            <button>Đăng Nhập</button>
          </div>
        </NavLink>
      )}
    </>
  );
}

export default UserHeader;
