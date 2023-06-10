import HeaderAdmin from "../HeaderAdmin";
import NavBar from "../NavBar";
import "./OrderAdmin.css";

function OrderAdmin() {
  return (
    <div>
      <HeaderAdmin />
      <div className="dipl-just">
        <NavBar />
        <div className="conten-ctn">
          <div className="tag-name">
            <div className="tag-usr">
              <span className="icon-tag">
                <i class="fa-solid fa-user-tag"></i>
              </span>
            </div>
            <div className="tag-name-usr">
              <p className="name-tag">User Oder</p>
              <span className="application">View,Details,Delete</span>
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
                      <i class="fa-solid fa-magnifying-glass"></i>
                      Search
                    </button>
                  </div>
                </div>
                <table className="table-usr">
                  <tr>
                    <th>ID</th>
                    <th> Customer/Foods</th>
                    <th>Address</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  <tr className="row1">
                    <td>1</td>
                    <td>John</td>
                    <td>address</td>
                    <td>price</td>
                    <td>status</td>
                    <td>
                      <button className="detail">
                        <i class="fa-solid fa-check"></i>
                      </button>
                      <button className="delete-usr">
                        <i class="fa-solid fa-trash-can del"></i>
                      </button>
                    </td>
                  </tr>
                  <tr className="row1">
                    <td>1</td>
                    <td>John</td>
                    <td>address</td>
                    <td>price</td>
                    <td>status</td>
                    <td>
                      <button className="detail">
                        <i class="fa-solid fa-check"></i>
                      </button>
                      <button className="delete-usr">
                        <i class="fa-solid fa-trash-can del"></i>
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderAdmin;
