import { useEffect, useRef, useState } from "react";
import "./AntDesign.css";

function AntDesignTow() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
  const dropdownRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  return (
    <div className="App">
      <div className="dropdown" ref={dropdownRef}>
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          {selected}
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
          >
            Huyện Lập Thạch
          </div>
          <div
            className="item"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Huyện Bình Xuyên
          </div>
          <div
            className="item"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Huyện Vĩnh Tường
          </div>
        </div>
      </div>
    </div>
  );
}

export default AntDesignTow;
