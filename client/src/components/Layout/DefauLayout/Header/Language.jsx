import { useEffect, useRef, useState } from "react";
import assImages from "../../../../asset/images/images";
function Language() {
  const [openToggle, setOpenToggle] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenToggle(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    setOpenToggle(!openToggle);
  };
  return (
    <>
      <div className="language" ref={ref}>
        <button onClick={handleOpen}>
          <img src={assImages.flagVn} alt="flag vn  " />
          <i className="fa-sharp fa-solid fa-caret-down"></i>
        </button>
      </div>
      {openToggle && (
        <div className="languagee">
          <div className="vietnam">
            <img className="img-lag" src={assImages.ENGLIS} alt="" />
            <p>Tiếng Anh</p>
          </div>
          <div className="vietnam">
            <img className="img-lag" src={assImages.flagVn} alt="" />
            <p>Việt Nam</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Language;
