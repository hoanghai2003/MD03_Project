import HeaderAdmin from "../HeaderAdmin";
import NavBar from "../NavBar";
import "./CategoriAdmin.css";

function CategoriAdmin() {
  return (
    <div>
      <HeaderAdmin />
      <div className="displ-proadm">
        <NavBar />
        <div className="conten-ctn">
          <div className="tag-name">
            <div className="tag-usr">
              <span className="icon-tag">
                <i class="fa-solid fa-user-tag"></i>
              </span>
            </div>
            <div className="tag-name-usr">
              <p className="name-tag">Categori</p>
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
                    <th> Name</th>
                    <th>Actions</th>
                  </tr>
                  <tr className="row1">
                    <td>1</td>
                    <td>John</td>
                    <td>
                      <button className="detail">Details</button>
                      <button className="delete-usr">
                        <i class="fa-solid fa-trash-can del"></i>
                      </button>
                    </td>
                  </tr>
                  <tr className="row2">
                    <td>1</td>
                    <td>John</td>
                    <td>
                      <button className="detail">Details</button>
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

export default CategoriAdmin;
