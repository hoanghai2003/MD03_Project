import { useState } from "react";
import "./Admin.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="container-navbar">
      <div className="navbar-ul">
        <div className="name-navba">
          <span>MENU</span>
          <button className="menu-nav" onClick={handleOpenMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <ul>
          <NavLink to="/user">
            <li className="li-nav ">Quản lí người dùng</li>
          </NavLink>
          <NavLink to={"/productad"}>
            <li className="li-nav">Danh sách đồ ăn</li>
          </NavLink>

          <NavLink to={"/order"}>
            <li className="li-nav">Quản lí đơn hàng</li>
          </NavLink>

          <NavLink to={"/categori"}>
            <li className="li-nav">Lựa chọn</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
