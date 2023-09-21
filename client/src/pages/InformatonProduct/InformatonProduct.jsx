import { useEffect, useState } from "react";
import assImages from "../../asset/images/images";
import Footer from "../../components/Layout/DefauLayout/Footer/Footer";
import Header from "../../components/Layout/DefauLayout/Header/Header";
import "./InformatonProduct.css";
import axios from "axios";

function InformatonProduct() {
  const localData = JSON.parse(localStorage.getItem("user"));
  console.log(localData);
  const [dataBases, setDataBase] = useState([]);

  const fee = 10000;

  useEffect(() => {
    axios
      .get(`http://localhost:3003/api/v1/order/${localData.data.users_id}`)
      .then((res) => setDataBase(res.data))
      .catch((err) => console.log(err));
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

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
          {/*  */}
          <div className="history-table"></div>
          {/*  thông tin đơn hàng */}
          <table className="table-us">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên người đặt hàng {""} / số lượng</th>
                <th>Thời gian đặt</th>
                <th>Địa điểm giao đến</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
                <th>Yêu cầu</th>
              </tr>
            </thead>
            <tbody>
              {dataBases.map((dataBase) => (
                <tr className="row3">
                  <td>{dataBase.order_id}</td>
                  <td className="oder-food">
                    <div className="fonsize-wh">
                      <div style={{ marginRight: "10px" }}>
                        {dataBase.user_order}
                      </div>
                      /
                      <div style={{ marginLeft: "15px" }}>
                        {dataBase.quantity_order}
                      </div>
                    </div>
                  </td>
                  <td>11:00</td>
                  <td>{dataBase.address_order}</td>
                  <td>{formatCurrency(dataBase.total_order + fee)}</td>
                  <td>
                    {dataBase.status_order === 0 ? (
                      <>
                        <span className="fnt-hei">Chờ xác nhận</span>
                      </>
                    ) : (
                      <>
                        {" "}
                        <span className="fnt-hei">Đang giao</span>
                      </>
                    )}
                  </td>
                  <td>
                    <button className="delete-info">
                      <div className="displ">
                        <i className="fa-solid fa-xmark"></i>
                        <span>Huỷ Đơn</span>
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/*  thông tin đơn hàng */}

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
    </>
  );
}

export default InformatonProduct;
