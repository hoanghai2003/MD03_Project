const express = require("express");
const order = express.Router();
const database = require("../Utils/database");

order.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const query = `SELECT * FROM orders WHERE user_id = ? `;
    const result = await database.execute(query, [userId]);

    if (result[0].length === 0) {
      return res.status(404).json({
        status: 404,
        message: "Không tìm thấy đơn hàng",
      });
    } else {
      return res.json(result[0]);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
order.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM orders";
    const result = await database.execute(query);
    res.json(result[0]);
  } catch (error) {
    res.status(500).json(error);
  }
});
// ////////////
order.post("/", async (req, res) => {
  try {
    const {
      user_order,
      phone_order,
      address_order,
      total_order,
      user_id,
      quantity_order,
      status_order,
    } = req.body;

    await database.execute(
      "INSERT INTO `products`.`orders` (`user_order`, `phone_order`, `address_order`, `total_order`, `user_id`, `quantity_order`, `status_order`) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        user_order,
        phone_order,
        address_order,
        total_order,
        user_id,
        quantity_order,
        status_order,
      ]
    );

    res.status(200).json({
      status: 200,
      message: "Đã thêm thông tin khách hàng thành công",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Đã xảy ra lỗi khi thêm thông tin khách hàng",
    });
  }
});
// //////////
order.put("/:id", async (req, res) => {
  try {
    const orderId = req.params.id;

    await database.execute(
      "UPDATE `products`.`orders` SET `status_order` = '1' WHERE `order_id` = ?",
      [orderId]
    );

    res.json({ message: "Update success" });
  } catch (error) {
    res.status(500).json(error);
  }
});

order.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await database.execute("DELETE FROM products.orders WHERE order_id = ?", [
      id,
    ]);
    res.status(200).json({
      status: 200,
      message: "Xóa thành công",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
});

module.exports = order;
