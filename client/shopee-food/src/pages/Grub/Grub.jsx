import Header from "../../components/Layout/DefauLayout/Header/Header";
import ScrollBar from "../../components/Layout/DefauLayout/ScrollBar/ScrollBar";
import Footer from "../../components/Layout/DefauLayout/Footer/Footer";
import "./Grub.css";
import assImages from "../../asset/images/images";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderGrup from "./HeaderGrup";
import NavGrup from "./NavGrup";

function Grub() {
  const [grubProduct, setGrubProduct] = useState([]);

  const id = JSON.parse(localStorage.getItem("user")).data.users_id;

  // Hàm xử lý sự kiện xóa một sản phẩm khỏi giỏ hàng
  const handleDelete = async (cartId) => {
    try {
      await axios.delete(`http://localhost:3003/api/v1/cart/${cartId}`);
      // Xóa thành công, cập nhật lại danh sách sản phẩm trong state
      const updatedGrubProduct = grubProduct.filter(
        (product) => product.cart_id !== cartId
      );
      setGrubProduct(updatedGrubProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3003/api/v1/cart/users/${id}`)
      .then((res) => setGrubProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handlePlus = (index) => {
    const newgrubProduct = [...grubProduct];
    if (newgrubProduct[index].quantity < 10) {
      newgrubProduct[index].quantity += 1;
      setGrubProduct(newgrubProduct);
    }
  };
  const handleMinus = (index) => {
    const newgrubProduct = [...grubProduct];
    if (newgrubProduct[index].quantity > 1) {
      newgrubProduct[index].quantity -= 1;
      setGrubProduct(newgrubProduct);
    }
  };

  const handleChangeInput = (e, index) => {
    const newGrubProduct = [...grubProduct];
    const value = e.target.value;

    if (value !== "") {
      if (value.length <= 2) {
        newGrubProduct[index].quantity = value;
      } else {
        // Nếu giá trị nhập quá hai chữ số, chỉ lấy hai chữ số đầu tiên
        newGrubProduct[index].quantity = value.slice(0, 2);
      }
    } else {
      newGrubProduct[index].quantity = 1;
    }

    setGrubProduct(newGrubProduct);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
    <div>
      <Header />
      <div className="block-section">
        <div className="container-grub">
          <div className="lzd-grub">
            <div className="grub-left">
              <HeaderGrup grubProduct={grubProduct} />

              <div className="hide-product">
                <div className="hide-click">
                  <div className="check-click">
                    <input type="checkbox" />
                    <span className="sanpham">
                      <img
                        className="ig-sp"
                        src={assImages.store_grub}
                        alt=""
                      />
                      <p>Hoang Hai</p>
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </div>
                  <div className="no"></div>
                </div>
                {/* GrubProduct */}
                {grubProduct?.map((grup, index) => {
                  const toltalPrice = grup.price_product * grup.quantity;
                  return (
                    <div className="product-grub" key={index}>
                      <div className="sp-grb">
                        <input type="checkbox" />
                        <img
                          className="img-grb"
                          src={grup.img_product}
                          alt=""
                        />
                        <span className="title-grb">{grup.name_product}</span>
                      </div>
                      <span className="price">
                        <p className="prc-grb">
                          {" "}
                          {formatCurrency(toltalPrice)}
                        </p>
                        <div className="delete-pro" onClick={handleDelete}>
                          <i className="fa-solid fa-trash-can hire"></i>
                        </div>
                      </span>

                      <div className="cout-product">
                        <button
                          className="btn-grb"
                          onClick={() => handleMinus(index)}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <input
                          className="ipt-grb"
                          value={grup.quantity}
                          onChange={(e) => {
                            handleChangeInput(e, index);
                          }}
                        />
                        <button
                          className="btn-grb"
                          onClick={() => handlePlus(index)}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* GrubProduct */}
              </div>
            </div>
            <NavGrup grubProduct={grubProduct} />
          </div>
        </div>
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

export default Grub;
