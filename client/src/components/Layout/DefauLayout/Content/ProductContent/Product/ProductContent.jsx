import "./ProductContent.css";
import ContentExtra from "./ContentExtra";
import ListProduct from "./ListProduct";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function ProductContent({ titleCateory, param }) {
  // useEffect(() => {
  //   axios("");
  // }, []);
  return (
    <div className="main-right-home">
      <div className="user-get-local">
        <div className="row align-items-center no-gutters pointer">
          {param ? (
            <>
              {titleCateory.map((title) => (
                <div className="col-auto">
                  <span className="txt-blue txt-bold">
                    {title.category_name}
                  </span>
                  <i className="fas fa-long-arrow-alt-right txt-gray-7 ml-2 font12"></i>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="col-auto">
                <span className="txt-blue txt-bold">Tất Cả</span>
                <i className="fas fa-long-arrow-alt-right txt-gray-7 ml-2 font12"></i>
              </div>
            </>
          )}

          <div className="col-pro pl-2 pr-2 txt-elipsis">
            Chọn địa chỉ giao hàng
          </div>
          <div className="col-auto">
            <span className="link-right">
              <i className="fas fa-angle-right txt-gray-7"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="now-list-restaurant deal-tab">
        <div className="title-wrapper">
          <h2 className="title">Ưu đãi</h2>
          <a className="view-all-deal" href="https://example.com">
            <span className="icon-list-deal">
              <span className="square"></span>
              <span className="square"></span>
              <span className="square"></span>
              <span className="square"></span>
            </span>
            Xem tất cả
          </a>
        </div>
        <div className="list-restaurant">
          {/* list-product */}
          <ListProduct />
          {/*  */}
        </div>
        <div className="txt-center mt-2">
          <button className="btn-none btn-load-more link">
            <span className="pr-1">Xem thêm</span>
            <i className="fas fa-redo font13 "></i>
          </button>
        </div>
      </div>
      <div className="div">
        <ContentExtra />
      </div>
      {/*  */}
    </div>
  );
}

export default ProductContent;
