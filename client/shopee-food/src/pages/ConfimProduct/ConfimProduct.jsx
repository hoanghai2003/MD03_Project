import Header from "../../components/Layout/DefauLayout/Header/Header";
import Footer from "../../components/Layout/DefauLayout/Footer/Footer";
import ScrollBar from "../../components/Layout/DefauLayout/ScrollBar/ScrollBar";
import AntDesign from "./AntDesign";
import AntDesignTow from "./AntDesignTow";
import AntDesignThree from "./AntDesignThree";
import "./ConfimProduct.css";
import assImages from "../../asset/images/images";

function ConfimProduct() {
  return (
    <div>
      <Header />
      {/*  */}
      <div className="container-Confim">
        <div className="confim-left">
          <div className="confim-rgb">
            <div className="tt-confim">
              <div className="tt-cfim">
                <span className="fontsize">Thông tin giao hàng</span>
              </div>
              <div className="ht-confim">
                <span className="mbot">Họ tên</span>
                <input
                  className="inp-confim"
                  type="text"
                  placeholder="Họ tên"
                  name=""
                  id=""
                />
              </div>
              <div className="ht-confim">
                <span className="mbot">Số điện thoại </span>
                <input
                  className="inp-confim"
                  type="text"
                  placeholder="Xin vui lòng nhập số điện thoại của bạn "
                />
              </div>
            </div>
            <div className="address-confim">
              <div className="ht-confim">
                <span className="mbot">Địa chỉ nhận hàng</span>
                <input
                  className="inp-confim"
                  type="text"
                  placeholder="Vui lòng nhập địa chỉ của bạn "
                />
              </div>

              <div className="city-confim">
                <span>Tỉnh/ Thành phố</span>
                <div>
                  <AntDesign />
                </div>
              </div>
              <div className="city-confim">
                <span>Quận/ Huyện</span>
                <div>
                  <AntDesignTow />
                </div>
              </div>
              <div className="city-confim">
                <span>Phường/ Xã</span>
                <div>
                  <AntDesignThree />
                </div>
              </div>

              <div className="select-confim">
                <div className="mgbotom">
                  <span>Lựa chọn tên cho địa chỉ thường dùng:</span>
                </div>
                <div className="home-vp-btn">
                  <button className="btn-confim vp">
                    <i className="fa-solid fa-briefcase"></i>
                    <p className="cfim">Văn Phòng</p>
                  </button>
                  <button className="btn-confim home">
                    <i className="fa-solid fa-house"></i>
                    <p className="cfim">Nhà riêng</p>
                  </button>
                </div>
              </div>
              <div className="save">
                <button className="btn-save">Lưu</button>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="confim-bot">
              <div>
                <span className="cals">Gói hàng 1 của 1</span>
              </div>
              <div className="shipperr">
                <p className="fontconfim">Được giao bởi:</p>
                <h3 className="fontconfim">Nguyen Van Quy</h3>
              </div>
            </div>
            <div className="bot-cfim">
              <div className="pd-cofim">
                <span>Tùy chọn giao hàng</span>
              </div>
              <div className="pd-cofimm">
                <div className="btn-bot">
                  <div className="ckeck-cfn">
                    <input className="ipt-check" type="checkbox" />
                    <div className="check-cfim">
                      <p>19.300đ</p>
                      <p>GH tiêu chuẩn</p>
                      <p>Nhận vào:7-9 thg 6</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="img-bot">
                <div className="img-confim">
                  <img className="img-cfn" src={assImages.bunBo} alt="" />
                </div>
                <div>
                  <span>Muối chanh ớt xanh Nha Trang Dasavi 260g</span>
                </div>

                <div>
                  <span className="prc-cfn">20.000đ</span>
                </div>
                <div>
                  <span>
                    Số lượng: <strong>1</strong>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="confim-right">
          <div className="cfn-right">
            <div className="text-righ">
              <button className="wh-righ">Đặt Hàng</button>
            </div>
            <div className="pttt-righ">
              <span>Chọn phương thức thanh toán</span>
              <a href="">
                Xem tất Cả <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            {/*  */}
            <div className="dpl-righ">
              <div className="price-right">
                <div className="dpl-tt">
                  <img className="img-wh" src={assImages.priceWebp} alt="" />
                  <span>Thanh toán khi nhận hàng </span>
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="bder-top"></div>
              <div className="rigtt-tt">
                <span>Thanh toán khi nhận hàng</span>
              </div>
            </div>
            {/*  */}

            <div className="dpl-righ">
              <div className="price-right">
                <div className="dpl-tt">
                  <img className="img-wh" src={assImages.Zalo_pay} alt="" />
                  <span>Ví ZaloPay </span>
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="bder-top"></div>
              <div className="rigtt-tt">
                <span>Kết nối TK ZaloPay</span>
              </div>
            </div>
            {/*  */}
            <div className="mgt-mgl sell">
              <span>Mã giảm giá</span>
            </div>
            <div className="mgt-mgl">
              <input
                className="inp-righ"
                type="text"
                placeholder="Nhập mã giảm giá (mã chỉ áp dụng một lần)"
              />
              <button className="btn-righ">Áp dụng</button>
            </div>
            <div className="mgt-mgl linka">
              <span> Thông tin liên hệ và hóa đơn</span>
              <a href="">Edit</a>
            </div>
            <div>
              <p className="tt-hh">Thông tin đơn hàng</p>
            </div>
            <div className="mgt-mgl linka">
              <span>Tạm tính (1 Sản phẩm)</span>
              <p>20.000đ</p>
            </div>
            <div className="mgt-mgl linka bd-bot">
              <span>Phí vận chuyển</span>
              <p>19.300đ</p>
            </div>
            <div className="mgt-mgl linka with ">
              <span className="font-right">Tổng cộng:</span>
              <strong className="font-right">39.300đ</strong>
            </div>
            <div className="text-alg">
              <button className="btn-right">Đặt hàng</button>
            </div>
          </div>
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

export default ConfimProduct;
