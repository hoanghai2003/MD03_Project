import { NavLink } from "react-router-dom";
import assImages from "../../asset/images/images";
import Footer from "../../components/Layout/DefauLayout/Footer/Footer";
import Header from "../../components/Layout/DefauLayout/Header/Header";
import ScrollBar from "../../components/Layout/DefauLayout/ScrollBar/ScrollBar";
import "./Product.css";
import ProductView from "./ProductView";
import ItemProduct from "./ItemProduct";

function Product() {
  return (
    <div>
      <Header />
      <div className="container-product">
        {/* đưa ra giữa */}

        {/* productview */}
        <ProductView />
        {/*  */}

        {/*menuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu */}
        <div className="container-list relative clearfix">
          {/* menu */}
          <div className="now-menu-restaurant">
            <div className="menu-restaurant-tab">
              <div className="item active">Thực đơn</div>
            </div>
            <div className="menu-restaurant-content-tab">
              <div className="menu-restaurant-container">
                <div className="menu-restaurant-category">
                  <div className="list-category">
                    <div className="scrollbar-container ps">
                      <div className="item">
                        <span title="Món Đang Giảm" className="item-link ">
                          Món Đang Giảm
                        </span>
                      </div>
                      <div className="item">
                        <span title="MÓN CHÍNH" className="item-link active">
                          MÓN CHÍNH
                        </span>
                      </div>
                      <div className="item">
                        <span title="MÓN THÊM" className="item-link ">
                          MÓN THÊM
                        </span>
                      </div>
                      <div className="item">
                        <span title="COMBO" className="item-link ">
                          COMBO
                        </span>
                      </div>
                      <div className="item">
                        <span title="ĐỒ UỐNG" className="item-link ">
                          ĐỒ UỐNG
                        </span>
                      </div>
                      <div
                        className="ps__rail-x"
                        style={{ left: 0, bottom: 0 }}
                      >
                        <div
                          className="ps__thumb-x"
                          tabIndex={0}
                          style={{ left: 0, width: 0 }}
                        />
                      </div>
                      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                        <div
                          className="ps__thumb-y"
                          tabIndex={0}
                          style={{ top: 0, height: 0 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-restaurant-detail">
                  <div className="promotions-order">
                    <div id="promotion-item" className="promotion-item">
                      <div>
                        <img
                          src={assImages.shopeefoodCart}
                          alt="Thanh toán thẻ tín dụng Home Credit: Giảm 40K, đơn tối thiểu 100K vào tất cả các ngày trong tuần. Áp dụng cho lần đầu thanh toán bằng thẻ Home Credit trên ShopeeFood"
                          className="icon-promotion"
                        />
                        <div className="contentt">
                          Thanh toán thẻ tín dụng Home Credit: Giảm 40K, đơn tối
                          thiểu 100K vào tất cả các ngày trong tuần. Áp dụng cho
                          lần đầu thanh toán bằng thẻ Home Credit trên
                          ShopeeFood
                        </div>
                      </div>
                      <button className="code-copy">
                        <span className="promo_HOMECRE40K">Copy code</span>
                        <span className="fa fa-copy" />
                      </button>
                    </div>
                    <div className="promotion-item">
                      <div>
                        <img
                          src={assImages.shopeefoodCart}
                          alt="Thanh toán thẻ Visa. Giảm 50K cho đơn từ 150K vào tất cả các ngày trong tuần. Áp dụng cho lần đầu thanh toán bằng thẻ Visa trên ShopeeFood"
                          className="icon-promotion"
                        />
                        <div className="contentt">
                          Thanh toán thẻ Visa. Giảm 50K cho đơn từ 150K vào tất
                          cả các ngày trong tuần. Áp dụng cho lần đầu thanh toán
                          bằng thẻ Visa trên ShopeeFood
                        </div>
                      </div>
                      <button className="code-copy">
                        <span className="promo_VISA50">Copy code</span>
                        <span className="fa fa-copy" />
                      </button>
                    </div>
                    <div className="promotion-item">
                      <img
                        src={assImages.shopeefoodCart}
                        alt="Giảm giá một số món ăn trên menu"
                        className="icon-promotion"
                      />
                      <div className="contentt">
                        Giảm giá một số món ăn trên menu
                      </div>
                    </div>
                  </div>
                  <div className="menu-restaurant-list">
                    <div className="search-items">
                      <p className="input-group">
                        <i className="fas fa-search" />
                        <input type="search" placeholder="Tìm món" />
                      </p>
                    </div>
                    <div>
                      <div
                        className="ReactVirtualized__Grid ReactVirtualized__List"
                        tabIndex={0}
                      >
                        <div className="ReactVirtualized__Grid__innerScrollContainer">
                          <div className="menu-group">
                            <div className="title-menu">Combo</div>
                          </div>
                          {/*  */}
                          <ItemProduct />
                          {/*  */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* QRcode */}
          <div className="QRcode" id="QRcode">
            <canvas />
            <img className="img-qrcode" src={assImages.qrcode} alt="" />
            <div className="qrcode">
              Quét mã để đặt món <br /> trên app Shopee
            </div>
          </div>

          {/*  */}
        </div>
      </div>
      {/*  */}
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

export default Product;
