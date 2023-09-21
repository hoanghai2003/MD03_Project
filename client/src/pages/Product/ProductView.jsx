import assImages from "../../asset/images/images";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { notification } from "antd";
import axios from "axios";

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const UserLocal = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const fomatDate = (date) => {
    let dateTime = new Date(date);
    let day = dateTime.getDay();
    if (day > 0 && day < 10) {
      day = `0${day}`;
    }
    console.log(day);
    let month = dateTime.getMonth() + 1;
    if (month > 0 && month < 10) {
      month = `0${month}`;
    }
    let year = dateTime.getFullYear();

    return `${year}-${month}-${day}`;
  };

  // Tạo số ngẫu nhiên từ 5000 đến 15000
  const min = 5000;
  const max = 15000;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Goi API lay thong tin mot product theo id
  useEffect(() => {
    fetch(`http://localhost:3003/api/v1/product/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error retrieving product data");
        }
      })
      .then((data) => {
        setProduct(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const newCart = {
    product_id: +id,
    quantity: 1,
    users_id: UserLocal?.data?.users_id,
    created_date: fomatDate(new Date()),
    price_ship: randomNumber,
  };

  // Thêm sản phẩm vào giỏ hàng
  const handlePust = async () => {
    if (UserLocal && UserLocal.data && UserLocal.data.users_id) {
      await axios
        .post("http://localhost:3003/api/v1/cart/post", newCart)
        .then((res) => {
          if (res.data?.status === 200) {
            notification.success({
              message: res.data?.message,
            });
          } else if (res.data?.status === 201) {
            notification.success({
              message: res.data?.message,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("User information is missing");
    }
  };

  const handleLogin = () => {
    notification.error({
      message: "Lỗi",
      description: "Bạn cần đăng nhập hoặc đăng kí",
    });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      <div className="now-detail-restaurant clearfix">
        {product?.map((pr) => (
          <div className="container-profile" key={pr.product_id}>
            <div className="detail-restaurant-img">
              <img
                src={pr.img_product}
                alt={pr.name_product}
                className="img-product"
              />
            </div>
            <div className="detail-restaurant-info">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" rel="nofollow" href="/">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" rel="nofollow" href="">
                      {pr.city}
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" rel="nofollow" href="">
                      {pr.name_product}
                    </a>
                  </li>
                </ol>
              </nav>
              <div className="kind-restaurant">
                <span> Shop Online</span>
              </div>
              <h1 className="name-restaurant">{pr.name_product}</h1>
              <div className="address-restaurant">{pr.address_product}</div>
              <div className="rating">
                <div className="stars">
                  <span className="full">
                    <i className="fas fa-star" />
                  </span>
                  <span className="full">
                    <i className="fas fa-star" />
                  </span>
                  <span className="full">
                    <i className="fas fa-star" />
                  </span>
                  <span className="full">
                    <i className="fas fa-star" />
                  </span>
                  <span className="half">
                    <i className="fas fa-star-half-alt" />
                  </span>
                </div>
                <span className="number-rating">100+</span>đánh giá trên
                ShopeeFood
              </div>
              <div className="view-more-rating">
                <a
                  href=""
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  className="number-review"
                >
                  Xem thêm lượt đánh giá từ Foody
                </a>
              </div>
              <div className="status-restaurant">
                {pr.status_product ? (
                  <>
                    <div className="onl">
                      <span className="tt onll" title="Mở cửa"></span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="onl">
                      <span className="ttoff off" title="Đóng cửa"></span>
                    </div>
                  </>
                )}

                <div className="time">
                  <i className="far fa-clock" />
                  06:00 - 22:00
                </div>
              </div>
              <div className="dpl-fl">
                <div className="cost-restaurant">
                  {formatCurrency(pr.price_product)}
                </div>
                {UserLocal ? (
                  <div className="cost-restaurantt">
                    <NavLink to={`/ordernow/${id}`}>
                      <button className="btn-add">Đặt ngay</button>
                    </NavLink>
                    <NavLink>
                      <button className="btn-add add" onClick={handlePust}>
                        Thêm vào giỏ hàng
                      </button>
                    </NavLink>
                  </div>
                ) : (
                  <button className="btn-add" onClick={handleLogin}>
                    Đặt ngay
                  </button>
                )}

                {/*  */}
              </div>

              <div className="share-social clearfix">
                <div className="share-social-box">
                  <div className="fb-like" />
                </div>
              </div>
              <div className="utility-restaurant clearfix">
                <div className="utility-item">
                  <div className="utility-title">Phí dịch vụ</div>
                  <div className="utility-content">
                    <span className="txt-bold txt-red"> 0.0% Phí phục vụ </span>
                  </div>
                  <span className="icon icon-partner-vi">
                    <img
                      className="img-size"
                      src={assImages.partnerVi}
                      alt=""
                    />
                  </span>
                </div>
                <div className="utility-item">
                  <div className="utility-title">Dịch vụ bởi</div>
                  <div className="utility-content">
                    <span className="txt-bold txt-red">ShopeeFood</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductView;
