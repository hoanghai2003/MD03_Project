import assImages from "../../../../../../asset/images/images";

function ListContent() {
  return (
    <a href="" className="view-food">
      <div className="food-proview">
        <img className="imgfood" src={assImages.listFoodTow} alt="" />
      </div>
      <div className="title-food">
        <div className="name-food">
          <span
            className="icon-food"
            title="Đây là 1 trong những Merchants được đánh giá cao trong ShopeeFood"
          >
            <img className="icon-food" src={assImages.listFoodThree} alt="" />
          </span>
          <strong>The 1989 - Trà Sữa Muối Biển</strong>
        </div>

        <div className="address-food col ">
          <div className="count-food">4 địa điểm</div>
        </div>

        <div className="item-info">
          <span className="icon-product">
            <img className="screenshot" src={assImages.Screenshot1} alt="" />
          </span>
          <strong className="visa">Tối thiểu 20k</strong>
          <span className="icon icon-money-sm ml-3">
            <img className="screenshot2" src={assImages.Screenshot2} alt="" />
          </span>
          <strong className="visa">Giá 18k</strong>
        </div>
        <div className="content-promotionn pt-1 pl-0 pb-0">
          <i className="fas fa-tag"></i>
          <strong>Visa giảm 50K</strong>
        </div>
      </div>

      <div className="food-online" title="Mở cửa">
        <span className="online-btn"></span>
      </div>
    </a>
  );
}

export default ListContent;
