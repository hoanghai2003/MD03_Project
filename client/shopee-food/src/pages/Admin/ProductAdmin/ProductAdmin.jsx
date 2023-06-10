import { useEffect, useState } from "react";
import HeaderAdmin from "../HeaderAdmin";
import NavBar from "../NavBar";
import "./ProductAdmin.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
function ProductAdmin() {
  const [productAdmin, setProductAdmin] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/api/v1/product")
      .then((res) => setProductAdmin(res.data.user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <div className="dipl-just">
        <NavBar />
        <div className="conten-ctn ">
          <div className="tag-name food-prdtc">
            <div className="dipl-cc">
              <div className="tag-usr">
                <span className="icon-tag">
                  <i className="fa-solid fa-user-tag"></i>
                </span>
              </div>
              <div className="tag-name-usr">
                <div>
                  <p className="name-tag"> Food store</p>
                  <span className="application">View,Details,Delete</span>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <NavLink to={"/create"}>
                <button className="create-btn">
                  <i className="fa-solid fa-plus"></i>
                  <p>Create</p>
                </button>
              </NavLink>
            </div>
            {/*  */}
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
                  <tr>
                    <th>ID</th>
                    <th> Name/Foods</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Price/Discount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  {/*  */}
                  {productAdmin.map((adminpro, index) => (
                    <tr className="row1" key={index}>
                      <td>{adminpro.product_id}</td>
                      <td className="td-prfood">
                        <div>
                          <img
                            className="img-prodct"
                            src={adminpro.img_product}
                            alt=""
                          />
                        </div>
                        <div>
                          <p>{adminpro.name_product}</p>
                        </div>
                      </td>
                      <td>{adminpro.address_product}</td>
                      <td>{adminpro.city}</td>
                      <td>
                        ${adminpro.price_product}/{adminpro.discount_product}%
                      </td>
                      {adminpro.status_product == 1 ? (
                        <>
                          <td>
                            <span
                              className="onl-pro"
                              style={{ userSelect: "none" }}
                            >
                              a
                            </span>
                            <span className="tt-onl-prd">online</span>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>
                            <span
                              className="off-pro"
                              style={{ userSelect: "none" }}
                            >
                              a
                            </span>
                            <span className="tt-off-prd" title="offline">
                              offline
                            </span>
                          </td>
                        </>
                      )}
                      <td>
                        <button className="detail">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button className="delete-usr">
                          <i className="fa-solid fa-trash-can del"></i>
                        </button>
                      </td>
                    </tr>
                  ))}

                  {/*  */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAdmin;
