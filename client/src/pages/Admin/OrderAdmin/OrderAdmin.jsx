import React, { useEffect, useState } from "react";
import HeaderAdmin from "../HeaderAdmin";
import NavBar from "../NavBar";
import "./OrderAdmin.css";
import assImages from "../../../asset/images/images";
import axios from "axios";

function OrderAdmin() {
  const [orders, setOrders] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [orderIdToDelete, setOrderIdToDelete] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    fetch("http://localhost:3003/api/v1/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => console.log(error));
  };

  const handleCheck = (id) => {
    axios
      .put(`http://localhost:3003/api/v1/order/${id}`)
      .then((response) => {
        console.log(response.data);
        // Perform any additional actions or update state as needed
        fetchOrders(); // Refresh the order list after updating
      })
      .catch((error) => {
        console.log(error);
        // Handle any errors that occurred during the request
      });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const handleDelete = (id) => {
    setOrderIdToDelete(id);
    setShowConfirmationModal(true);
  };

  const handleConfirmDelete = (id) => {
    axios
      .delete(`http://localhost:3003/api/v1/order/${id}`)
      .then((response) => {
        console.log(response.data);
        fetchOrders();
        setShowConfirmationModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <HeaderAdmin />
      <div className="dipl-just">
        <NavBar />
        <div className="conten-ctn">
          <div className="tag-name">
            <div className="tag-usr">
              <span className="icon-tag">
                <i className="fa-solid fa-user-tag"></i>
              </span>
            </div>
            <div className="tag-name-usr">
              <p className="name-tag">User Order</p>
              <span className="application">View, Details, Delete</span>
            </div>
          </div>

          <div className="tbl-user">
            <div className="table-user">
              <div className="search-user">
                <div className="srch-usr">
                  <div className="color-nn">
                    <input
                      className="wh-ipt"
                      type="text"
                      placeholder="Tìm kiếm"
                    />
                    <button className="btn-usradm">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      Search
                    </button>
                  </div>
                </div>
                <table className="table-usr">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Tổng số lượng</th>
                      <th>Price</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((pr, index) => (
                      <tr className="row1" key={index}>
                        <td>{pr.user_id}</td>
                        <td>{pr.user_order}</td>
                        <td>{pr.address_order}</td>
                        <td>{pr.quantity_order}</td>
                        <td>{formatCurrency(pr.total_order)}</td>
                        <td>{pr.phone_order}</td>
                        <td>
                          {pr.status_order === 0 ? (
                            <>Chờ xác nhận</>
                          ) : (
                            <>Đã xác nhận</>
                          )}
                        </td>
                        <td>
                          <button className="detail">
                            <i
                              className="fa-solid fa-check"
                              onClick={() => handleCheck(pr.order_id)}
                            ></i>
                          </button>
                          <button
                            className="delete-usr"
                            onClick={() => handleDelete(pr.order_id)}
                          >
                            <i className="fa-solid fa-trash-can del"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showConfirmationModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content">
            <h3>Xác nhận xóa đơn hàng</h3>
            <p>Bạn có chắc chắn muốn xóa đơn hàng?</p>
            <div className="confirmation-modal-buttons">
              <button onClick={() => handleConfirmDelete(orderIdToDelete)}>
                Xóa
              </button>
              <button onClick={() => setShowConfirmationModal(false)}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderAdmin;
