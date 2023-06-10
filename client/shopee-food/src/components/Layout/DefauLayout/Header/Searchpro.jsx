import SvgIcon from "../../../SvgIcon/SvgIcon";
import { iconSesrch } from "../../../SvgIcon/iconsRepo";
import assImages from "../../../../asset/images/images";
import { useState } from "react";

function Searchpro() {
  const [searchModle, setSearchModle] = useState(false);

  const handleOpenSearchModle = () => {
    setSearchModle(!searchModle);
  };

  const handleClose = () => {
    setSearchModle(false);
  };
  return (
    <>
      <div className="search" onClick={handleOpenSearchModle}>
        <span className="search-btn">
          <SvgIcon icon={iconSesrch} />
        </span>
      </div>
      {searchModle && (
        <div
          className="modal fade modal-search show"
          id="modal-search"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", paddingRight: "21px" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-search-form">
                <span>
                  <img src={assImages.bgSearch} alt="" />
                </span>
                <span className="close" onClick={handleClose}>
                  <i
                    className="fa-solid fa-xmark"
                    style={{ color: "#c3c6d1" }}
                  />
                </span>
                <span className="sub-title">
                  Đặt Đồ ăn, giao hàng từ 20'... có 43264 địa điểm ở Hà Nội từ
                  00:00 - 23:59
                </span>
                <form>
                  <input className="search-input" type="text" />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Searchpro;
