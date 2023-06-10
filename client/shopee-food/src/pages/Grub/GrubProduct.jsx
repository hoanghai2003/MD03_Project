import { useState } from "react";
import assImages from "../../asset/images/images";

function GrubProduct({ grubProduct }) {
  const [quantity, setQuantity] = useState(1);

  // Giảm số lượng
  const handleReduce = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Tăng số lượng
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="product-grub">
      <div className="sp-grb">
        <input type="checkbox" />
        <img className="img-grb" src={grubProduct.img_product} alt="" />
        <span className="title-grb">{grubProduct.name_product}</span>
      </div>
      <span className="price">
        <p className="prc-grb">
          {" "}
          {quantity > 0
            ? grubProduct.price_product * quantity
            : grubProduct.price_product}
          đ
        </p>
        <div className="delete-pro">
          <i className="fa-sharp fa-regular fa-heart"></i>
          <i className="fa-sharp fa-solid fa-heart"></i>
          <i className="fa-solid fa-trash-can hire"></i>
        </div>
      </span>

      <div className="cout-product">
        <button onClick={handleReduce} className="btn-grb">
          <i className="fa-solid fa-minus"></i>
        </button>
        <input
          min={0}
          className="ipt-grb"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
        <button onClick={handleIncrease} className="btn-grb">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default GrubProduct;
