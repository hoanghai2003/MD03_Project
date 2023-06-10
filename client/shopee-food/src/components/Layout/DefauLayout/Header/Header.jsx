import "./Header.css";
import assImages from "../../../../asset/images/images";

import { NavLink, useNavigate, useParams } from "react-router-dom";
import Address from "./Address";
import Language from "./Language";
import Searchpro from "./Searchpro";
import { useEffect, useRef, useState } from "react";
import UserHeader from "./UserHeader";
import axios from "axios";

function Header() {
  const [nameFood, setNameFood] = useState([]);
  const firstNavLinkRef = useRef(null);
  const navLinkContainerRef = useRef(null);
  const [apiCategory, setApiCategory] = useState([]);
  const param = useParams();

  const getId = (id) => {
    // Gọi API
    axios
      .get(`http://localhost:3003/api/v1/category/${id}`)
      .then((res) => setApiCategory(res.data.user))
      .catch((err) => {
        console.log(err);
      });
  };

  const navLinkClassName = ({ isActive }) =>
    isActive ? "activee" : "non-active";

  useEffect(() => {
    axios
      .get("http://localhost:3003/api/v1/category")
      .then((res) => {
        setNameFood(res.data.user);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (firstNavLinkRef.current) {
      firstNavLinkRef.current.focus();
    }

    const handleOutsideClick = (event) => {
      if (
        navLinkContainerRef.current &&
        !navLinkContainerRef.current.contains(event.target)
      ) {
        if (firstNavLinkRef.current) {
          firstNavLinkRef.current.focus();
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [nameFood]);

  return (
    <header className="wrapper">
      <div className="inner">
        <div className="avatar">
          <NavLink to="/">
            <a href="/">
              <img src={assImages.Avatar} alt="ShopeeFood" />
            </a>
          </NavLink>
        </div>
        {/*  address */}
        <Address />
        {/*  */}
        <div className="main-nav col" ref={navLinkContainerRef}>
          {nameFood.map((food, index) => (
            <NavLink
              tabIndex={0}
              to={`/${food.category_id}`}
              onClick={() => getId(food.category_id)}
              className={navLinkClassName}
              ref={index === 0 ? firstNavLinkRef : null}
            >
              {food.category_name}
            </NavLink>
          ))}
        </div>

        {/*  */}

        {/* serach modle */}
        <Searchpro />
        {/* userrrr */}
        <UserHeader />
        {/*vietnam  */}
        <Language />

        {/*  */}
      </div>
    </header>
  );
}

export default Header;
