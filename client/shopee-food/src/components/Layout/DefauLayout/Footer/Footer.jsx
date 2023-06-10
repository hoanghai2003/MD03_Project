import assImages from "../../../../asset/images/images";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="block-footer">
          <p className="title-block">Công ty</p>
          <ul className="menu-footer">
            <li className="menu-item">
              <a className="color-a" href="">
                Giới thiệu
              </a>
            </li>
            <li className="menu-item">
              <a className="color-a" href="">
                Trung tâm Trợ giúp
              </a>
            </li>
            <li className="menu-item">
              <a className="color-a" href="">
                Quy chế
              </a>
            </li>
            <li className="menu-item">
              <a className="color-a" href="">
                Điều khoản sử dụng
              </a>
            </li>
            <li className="menu-item">
              <a className="color-a" href="">
                Bảo mật thông tin
              </a>
            </li>
            <li className="menu-item">
              <a className="color-a" href="">
                Giải quyết khiếu nại
              </a>
            </li>
            <li className="menu-item">
              <a className="color-a" href="">
                Liên hệ
              </a>
            </li>
            <li className="menu-item">
              <a className="color-a" href="">
                Hợp tác nhân viên giao nhận
              </a>
            </li>
            <li className="menu-item">
              <a className="color-a" href="">
                Đăng ký quán
              </a>
            </li>
            <li className="menu-item">
              <a className="color-a" href="">
                ShopeeFood Uni
              </a>
            </li>
            <li className="menu-item">
              <a className="color-a" href="">
                Shopee Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="tag-footer">
          <p className="title-block">Ứng dụng ShopeeFood</p>
          <a className="color-a apps" href="">
            <img className="img-footer" src={assImages.AppStoreVn} alt="" />
          </a>
          <a className="color-a apps" href="">
            <img className="img-footer" src={assImages.PlayStoreVn} alt="" />
          </a>
          <a className="color-a apps" href="">
            <img className="img-footer" src={assImages.HuaweiVn} alt="" />
          </a>
        </div>

        <div className="log-footer">
          <div className="log">
            <a className="color-a" href="">
              <img
                className="logo-shopee"
                src={assImages.LogoShopeefoodVN}
                alt=""
              />
            </a>
          </div>
          <p className="font13">
            Hải Bánh <br></br>© 2023 ShopeeFood
          </p>

          <ul className="social-ico">
            <li>
              <a className="color-a" href="">
                <span className="facebook ico">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </a>
            </li>
            {/* ita */}
            <li>
              <a className="color-a" href="">
                <span className="instagram ico">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="blog-right">
          <p className="title-block">Địa chỉ công ty</p>
          <span>
            <p>Công Ty Cổ Phần Foody</p>
            <p>Lầu G, Tòa nhà Jabes 1,</p>
            <p>số 244 đường Cống Quỳnh, phường Phạm Ngũ Lão, Quận 1, TPHCM</p>
            <p>Giấy CN ĐKDN số: 0311828036</p>
            <p>do Sở Kế hoạch và Đầu tư TP.HCM cấp ngày 11/6/2012,</p>
            <p>sửa đổi lần thứ 23, ngày 10/12/2020</p>
            <p>Chịu trách nhiệm quản lý nội dung: Nguyễn Hồ Quảng Giang</p>
            <p>Điện thoại liên hệ: 028 71096879</p>
            <p>
              Email:{" "}
              <a className="color-a" href="">
                support@shopeefood.vn
              </a>
            </p>
          </span>

          <span className="registered">
            <a className="color-a" href="">
              <img className="img-cofim" src={assImages.govSeals1} alt="" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
