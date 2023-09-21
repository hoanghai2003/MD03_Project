import { useState } from "react";
import "./ContentExtra.css";
import ListContent from "./ListContent";
import { useEffect } from "react";
import axios from "axios";

function ContentExtra() {
  const [deliveryTime, setDeliveryTime] = useState([]);
  const [dataDeliveryTime, setDataDeliveryTime] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/api/v1/deliverytime")
      .then((res) => setDeliveryTime(res.data.user))
      .catch((err) => console.log(err));
  }, []);

  function handleClick(id) {
    axios
      .get(`http://localhost:3003/api/v1/deliverytime/${id}`)
      .then((res) => setDataDeliveryTime(res.data.user))
      .catch((err) => console.log(err));
  }

  return (
    <div className="now-list-restaurant now-list-restaurant-row home-tab">
      <div className="header-tab row align-items-center">
        <div className="col-lll">
          {deliveryTime.map((data, index) => (
            <button
              onClick={() => handleClick(data.delivery_time_id)}
              key={index}
              className="item-tab false"
            >
              {data.delivery_time_name}
            </button>
          ))}
        </div>
        <div className="col-auto">
          <select name="">
            <option value="">Chọn quận/ huyện</option>
            <option value="">Ba Đình</option>
            <option value="">Cầu Giấy</option>
            <option value="">Đống Đa</option>
            <option value="">Hà Đông</option>
            <option value="">Hai Bà Trưng</option>
            <option value="">Hoàn Kiếm</option>
            <option value="">Hoàng Mai</option>
            <option value="">Long Biên</option>
            <option value="">Tây Hồ</option>
            <option value="">Thanh Xuân</option>
            <option value="">Gia Lâm</option>
            <option value="">Hoài Đức</option>
            <option value="">Thanh Trì</option>
            <option value="">Thường Tín</option>
            <option value="">Bắc Từ Liêm</option>
            <option value="">Nam Từ Liêm</option>
          </select>
        </div>
      </div>
      {/*  */}
      <div className="product-flex">
        <div className="list-food">
          {/* list-content */}
          {dataDeliveryTime.map((data, index) => (
            <ListContent key={index} data={data} />
          ))}
          {/*  */}

          <div className="txt-center mt-2">
            <button className="btn-none btn-load-more link">
              <span className="pr-1">Xem thêm</span>
              <i className="fas fa-redo font13 "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentExtra;
