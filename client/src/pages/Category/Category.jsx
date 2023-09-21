import Header from "../../components/Layout/DefauLayout/Header/Header";
import ScrollBar from "../../components/Layout/DefauLayout/ScrollBar/ScrollBar";
import Footer from "../../components/Layout/DefauLayout/Footer/Footer";
import "./Category.css";
import assImages from "../../asset/images/images";
function Category() {
  return (
    <div>
      <Header />
      <div className="container-category">
        <div className="category-reder">
          <div className="kvpl-category">
            <div className="kv-ctgr">
              <span>KHU VỰC</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className="kv-ctgr">
              <span>PHÂN LOẠI</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>

          <div className="kq-category">
            <span className="kq-mgr">200 Kết Quả</span>
            <select className="filter-sort">
              <option value={8}>Đúng nhất</option>
              <option value={3}>Gần tôi</option>
              <option value={36}>Đánh giá</option>
              <option value={35}>Bán chạy</option>
              <option value={37}>Giao nhanh</option>
            </select>
          </div>
        </div>
        <div className="tag-filter">
          <div className="widget-tag">
            Từ khóa: <span className="key-word">a</span>
            <span className="btn-delete-tag">x</span>
          </div>
        </div>
      </div>
      <div className="container-prod">
        {/* produt */}
        <div className="item-restaurantt">
          <a target="_blank" className="item-content" href="">
            <div className="img-restaurant">
              <div className="tag-preferred">
                <i className="fa fa-thumbs-up" />
                Yêu thích
              </div>
              <img src={assImages.bunBo} className="" />
            </div>
            <div className="info-restaurant">
              <div className="info-basic-res">
                <h4
                  className="name-ress"
                  title="Bánh Mì Huynh Hoa - Bánh Mì Pate"
                >
                  <span
                    className="icon icon-quality-merchant"
                    title="Đây là 1 trong những Merchants được đánh giá cao trong ShopeeFood"
                  >
                    <img
                      className="listFoodThree"
                      src={assImages.listFoodThree}
                      alt=""
                    />
                  </span>
                  Bánh Mì Huynh Hoa - Bánh Mì Pate
                </h4>
                <div
                  className="address-res"
                  title="26 Lê Thị Riêng, P. Bến Thành, Quận 1, TP. HCM"
                >
                  26 Lê Thị Riêng, P. Bến Thành, Quận 1, TP. HCM
                </div>
              </div>
              <p className="content-promotion">
                <i className="fas fa-tag" /> Giảm món
              </p>
              <div className="opentime-status">
                <span className="stt online" title="Mở cửa" />
              </div>
            </div>
          </a>
        </div>
        {/*  */}
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

export default Category;
