const express = require("express");

const cart = express.Router();

const database = require("../Utils/database");

cart.get("/", async (req, res) => {
  try {
    let data = await database.execute(
      "SELECT c.cart_id, p.product_id, quantity, price_ship, c.created_date, u.users_id ,p.img_product,p.name_product,p.price_product,p.address_product FROM carts as c join users as u on u.users_id = c.users_id join product as p on p.product_id=c.product_id "
    );
    let [user] = data;
    res.json({
      status: "success",
      user,
    });
  } catch (error) {
    res.json(error);
  }
});

cart.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let data = await database.execute(
      `SELECT c.status, c.cart_id, p.product_id, c.quantity, c.price_ship, c.created_date, u.users_id, p.img_product, p.name_product, p.price_product, p.address_product
      FROM carts AS c
      JOIN users AS u ON u.users_id = c.users_id
      JOIN product AS p ON p.product_id = c.product_id
      WHERE u.users_id = ${id}; `
    );
    return res.status(200).json((data = data[0]));
  } catch (error) {
    console.log(error);
  }
});

cart.post("/post", async (req, res) => {
  const { product_id, quantity, users_id, created_date, price_ship } = req.body;
  try {
    const [existingCartItem] = await database.execute(
      `SELECT * FROM carts WHERE product_id = ${product_id} AND users_id = ${users_id}`
    );

    if (existingCartItem.length > 0) {
      const updatedQuantity = existingCartItem[0].quantity + 1;
      await database.execute(
        `UPDATE carts SET quantity = ${updatedQuantity} WHERE product_id = ${product_id} AND users_id = ${users_id}`
      );
      res.status(200).json({
        status: 200,
        message: "Số lượng tăng thành công",
      });
    } else {
      await database.execute(
        `INSERT INTO carts (product_id, quantity, users_id, created_date, price_ship, status) VALUES (${product_id}, ${quantity}, ${users_id}, '${created_date}', ${price_ship},0)`
      );
      res.status(201).json({
        status: 201,
        message: "Thêm món thành công",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

cart.get("/carts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let data = await database.execute(
      `SELECT * FROM products.carts where users_id=${id}`
    );

    return res.status(200).json({
      status: 200,
      data: data[0],
    });
  } catch (error) {}
});

//
cart.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const result = await database.execute(
      "UPDATE `products`.`carts` SET `quantity` = ? WHERE (`cart_id` = ?)",
      [quantity, id]
    );

    if (result[0].affectedRows > 0) {
      return res.status(200).json({
        status: 200,
        message: "Cập nhật sản phẩm thành công",
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "Sản phẩm không tồn tại",
      });
    }
  } catch (error) {
    res.json(error);
  }
});
//cap nhat trang thai
cart.put("/status/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const result = await database.execute(
      "UPDATE `products`.`carts` SET `status` = ? WHERE (`cart_id` = ?);",
      [status, id]
    );

    if (result[0].affectedRows > 0) {
      return res.status(200).json({
        status: 200,
        message: "Cập nhật trạng thái thành công",
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "Giỏ hàng không tồn tại để cập nhật",
      });
    }
  } catch (error) {
    res.json(error);
  }
});
//
cart.delete("/:id", async (req, res) => {
  const cartId = req.params.id;
  try {
    const result = await database.execute(
      "DELETE FROM `products`.`carts` WHERE (`cart_id` = ?)",
      [cartId]
    );

    if (result[0].affectedRows > 0) {
      console.log(result);
      res.status(200).json({
        status: 200,
        message: "Đã xoá sản phẩm khỏi giỏ hàng",
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Sản phẩm không tồn tại trong giỏ hàng",
      });
    }
  } catch (error) {
    res.json(error);
  }
});

cart.get("/confim/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await database.execute(
      ` SELECT c.quantity, c.cart_id, c.product_id, c.price_ship, p.img_product, p.name_product,p.price_product,c.status
      FROM carts AS c
      JOIN product AS p ON p.product_id = c.product_id
      WHERE c.status = 1 AND c.users_id ='${id}'`
    );
    res.status(200).json({
      status: 200,
      message: "Success",
      data: results,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

module.exports = cart;
