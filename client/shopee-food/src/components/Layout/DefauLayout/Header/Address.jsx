import { useEffect, useRef, useState } from "react";

function Address() {
  const [outSide, setOutSide] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOutSide(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    setOutSide(!outSide);
  };
  return (
    <div className="toggle" ref={ref}>
      <div className="select-btn">
        <button onClick={handleOpen}>
          Hà Nội <i className="fa-sharp fa-solid fa-caret-down"></i>
        </button>
      </div>
      {outSide && (
        <div className="custom-div">
          <div className="dropdown-menu show">
            <div className="dropdown-item">
              <span className="name col">TP. HCM</span>
              <span className="count col-auto">94335 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Hà Nội</span>
              <span className="count col-auto">47787 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Đà Nẵng</span>
              <span className="count col-auto">13300 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Cần Thơ</span>
              <span className="count col-auto">4045 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Hải Phòng</span>
              <span className="count col-auto">4390 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Huế</span>
              <span className="count col-auto">3214 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Khánh Hoà</span>
              <span className="count col-auto">2797 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Đồng Nai</span>
              <span className="count col-auto">5361 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Nghệ An</span>
              <span className="count col-auto">1794 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Vũng Tàu</span>
              <span className="count col-auto">2260 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Bắc Ninh</span>
              <span className="count col-auto">731 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Bình Dương</span>
              <span className="count col-auto">4456 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Đắk Lắk</span>
              <span className="count col-auto">615 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Điện Biên</span>
              <span className="count col-auto">10353 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Lâm Đồng</span>
              <span className="count col-auto">1632 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Quảng Nam</span>
              <span className="count col-auto">1027 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Quảng Ninh</span>
              <span className="count col-auto">896 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Thái Nguyên</span>
              <span className="count col-auto">1103 địa điểm</span>
            </div>
            <div className="dropdown-item">
              <span className="name col">Thanh Hoá</span>
              <span className="count col-auto">256 địa điểm</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Address;
