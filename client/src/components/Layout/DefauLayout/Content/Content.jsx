import "./Content.css";
import assImages from "../../../../asset/images/images";
import ProductContent from "./ProductContent/Product/ProductContent";
import Search from "./ProductContent/Product/Search";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Content() {
  const [titleCateory, setTitleCategory] = useState([]);
  const [options, setOptions] = useState([]);
  const param = useParams();
  console.log(options, "<-----------");
  console.log(param);
  useEffect(() => {
    axios
      .get(`http://localhost:3003/api/v1/category/getName/${param.id}`)
      .then((res) => setTitleCategory(res.data.data))
      .catch((err) => console.log(err));
  }, [param.id]);

  useEffect(() => {
    axios
      .get(`http://localhost:3003/api/v1/options/${param.id}`)
      .then((res) => setOptions(res.data.user))
      .catch((err) => console.log(err));
  }, [param.id]);

  return (
    <>
      <div className="content-container">
        <div className="now-search">
          {param.id ? (
            <>
              {" "}
              {titleCateory.map((title, index) => (
                <div className="title-pro" key={index.id}>
                  <h1 className="title">
                    Đặt {title.category_name}, giao hàng từ 20'...
                  </h1>
                  <div
                    className="local"
                    title={`Đặt ${title.category_name}, giao hàng từ 20'...`}
                  >
                    có <span>79813</span> địa điểm ở TP. HCM từ 00:00 - 23:59
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {" "}
              <div className="title-pro">
                <h1 className="title">Đặt ...,giao hàng từ 20'...</h1>
                <div className="local">
                  có <span>79813</span> địa điểm ở TP. HCM từ 00:00 - 23:59
                </div>
              </div>
            </>
          )}

          {/* search */}
          <Search />
          {/*  */}
          {param.id ? (
            <>
              {options.map((listop, index) => (
                <div className="category-list" key={index}>
                  <a href="https://example.com">
                    <span className="category-item">{listop.options_name}</span>
                  </a>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="category-list">
                <a href="https://example.com">
                  <span className="category-item">All</span>
                </a>
              </div>
            </>
          )}

          <div className="navbar">
            <div className="font18 mb-2 mt-3">
              <p>Sử dụng App ShopeeFood để có nhiều giảm giá </p>
              <p>và trải nghiệm tốt hơn</p>
            </div>
            <div className="navbar-img">
              {" "}
              <a href="https://example.com">
                <img src={assImages.AppStore} alt="APPSTORE" />
              </a>
              <a href="https://example.com">
                <img src={assImages.CHplay} alt="CHPLAY" />
              </a>
            </div>
          </div>
        </div>
        <div className="ProductContent">
          <ProductContent param={param.id} titleCateory={titleCateory} />
        </div>
      </div>
    </>
  );
}

export default Content;
