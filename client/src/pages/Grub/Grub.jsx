import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Layout/DefauLayout/Header/Header";
import ScrollBar from "../../components/Layout/DefauLayout/ScrollBar/ScrollBar";
import Footer from "../../components/Layout/DefauLayout/Footer/Footer";
import "./Grub.css";
import assImages from "../../asset/images/images";
import HeaderGrup from "./HeaderGrup";
import NavGrup from "./NavGrup";

function Grub() {
  const [grubProduct, setGrubProduct] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [cartIdToDelete, setCartIdToDelete] = useState(null);
  const [checked, setChecked] = useState([]);

  const fee = grubProduct.length;
  const id = JSON.parse(localStorage.getItem("user")).data.users_id;

  const loadData = async () => {
    await axios
      .get(`http://localhost:3003/api/v1/cart/users/${id}`)
      .then((res) => {
        const updatedGrubProduct = res.data.map((grub) => {
          const isChecked = grub.status === 1;
          return {
            ...grub,
            isChecked,
          };
        });
        setGrubProduct(updatedGrubProduct);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadData();
  }, []);

  const openConfirmationModal = (cartId) => {
    setCartIdToDelete(cartId);
    setShowConfirmationModal(true);
  };

  const handleDelete = (cartId) => {
    openConfirmationModal(cartId);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3003/api/v1/cart/${cartIdToDelete}`);
      setShowConfirmationModal(false);
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = () => {
    // Xử lý cập nhật số lượng sản phẩm trong giỏ hàng
    grubProduct.forEach((product) => {
      axios
        .put(`http://localhost:3003/api/v1/cart/${product.cart_id}`, {
          quantity: product.quantity,
        })
        .then((res) => {
          console.log(res.data);
          // Cập nhật lại dữ liệu sau khi thành công
          loadData();
        })
        .catch((err) => console.log(err));
    });
  };

  const handlePlus = (index) => {
    const newGrubProduct = [...grubProduct];
    if (newGrubProduct[index].quantity < 10) {
      newGrubProduct[index].quantity += 1;
      setGrubProduct(newGrubProduct);
    }
    handleUpdate();
  };

  const handleMinus = (index) => {
    const newGrubProduct = [...grubProduct];
    if (newGrubProduct[index].quantity > 1) {
      newGrubProduct[index].quantity -= 1;
      setGrubProduct(newGrubProduct);
    }
    handleUpdate();
  };

  const handleChangeInput = (e, index) => {
    const newGrubProduct = [...grubProduct];
    const value = e.target.value;

    if (value !== "") {
      if (value.length <= 2) {
        newGrubProduct[index].quantity = value;
      } else {
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

  const handleCheck = async (id) => {
    setChecked((prev) => {
      const isChecked = prev.includes(id);
      if (isChecked) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });

    // Gọi API update trạng thái
    const status = checked.includes(id) ? 0 : 1;
    await axios
      .put(`http://localhost:3003/api/v1/cart/status/${id}`, {
        status,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    loadData();
  };

  useEffect(() => {
    loadData();
  }, [checked]);

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
                {grubProduct.length > 0 ? (
                  <>
                    {grubProduct?.map((grup, index) => {
                      const totalPrice = grup.price_product * grup.quantity;
                      return (
                        <div className="product-grub" key={index}>
                          {/* checkbox */}
                          <div className="sp-grb">
                            <input
                              type="checkbox"
                              checked={
                                checked.includes(grup.cart_id) || grup.isChecked
                              }
                              onChange={() => handleCheck(grup.cart_id)}
                            />
                            <img
                              className="img-grb"
                              src={grup.img_product}
                              alt=""
                            />
                            <span className="title-grb">
                              {grup.name_product}
                            </span>
                          </div>
                          <span className="price">
                            <p className="prc-grb">
                              {formatCurrency(totalPrice)}
                            </p>
                            <div
                              className="delete-pro"
                              onClick={() => handleDelete(grup.cart_id)}
                            >
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
                              onChange={(e) => handleChangeInput(e, index)}
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
                  </>
                ) : (
                  <>
                    <h3>Bạn chưa có sản phẩm trong giỏ hàng</h3>
                  </>
                )}
                {/* GrubProduct */}
              </div>
            </div>
            <NavGrup
              grubProduct={grubProduct}
              fee={fee}
              confirmCart={checked}
            />
          </div>
        </div>
      </div>

      {showConfirmationModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content">
            <h3>Xác nhận xóa sản phẩm</h3>
            <p>Bạn có chắc chắn muốn xóa sản phẩm khỏi giỏ hàng?</p>
            <div className="confirmation-modal-buttons">
              <button onClick={confirmDelete}>Xóa</button>
              <button onClick={() => setShowConfirmationModal(false)}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

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
