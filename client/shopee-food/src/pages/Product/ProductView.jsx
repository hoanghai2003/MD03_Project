import { NavLink, useParams } from "react-router-dom";
import assImages from "../../asset/images/images";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const UserLocal = JSON.parse(localStorage.getItem("user"));

  // Goi API lay thong tin mot product theo id
  useEffect(() => {
    axios
      .get(`http://localhost:3003/api/v1/product/${id}`)
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="now-detail-restaurant clearfix">
        {product.map((pr) => (
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
                  <i className="fas fa-dollar-sign" />
                  {pr.price_product}
                </div>
                {UserLocal ? (
                  <div className="cost-restaurantt">
                    {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                    <NavLink to="/confim">
                      <button className="btn-add">Đặt ngay</button>
                    </NavLink>
                    <NavLink to="/grub">
                      <button className="btn-add add">Thêm vào giỏ hàng</button>
                    </NavLink>
                  </div>
                ) : (
                  <NavLink to="/confim">
                    <button className="btn-add">Đặt ngay</button>
                  </NavLink>
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