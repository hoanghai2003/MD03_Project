import { useState } from "react";
import HeaderAdmin from "../HeaderAdmin";
import NavBar from "../NavBar";
import "./ProductAdmin.css";
import axios from "axios";
import { notification } from "antd";

function CreateProduct() {
  const [imageData, setImageData] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [shopForm, setShopForm] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({
    imageData: "",
    name: "",
    city: "",
    address: "",
    status: "",
    price: "",
    discount: "",
    shopForm: "",
    category: "",
  });

  const handleImageChange = (event) => {
    setImageData(event.target.files[0]);
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

  const validateForm = () => {
    let isValid = true;

    if (!imageData) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        imageData: " Ông chủ à vui lòng chọn ảnh",
      }));
      isValid = false;
    }

    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: " Ông chủ à vui lòng nhập tên",
      }));
      isValid = false;
    }

    if (!city) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        city: " Ông chủ à vui lòng nhập thành phố",
      }));
      isValid = false;
    }

    if (!address) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: " Ông chủ à vui lòng nhập địa chỉ",
      }));
      isValid = false;
    }

    if (!status) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        status: " Ông chủ à vui lòng chọn trạng thái",
      }));
      isValid = false;
    }

    if (!price) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: " Ông chủ à vui lòng nhập giá tiền",
      }));
      isValid = false;
    }

    if (!discount) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        discount: " Ông chủ à vui lòng nhập giảm giá",
      }));
      isValid = false;
    }

    if (!shopForm) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        shopForm: " Ông chủ à vui lòng nhập form shop",
      }));
      isValid = false;
    }

    if (!category) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        category: " Ông chủ à vui lòng chọn danh mục",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append("image", imageData);
      formData.append("name_product", name);
      formData.append("city", city);
      formData.append("address_product", address);
      formData.append("status_product", status);
      formData.append("price_product", price);
      formData.append("discount_product", discount);
      formData.append("shop_form", shopForm);
      formData.append("category_id", category);

      notification.success({
        message: "Thêm món thành công",
      });

      axios
        .post("http://localhost:3003/api/v1/product/single", formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <div>
        <HeaderAdmin />
        <div className="dipl-just create-pro">
          <NavBar />
          {/*  */}
          <div className="conten-ctn create-pro-adm">
            <div className="tag-name">
              <div className="tag-usr">
                <span className="icon-tag">
                  <i className="fa-solid fa-user-tag"></i>
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
                <form onSubmit={handleSubmit}>
                  {/* Trường ảnh */}
                  <div className="divinput">
                    <div className="name-create">
                      <span>Ảnh-Food</span>
                    </div>
                    <div className="err-create">
                      <div className="ipt-creat">
                        <input
                          className="ipt-cr"
                          type="file"
                          onChange={handleImageChange}
                        />
                      </div>
                      {errors.imageData && (
                        <div className="error-message">{errors.imageData}</div>
                      )}
                    </div>
                  </div>

                  {/* Trường tên */}
                  <div className="divinput">
                    <div className="name-create">
                      <span>Name-Food</span>
                    </div>
                    <div className="err-create">
                      <div className="ipt-create">
                        <input
                          placeholder="nhập tên đồ ăn"
                          className="ipt-crt"
                          type="text"
                          onChange={handleNameChange}
                        />
                      </div>
                      {errors.name && (
                        <div className="error-message">{errors.name}</div>
                      )}
                    </div>
                  </div>

                  {/* Trường thành phố */}
                  <div className="divinput">
                    <div className="name-create">
                      <span>City</span>
                    </div>
                    <div className="err-create">
                      <div className="ipt-create">
                        <input
                          placeholder="nhập tên thành phố"
                          className="ipt-crt"
                          type="text"
                          onChange={handleCityChange}
                        />
                      </div>
                      {errors.city && (
                        <div className="error-message-create">
                          {errors.city}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Trường địa chỉ */}
                  <div className="divinput">
                    <div className="name-create">
                      <span>Address</span>
                    </div>
                    <div className="err-create">
                      <div className="ipt-create">
                        <input
                          placeholder="nhập tên địa chỉ"
                          className="ipt-crt"
                          type="text"
                          onChange={handleAddressChange}
                        />
                      </div>
                      {errors.address && (
                        <div className="error-message">{errors.address}</div>
                      )}
                    </div>
                  </div>

                  {/* Trường trạng thái */}
                  <div className="divinput">
                    <div className="name-create">
                      <span>Status</span>
                    </div>
                    <div className="err-create">
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
                      {errors.status && (
                        <div className="error-message">{errors.status}</div>
                      )}
                    </div>
                  </div>

                  {/* Trường giá tiền */}
                  <div className="divinput">
                    <div className="name-create">
                      <span>Price</span>
                    </div>
                    <div className="err-create">
                      <div className="ipt-create">
                        <input
                          placeholder="nhập giá tiền"
                          className="ipt-crt"
                          type="text"
                          onChange={handlePriceChange}
                        />
                      </div>
                      {errors.price && (
                        <div className="error-message">{errors.price}</div>
                      )}
                    </div>
                  </div>

                  {/* Trường giảm giá */}
                  <div className="divinput">
                    <div className="name-create">
                      <span>Discount</span>
                    </div>
                    <div className="err-create">
                      <div className="ipt-create">
                        <input
                          placeholder="nhập số giảm giá "
                          className="ipt-crt"
                          type="text"
                          onChange={handleDiscountChange}
                        />
                      </div>
                      {errors.discount && (
                        <div className="error-message">{errors.discount}</div>
                      )}
                    </div>
                  </div>

                  {/* Trường form shop */}
                  <div className="divinput">
                    <div className="name-create">
                      <span>Shop-Form</span>
                    </div>
                    <div className="err-create">
                      <div className="ipt-create">
                        <input
                          placeholder="form shop"
                          className="ipt-crt"
                          type="text"
                          onChange={handleShopFormChange}
                        />
                      </div>
                      {errors.shopForm && (
                        <div className="error-message">{errors.shopForm}</div>
                      )}
                    </div>
                  </div>

                  {/* Trường danh mục */}
                  <div className="divinput">
                    <div className="name-create">
                      <span>Category</span>
                    </div>
                    <div className="err-create">
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
                      {errors.category && (
                        <div className="error-message">{errors.category}</div>
                      )}
                    </div>
                  </div>

                  {/* Nút submit */}
                  <div className="upload-crt">
                    <button type="submit" className="btnupload">
                      Create
                    </button>
                  </div>
                </form>
                {/*  */}
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
