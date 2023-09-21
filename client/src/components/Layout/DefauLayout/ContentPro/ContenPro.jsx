import assImages from "../../../../asset/images/images";
import "./ContentPro.css";
import CustomerMode from "./CustomerMode";

function ContentPro() {
  return (
    <>
      <div className="now-container-coporation">
        <h4 className="title">
          <span>Đơn hàng của bạn sẽ được bảo quản như thế nào?</span>
        </h4>
        <span>
          <p className="font15">
            ShopeeFood sẽ bảo quản đơn của bạn bằng túi &amp; thùng để chống
            nắng mưa, giữ nhiệt... trên đường đi một cách tốt nhất.
          </p>
        </span>
        <img className="img-preservation" src={assImages.Preservation} alt="" />
      </div>

      <div className="now-container-coporation img-right">
        <h4 className="title">
          <span>Ứng dụng Shopee Partner</span>
        </h4>
        <span>
          <p className="font14">
            - <b>Ứng dụng Shopee Partner</b>
            là ứng dụng quản lý đơn hàng cho các nhà hàng đối tác của dịch vụ
            đặt món tận nơi
          </p>
          <p className="font14">
            - <b>ShopeeFood.vn</b>
            luôn sẵn sàng hợp tác với các nhà hàng, quán ăn, cafe... để mở rộng
            kinh doanh cũng như gia tăng khách hàng. Hãy kết nối vào hệ thống
            đặt và giao hàng để giảm bớt chi phí quản lý, vận hành, marketing,
            công nghệ... <br></br>
            Đăng ký tham gia:
            <b>
              <a href="" target="_blank">
                tại đây
              </a>
            </b>
          </p>
        </span>
        <div className="bg-corporation">
          <img className="img-PhoneReg" src={assImages.PhoneReg} alt="" />
        </div>
      </div>

      <div className="now-container-coporation img-red">
        <h4 className="title">
          <a href="">
            <span>
              <span
                style={{
                  color: "#EE4D2D",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                ShopeeFood.vn
              </span>
              Hợp tác nhân viên giao nhận - ShopeeFood Driver
            </span>
          </a>
        </h4>
        <span>
          <p className="font16">
            Giúp bạn tăng thu nhập trong thời gian rảnh rỗi
          </p>
          <p className="fontsize-p">
            <span
              style={{
                color: "#EE4D2D",
                fontWeight: "bold",
                fontSize: "12px",
                marginRight: "5px",
              }}
            >
              ShopeeFood
            </span>
            tìm kiếm hợp tác với các cá nhân để thực hiện việc giao hàng, chúng
            tôi sẽ cung cấp ứng dụng (app), 1 số dụng cụ cần thiết để bạn có thể
            tiếp nhận &amp; giao hàng, kiếm thêm thu nhập
            <br></br>
            Đăng ký tham gia
            <a
              href="https://shopeefood.vn/tuyen-dung"
              style={{ color: "#4D77A2", fontWeight: "bold" }}
            >
              "tại đây"
            </a>
            hoặc gửi Email qua
            <a
              href="mailto:tuyendung@gofast.vn"
              style={{ color: "#4D77A2", fontWeight: "bold" }}
            >
              "tuyendung@gofast.vn"
            </a>
            - hoặc gọi qua số điện thoại (098) 88888888.
          </p>
        </span>
        <div className="bg-corporation">
          <img
            className="img-bgDeliverynow"
            src={assImages.bgDeliverynow}
            alt=""
          />
        </div>
      </div>
      <div className="CustomerMode">
        <CustomerMode />
      </div>
      <div className="seo-footer-link">
        <p className="seo-footer-link__head">Danh mục</p>
        <div className="seo-footer-link__body">
          <div className="seo-footer-link__item">
            <a href="">
              <p className="seo-footer-link__title">Thuốc</p>
            </a>
            <ul className="seo-footer-link__sub-item-wrapper">
              <a href="" className="seo-footer-link__sub-item">
                Hoá mỹ phẩm
              </a>
              <a href="" className="seo-footer-link__sub-item">
                BCS
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Thiết bị
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Thuốc tây
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Khẩu trang
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Khẩn cấp
              </a>
            </ul>
          </div>
          <div className="seo-footer-link__item">
            <a href="">
              <p className="seo-footer-link__title">Đồ ăn HN</p>
            </a>
            <ul className="seo-footer-link__sub-item-wrapper">
              <a href="" className="seo-footer-link__sub-item">
                Đồ ăn HN
              </a>
            </ul>
          </div>
          <div className="seo-footer-link__item">
            <a href="">
              <p className="seo-footer-link__title">Đặt bàn HN</p>
            </a>
            <ul className="seo-footer-link__sub-item-wrapper"></ul>
          </div>

          <div className="seo-footer-link__item">
            <a href="">
              <p className="seo-footer-link__title">Sản phẩm</p>
            </a>
            <ul className="seo-footer-link__sub-item-wrapper">
              <a href="" className="seo-footer-link__sub-item">
                Mỹ Phẩm
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Đồ chơi
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Sữa
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Tã bỉm
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Dụng cụ
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Quần áo
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Giảy dép
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Điện tử
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Trang sức
              </a>
            </ul>
          </div>
          {/*  */}
          <div className="seo-footer-link__item">
            <a href="">
              <p className="seo-footer-link__title">Đồ dùng </p>
            </a>
            <ul className="seo-footer-link__sub-item-wrapper"></ul>
          </div>
          {/*  */}
          <div className="seo-footer-link__item">
            <a href="">
              <p className="seo-footer-link__title">Hoa</p>
            </a>
            <ul className="seo-footer-link__sub-item-wrapper">
              <a href="" className="seo-footer-link__sub-item">
                Chia buồn
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Cây cảnh
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Chúc mừng
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Sinh nhật
              </a>
              <a href="" className="seo-footer-link__sub-item">
                Tình yêu
              </a>
            </ul>
          </div>
          {/*  */}
        </div>
        <hr />
      </div>
    </>
  );
}

export default ContentPro;
