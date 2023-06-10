import { useState } from "react";
import "./Admin.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  // const navLinkClassName = ({ isActive }) =>
  //   isActive ? "active" : "non-active";
  return (
    <div className="container-navbar">
      <div className="navbar-ul">
        <div className="name-navba">
          <span>MENU</span>
          <button className="menu-nav" onClick={handleOpenMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        {/* {openMenu && ( */}
        <ul>
          <NavLink to="/user">
            <li className="li-nav ">User</li>
          </NavLink>
          <NavLink to={"/productad"}>
            <li className="li-nav">Food Store</li>
          </NavLink>

          <NavLink to={"/order"}>
            <li className="li-nav">User Order</li>
          </NavLink>

          <NavLink to={"/categori"}>
            <li className="li-nav">Category</li>
          </NavLink>
        </ul>
        {/* // )} */}
      </div>
    </div>
  );
}

export default NavBar;
