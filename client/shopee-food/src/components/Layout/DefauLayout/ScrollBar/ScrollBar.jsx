import { useEffect, useState } from "react";
import assImages from "../../../../asset/images/images";
import "./ScrollBar.css";

function ScrollBar() {
  const [scrollTop, setScrollTop] = useState(0);
  const [showTopControl, setShowTopControl] = useState(false);

  const handleBacktoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollTop(0);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const threshold = 200; // Giá trị ngưỡng để hiển thị
    setShowTopControl(scrollTop > threshold);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showTopControl && (
        <div className="topcontrol active">
          <div className="fd-back-top">
            <div className="control-link" onClick={handleBacktoTop}>
              <i className="fas fa-angle-up"></i>
              <label>Quay lại đầu trang</label>
            </div>
            <a
              className="control-link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="shipper" src={assImages.Shipper} alt="" />
              <label>Đăng ký trở thành tài xế của ShopeeFood.vn ngay!</label>
            </a>

            <a
              className="control-link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-apple"></i>
              <label>Tải ứng dụng iOs</label>
            </a>

            <a
              className="control-link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-android"></i>
              <label>Tải ứng dụng android</label>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default ScrollBar;
