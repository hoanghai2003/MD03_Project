import assImages from "../../asset/images/images";

function ItemProduct() {
  return (
    <div className="item-restaurant-row">
      <div className="row">
        <div className="col-auto item-restaurant-img">
          <button className="inline">
            <img
              src={assImages.foodProduct}
              alt="Bún Bò Giò Heo Thịt Chả + Nước Ép Dưa Hấu"
              width={60}
              height={60}
            />
          </button>
        </div>
        <div className="coll item-restaurant-info">
          <h2 className="item-restaurant-name">
            Bún Bò Giò Heo Thịt Chả + Nước Ép Dưa Hấu
          </h2>
        </div>
        <div className="col-autoo item-restaurant-more">
          <div className="roww ">
            <div className="col-autoo product-price">
              <div className="old-price">
                55,000
                <span>đ</span>
              </div>
              <div className="current-price">
                50,000
                <span>đ</span>
              </div>
            </div>
            <div className="col-autoo adding-food-cart txt-right">
              <div className="btn-adding">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
