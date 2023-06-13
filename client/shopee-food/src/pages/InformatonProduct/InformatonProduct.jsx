import Footer from "../../components/Layout/DefauLayout/Footer/Footer";
import Header from "../../components/Layout/DefauLayout/Header/Header";
import "./InformatonProduct.css";

function InformatonProduct() {
  return (
    <>
      <Header />

      <div className="informaton-container">
        <div className="now-incoming incoming-full"></div>

        <h1 className="block-title mb-4 text-center">Thông tin đơn hàng</h1>
        <div className="history-switch">
          <div className="item now active">ShopeeFood</div>
        </div>
        <div className="history-table-container">
          <div className="filter-table">
            <div className="filter-table-item ">
              <div className="text-nowrap">
                <span className="filter-table-label">Trạng thái</span>
                <select name="" className="form-control filter-table-input">
                  <option value={-1} selected="">
                    All
                  </option>
                  <option value={4}>Hoàn tất</option>
                  <option value={8}>Hủy</option>
                </select>
              </div>
            </div>
            <div className="filter-table-item">
              <div className="text-nowrap">
                <span className="filter-table-label">Từ ngày</span>
                <input type="date" className="flatpickr-input" />
              </div>
            </div>
            <div className="filter-table-item">
              <div className="text-nowrap">
                <span className="filter-table-label">Đến ngày</span>
                <input
                  mindate="Sun Jun 04 2023 00:06:43 GMT+0700 (Giờ Đông Dương)"
                  type="date"
                  className="flatpickr-input"
                />
              </div>
            </div>
            <div className="filter-table-item">
              <button type="button" className="btn-bt btn-sm">
                Tìm kiếm
              </button>
            </div>
          </div>
          <div className="history-table">
            <div className="history-table-row history-table-heading">
              <div className="history-table-cell history-table-col1">STT</div>
              <div className="history-table-cell history-table-col2">
                Mã đơn hàng
              </div>
              <div className="history-table-cell history-table-col3">
                Thời gian
              </div>
              <div className="history-table-cell history-table-col4">
                Địa điểm
              </div>
              <div className="history-table-cell history-table-col5">
                Nhân viên
              </div>
              <div className="history-table-cell history-table-col6">
                Tổng tiền
              </div>
              <div className="history-table-cell history-table-col7">
                Trạng thái
              </div>
              <div className="history-table-cell history-table-col8">
                Chi tiết
              </div>
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
    </>
  );
}

export default InformatonProduct;
