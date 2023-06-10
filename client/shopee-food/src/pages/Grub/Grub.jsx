import Header from "../../components/Layout/DefauLayout/Header/Header";
import ScrollBar from "../../components/Layout/DefauLayout/ScrollBar/ScrollBar";
import Footer from "../../components/Layout/DefauLayout/Footer/Footer";

import "./Grub.css";
import assImages from "../../asset/images/images";
import GrubProduct from "./GrubProduct";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Grub() {
  const [grubProduct, setGrubProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Giảm số lượng
  const handleReduce = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Tăng số lượng
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3003/api/v1/cart")
      .then((res) => setGrubProduct(res.data.user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="block-section">
        <div className="container-grub">
          {grubProduct.map((grubProduct) => (
            <div className="lzd-grub">
              <div className="grub-left">
                <div className="check-grub">
                  <div className="check-click">
                    <input type="checkbox" />
                    <span className="select-all">CHỌN TẤT CẢ (1 SẢN PHẨM)</span>
                  </div>
                  <div className="delete-check">
                    <i className="fa-solid fa-trash-can"></i>
                    <span className="delete">Xoá</span>
                  </div>
                </div>
                <div className="hide-product">
                  <div className="hide-click">
                    <div className="check-click">
                      <input type="checkbox" />
                      <span className="sanpham">
                        <img
                          className="ig-sp"
                          src={assImages.store_grub}
                          alt=""
                        />
                        <p>Hoang Hai</p>
                        <i className="fa-solid fa-chevron-right"></i>
                      </span>
                    </div>
                    <div className="no"></div>
                  </div>
                  {/*  */}
                  <div className="product-grub">
                    <div className="sp-grb">
                      <input type="checkbox" />
                      <img
                        className="img-grb"
                        src={grubProduct.img_product}
                        alt=""
                      />
                      <span className="title-grb">
                        {grubProduct.name_product}
                      </span>
                    </div>
                    <span className="price">
                      <p className="prc-grb">
                        {" "}
                        {quantity > 0
                          ? grubProduct.price_product * quantity
                          : grubProduct.price_product}
                        đ
                      </p>
                      <div className="delete-pro">
                        <i className="fa-sharp fa-regular fa-heart"></i>
                        <i className="fa-sharp fa-solid fa-heart"></i>
                        <i className="fa-solid fa-trash-can hire"></i>
                      </div>
                    </span>

                    <div className="cout-product">
                      <button onClick={handleReduce} className="btn-grb">
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <input
                        min={0}
                        className="ipt-grb"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                      />
                      <button onClick={handleIncrease} className="btn-grb">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
              <div className="grub-right">
                <div className="right-grb">
                  <span>Địa điểm</span>
                </div>
                <div className="addres-grb">
                  <i className="fa-sharp fa-solid fa-location-dot grb-adr"></i>
                  <p className="p-grb">Add Shipping Address</p>
                </div>
                <div className="tt-grtb">
                  <span className="tt-grb">Thông tin đơn hàng</span>
                </div>
                <div className="count-grb">
                  <p className="grbt-tt">Tạm tính (1 sản phẩm)</p>
                  <span>20.000đ</span>
                </div>
                <div className="fee-grb">
                  <p className="grbt-tt">Phí vận chuyển</p>
                  <span>19.300 đ</span>
                </div>
                <div className="inp-right">
                  <input
                    type="text"
                    placeholder="Mã giảm giá (mã chỉ áp dụng 1lần)"
                  />
                  <button className="ad-grb">Áp dụng</button>
                </div>
                <div className="fee-grb">
                  <p>Tổng cộng</p>
                  <span>39.300 đ</span>
                </div>
                <div className="bop-grbt">
                  <NavLink to="/confim">
                    <button className="btn-grbt">Xác nhận giỏ hàng(1)</button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer
        className="footer"
        style={{
          width: "960px",
          marginRight: "auto",
          marginLeft: "auto",
          height: "100%",
        }}
      >
        <Footer />
      </footer>
      <ScrollBar />
    </div>
  );
}

export default Grub;
