function HeaderGrup({ grubProduct }) {
  return (
    <>
      <div className="check-grub">
        <div className="check-click">
          <input type="checkbox" />
          <span className="select-all">
            CHỌN TẤT CẢ ({grubProduct.length} SẢN PHẨM)
          </span>
        </div>
        <div className="delete-check">
          <i className="fa-solid fa-trash-can"></i>
          <span className="delete">Xoá</span>
        </div>
      </div>
    </>
  );
}

export default HeaderGrup;
