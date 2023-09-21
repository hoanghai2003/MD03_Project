import { NavLink } from "react-router-dom";
import assImages from "../../../../../../asset/images/images";
import "./ContentExtra.css";
import { useEffect, useState } from "react";

function ListContent({ data }) {
  const [dataProduct, setDataProduct] = useState([]);
  console.log(dataProduct);

  useEffect(() => {
    fetch("http://localhost:3003/api/v1/product/limit")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error retrieving product data");
        }
      })
      .then((res) => {
        console.log("data", res);
        setDataProduct(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div>
        <NavLink to={`/product/${data.product_id}`} className="view-food">
          <div className="food-proview">
            <img
              className="imgfood"
              src={data.img_product}
              alt={data.name_product}
            />
          </div>
          <div className="title-food">
            <div className="name-food">
              <span
                className="icon-food"
                title="Đây là 1 trong những Merchants được đánh giá cao trong ShopeeFood"
              >
                <img
                  className="icon-food"
                  src={assImages.listFoodThree}
                  alt=""
                />
              </span>
              <strong>{data.name_product}</strong>
            </div>

            <div className="address-food col ">
              <div className="count-food">4 địa điểm</div>
            </div>

            <div className="item-info">
              <span className="icon-product">
                <img
                  className="screenshot"
                  src={assImages.Screenshot1}
                  alt=""
                />
              </span>
              <strong className="visa">
                Tối thiểu {data.discount_product}k
              </strong>
              <span className="icon icon-money-sm ml-3">
                <img
                  className="screenshot2"
                  src={assImages.Screenshot2}
                  alt=""
                />
              </span>
              <strong className="visa">Giá 18k</strong>
            </div>
            <div className="content-promotionn pt-1 pl-0 pb-0">
              <i className="fas fa-tag"></i>
              <strong>Visa giảm 50K</strong>
            </div>
          </div>
        </NavLink>
        <div className="status-shoppe">
          <span></span>
        </div>
      </div>
    </>
  );
}

export default ListContent;
