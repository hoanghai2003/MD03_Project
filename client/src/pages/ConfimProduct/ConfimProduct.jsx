import Header from "../../components/Layout/DefauLayout/Header/Header";
import Footer from "../../components/Layout/DefauLayout/Footer/Footer";
import ScrollBar from "../../components/Layout/DefauLayout/ScrollBar/ScrollBar";
import "./ConfimProduct.css";
import assImages from "../../asset/images/images";
import { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { useNavigate, useParams } from "react-router-dom";
function ConfimProduct() {
  const localData = JSON.parse(localStorage.getItem("user"));
  const [confimUser, setConfimUser] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  console.log(confimUser, "confimUser<----");

  const fee = 10000;
  const quantity = confimUser.reduce((total, order) => {
    return order.quantity + total;
  }, 0);
  const price = confimUser.reduce((total, price) => {
    return price.price_product + total;
  }, 0);

  const totalAmount = price * quantity;

  useEffect(() => {
    axios
      .get(
        `http://localhost:3003/api/v1/cart/confim/${localData.data.users_id}`
      )
      .then((res) => setConfimUser(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    // Giới hạn tối đa 10 ký tự
    if (inputPhoneNumber.length <= 10) {
      // Kiểm tra xem người dùng đã nhập số hay không
      const isNumeric = /^[0-9]*$/.test(inputPhoneNumber);
      if (isNumeric || inputPhoneNumber === "") {
        setPhoneNumber(inputPhoneNumber);
      }
    }
  };
  const newUser = {
    user_order: userName,
    phone_order: phoneNumber,
    address_order: address,
    total_order: totalAmount,
    user_id: localData.data.users_id,
    quantity_order: quantity,
    status_order: 0,
  };

  const handlePost = () => {
    // Kiểm tra xem các trường đã được điền đầy đủ hay không
    if (!userName || !phoneNumber || !address) {
      notification.error({
        message: "Lỗi",
        description: "Mời nhập đầy đủ thông tin để tiếp tục đặt hàng",
      });
      return;
    } else if (phoneNumber.length < 10) {
      notification.error({
        message: "Lỗi",
        description: "Mời nhập đầy đủ số điện thoại",
      });
      return;
    } else if (phoneNumber.length > 10) {
      notification.error({
        message: "Lỗi",
        description: "Số điện thoại sai",
      });
      return;
    }

    axios
      .post("http://localhost:3003/api/v1/order", newUser)
      .then((data) => {
        if (data.status == 200) {
          notification.success({
            message: "Thành công",
            description: "Đặt Hàng Thành công",
          });
          setTimeout(() => {
            navigate("/informaton");
          }, 2000);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      {/*  */}
      <div className="container-Confim">
        <div className="confim-left">
          <form action="">
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
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="ht-confim">
                  <span className="mbot">Số điện thoại </span>
                  <input
                    className="inp-confim"
                    type="text"
                    placeholder="Xin vui lòng nhập số điện thoại của bạn"
                    onChange={handlePhoneNumberChange}
                    value={phoneNumber}
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
                    onChange={(e) => setAddress(e.target.value)}
                  />
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
                {/* <div className="save">
                  <button className="btn-save">Lưu</button>
                </div> */}
              </div>
            </div>
          </form>

          {/*  */}

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
                      <p>10.000đ</p>
                      <p>GH tiêu chuẩn</p>
                      <p>Nhận vào:7-9 thg 6</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <>
                {confimUser.map((pr, index) => (
                  <div className="img-bot" key={index}>
                    <div className="img-confim">
                      <img className="img-cfn" src={pr.img_product} alt="" />
                    </div>
                    <div className="wh-vh">
                      <span>{pr.name_product}</span>
                    </div>

                    <div>
                      <span className="prc-cfn">
                        {formatCurrency(pr.price_product)}
                      </span>
                    </div>
                    <div>
                      <span>
                        Số lượng: <strong>{pr.quantity}</strong>{" "}
                      </span>
                    </div>
                  </div>
                ))}
              </>

              {/*  */}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="confim-right">
          <div className="cfn-right">
            {/* <div className="text-righ">
              <button className="wh-righ">Đặt Hàng</button>
            </div> */}
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
              <span>Tạm tính ({confimUser.length}) món</span>
              <p>{formatCurrency(totalAmount)}</p>
            </div>
            <div className="mgt-mgl linka bd-bot">
              <span>Phí vận chuyển</span>
              <p>{formatCurrency(fee)}</p>
            </div>
            <div className="mgt-mgl linka with ">
              <span className="font-right">Tổng cộng:</span>
              <strong className="font-right">
                {formatCurrency(totalAmount + fee)}
              </strong>
            </div>

            <div className="text-alg">
              <button className="btn-right" onClick={handlePost}>
                Đặt hàng
              </button>
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
