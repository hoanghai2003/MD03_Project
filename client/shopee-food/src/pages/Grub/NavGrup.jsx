import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavGrup({ grubProduct }) {
  console.log("grubProduct", grubProduct);

  const totalAmount = grubProduct.reduce(
    (total, product) => total + product.price_product * product.quantity,
    0
  );

  console.log("total", totalAmount);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const [shippingFee, setShippingFee] = useState(10000); // Giá trị phí vận chuyển

  const totalShippingFee = totalAmount + shippingFee;

  return (
    <div className="grub-right">
      <div className="right-grb">
        <span>Địa điểm</span>
      </div>
      <div className="addres-grb">
        <i className="fa-sharp fa-solid fa-location-dot grb-adr"></i>
        <p className="p-grb">Add Shipping Address</p>
      </div>
      <div className="tt-grtb">
        <span className="tt-grb">Thông tin giỏ hàng</span>
      </div>
      <div className="count-grb">
        <p className="grbt-tt">Tạm tính ({grubProduct.length} sản phẩm)</p>
        <span>{formatCurrency(totalAmount)}</span>
      </div>
      <div className="fee-grb">
        <p className="grbt-tt">Phí vận chuyển</p>
        <span>{formatCurrency(shippingFee)}</span>
      </div>
      <div className="inp-right">
        <input type="text" placeholder="Mã giảm giá (mã chỉ áp dụng 1lần)" />
        <button className="ad-grb">Áp dụng</button>
      </div>
      <div className="fee-grb">
        <p>Tổng cộng</p>
        <span>{formatCurrency(totalShippingFee)}</span>
      </div>
      <div className="bop-grbt">
        <NavLink to="/confim">
          <button className="btn-grbt">
            Xác nhận giỏ hàng({grubProduct.length})
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavGrup;
