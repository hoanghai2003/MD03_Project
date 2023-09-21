import { useEffect, useRef, useState } from "react";
import assImages from "../../asset/images/images";
import { NavLink, useNavigate } from "react-router-dom";

function HeaderAdmin() {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  console.log(userLocal);
  const [openLogout, setOpenLogout] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  console.log(userLocal);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenLogout(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOpenLogin = () => {
    setOpenLogout(!openLogout);
  };
  const handleOutAccAdmin = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="header-admin">
      <div className="title-admin">
        <div className="tt-admin">
          <NavLink to={"/admin"}>
            <div className="name-ad">
              <strong style={{ userSelect: "none" }}>ADMIN</strong>
            </div>
          </NavLink>
        </div>

        <div className="icon-admin">
          <div className="ic-adm">
            <i className="fa-regular fa-envelope"></i>
            <span className="tb-adm">
              <p>4</p>
            </span>
          </div>
          <div className="ic-adm">
            <i className="fa-regular fa-bell"></i>
            <span className="tb-adm adm">
              <p>4</p>
            </span>
          </div>
        </div>
      </div>

      <div className="user-admin" ref={ref}>
        <div className="user-adm" onClick={handleOpenLogin}>
          <div>
            <img className="img-adm" src={assImages.userAdmin} alt="" />
          </div>
          {userLocal ? (
            <>
              {userLocal?.data.users_roles === 0 ? (
                <div className="name-adm">
                  <span>{userLocal.data.users_name}</span>
                  <i className="fa-solid fa-sort-down"></i>
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        {openLogout && (
          <>
            <div className="bgr-full">
              <div className="openlogout" onClick={handleOutAccAdmin}>
                <div>
                  <button className="btn-logout">
                    <div className="icon-logout">
                      <i className="fa-solid fa-right-from-bracket fa-rotate-180 icn"></i>
                    </div>

                    <span className="llout">Đăng xuất</span>
                  </button>
                </div>
              </div>
              <div className="openlogout out">
                <div>
                  <button className="btn-logout">
                    <div className="icon-logout bgcl">
                      <i className="fa-regular fa-user icn"></i>
                    </div>

                    <span className="tt-cn">Thông tin cá nhân</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default HeaderAdmin;
