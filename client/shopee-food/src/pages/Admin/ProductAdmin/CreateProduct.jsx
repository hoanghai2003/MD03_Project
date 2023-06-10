import { useEffect, useState } from "react";
import HeaderAdmin from "../HeaderAdmin";
import NavBar from "../NavBar";
import "./ProductAdmin.css";
import axios from "axios";

function CreateProduct() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [shopForm, setShopForm] = useState("");
  const [category, setCategory] = useState("");

  console.log(image);
  console.log(name, "aaaaaa");

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleShopFormChange = (event) => {
    setShopForm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    const formData = {
      image,
      name,
      city,
      address,
      status,
      price,
      discount,
      shopForm,
      category,
    };

    axios
      .post("http://localhost:3003/api/v1/product/post", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <HeaderAdmin />
        <div className="dipl-just create-pro">
          <NavBar />
          <div className="conten-ctn create-pro-adm">
            <div className="tag-name">
              <div className="tag-usr">
                <span className="icon-tag">
                  <i class="fa-solid fa-user-tag"></i>
                </span>
              </div>
              <div className="tag-name-usr">
                <p className="name-tag">Create</p>
                <span className="application">View,Create,Details,Delete</span>
              </div>
            </div>
            {/*  */}
            <div className="create-food">
              <div className="bgr-wh">
                {/*  */}
                <div className="divinput">
                  <div className="name-create">
                    <span>Ảnh-Food</span>
                  </div>
                  <div className="ipt-creat">
                    <input
                      className="ipt-cr"
                      type="file"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                {/*  */}
                <div className="divinput">
                  <div className="name-create">
                    <span>Name-Food</span>
                  </div>
                  <div className="ipt-create">
                    <input
                      className="ipt-crt"
                      type="text"
                      onChange={handleNameChange}
                    />
                  </div>
                </div>
                <div className="divinput">
                  <div className="name-create">
                    <span>City</span>
                  </div>
                  <div className="ipt-create">
                    <input
                      className="ipt-crt"
                      type="text"
                      onChange={handleCityChange}
                    />
                  </div>
                </div>
                <div className="divinput">
                  <div className="name-create">
                    <span>Address</span>
                  </div>
                  <div className="ipt-create">
                    <input
                      className="ipt-crt"
                      type="text"
                      onChange={handleAddressChange}
                    />
                  </div>
                </div>
                <div className="divinput">
                  <div className="name-create">
                    <span>Status</span>
                  </div>
                  <div className="ipt-create">
                    <select
                      name=""
                      id=""
                      className="ipt-crt"
                      onChange={handleStatusChange}
                    >
                      <option>Chọn trạng thái</option>
                      <option value={1}>Online</option>
                      <option value={0}>Offline</option>
                    </select>
                  </div>
                </div>
                <div className="divinput">
                  <div className="name-create">
                    <span>Price</span>
                  </div>
                  <div className="ipt-create">
                    <input
                      className="ipt-crt"
                      type="text"
                      onChange={handlePriceChange}
                    />
                  </div>
                </div>
                <div className="divinput">
                  <div className="name-create">
                    <span>Discount</span>
                  </div>
                  <div className="ipt-create">
                    <input
                      className="ipt-crt"
                      type="text"
                      onChange={handleDiscountChange}
                    />
                  </div>
                </div>
                <div className="divinput">
                  <div className="name-create">
                    <span>Shop-Form</span>
                  </div>
                  <div className="ipt-create">
                    <input
                      className="ipt-crt"
                      type="text"
                      onChange={handleShopFormChange}
                    />
                  </div>
                </div>
                <div className="divinput">
                  <div className="name-create">
                    <span>Category</span>
                  </div>
                  <div className="ipt-create">
                    <select
                      name=""
                      id=""
                      className="ipt-crt"
                      onChange={handleCategoryChange}
                    >
                      <option>Chọn</option>
                      <option value={1}>Đồ ăn</option>
                      <option value={2}>Thực phẩm</option>
                      <option value={3}>Bia</option>
                      <option value={4}>Hoa</option>
                      <option value={5}>Siêu thị</option>
                      <option value={6}>Thú Cưng</option>
                    </select>
                  </div>
                </div>
                {/*  */}

                <div className="upload-crt">
                  <button className="btnupload" onClick={handleSubmit}>
                    Upload
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
