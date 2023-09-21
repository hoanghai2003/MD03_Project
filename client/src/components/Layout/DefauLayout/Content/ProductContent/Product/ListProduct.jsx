import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ListProduct() {
  const [dataProduct, setDataProduct] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const param = useParams();

  useEffect(() => {
    fetch("http://localhost:3003/api/v1/product")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error retrieving product data");
        }
      })
      .then((data) => {
        console.log("data", data);
        setDataProduct(data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const loadData = async () => {
    await fetch(`http://localhost:3003/api/v1/category/${param.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error retrieving category data");
        }
      })
      .then((data) => {
        setListProduct(data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadData();
  }, [param.id]);

  return (
    <>
      {listProduct.map((product) => (
        <div className="item-restaurant" key={product.product_id}>
          <Link to={`/product/${product.product_id}`} className="item-content">
            <div className="img-restaurant">
              <div className="tag-preferred">
                <i className="fa fa-thumbs-up"></i>
                Yêu thích
              </div>
              <img src={product.img_product} alt="food" />
            </div>

            <div className="info-restaurant">
              <div className="info-basic-res">
                <h4 className="name-res" title={product.name_product}>
                  {product.name_product}
                </h4>

                <div className="address-res" title={product.address_product}>
                  {product.address_product}
                </div>
              </div>
              <p className="content-promotion">
                <i className="fas fa-tag"></i>
                Giảm giá {product.discount_product}%
              </p>

              <div className="opentime-status">
                {product.status_product ? (
                  <span className="stt online" title="Mở cửa"></span>
                ) : (
                  <span className="onlinen" title="Đóng cửa">
                    s
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}

      {!param.id ? (
        <>
          {dataProduct.map((user, index) => (
            <div className="item-restaurant" key={index}>
              <Link to={`/product/${user.product_id}`} className="item-content">
                <div className="img-restaurant">
                  <div className="tag-preferred">
                    <i className="fa fa-thumbs-up"></i>
                    Yêu thích
                  </div>
                  <img src={user.img_product} alt="food" />
                </div>

                <div className="info-restaurant">
                  <div className="info-basic-res">
                    <h4 className="name-res" title={user.name_product}>
                      {user.name_product}
                    </h4>

                    <div className="address-res" title={user.address_product}>
                      {user.address_product}
                    </div>
                  </div>
                  <p className="content-promotion">
                    <i className="fas fa-tag"></i>
                    Giảm giá {user.discount_product}%
                  </p>

                  <div className="opentime-status">
                    {user.status_product ? (
                      <span className="stt online" title="Mở cửa"></span>
                    ) : (
                      <span className="onlinen" title="Đóng cửa">
                        s
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ListProduct;
