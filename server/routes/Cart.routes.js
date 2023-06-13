const express = require("express");

const cart = express.Router();

const database = require("../Utils/database");

cart.get("/", async (req, res) => {
  try {
    let data = await database.execute(
      "SELECT p.product_id, quantity, price_ship, c.created_date, u.users_id ,p.img_product,p.name_product,p.price_product,p.address_product FROM carts as c join users as u on u.users_id = c.users_id join product as p on p.product_id=c.product_id "
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
      `SELECT p.product_id, c.quantity, c.price_ship, c.created_date, u.users_id, p.img_product, p.name_product, p.price_product, p.address_product
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
      // Product already exists in the cart, increase the quantity by 1
      const updatedQuantity = existingCartItem[0].quantity + 1;
      await database.execute(
        `UPDATE carts SET quantity = ${updatedQuantity} WHERE product_id = ${product_id} AND users_id = ${users_id}`
      );
      res.status(200).json({
        status: 200,
        message: "Số lượng tăng thành công",
      });
    } else {
      // Product doesn't exist in the cart, add a new item
      await database.execute(
        `INSERT INTO carts (product_id, quantity, users_id, created_date, price_ship) VALUES (${product_id}, ${quantity}, ${users_id}, '${created_date}', ${price_ship})`
      );
      res.status(201).json({
        status: 201,
        message: "Thêm món thành công ",
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
cart.put("/:id", (req, res) => {
  try {
    res.json({ mess: "Update success" });
  } catch (error) {
    res.json(error);
  }
});
//
cart.delete("/:id", async (req, res) => {
  const cartId = req.params.id;

  try {
    await database.execute(
      "DELETE FROM `products`.`carts` WHERE (`cart_id` = ?) and (`users_id`=?)",
      [cartId]
    );
    res.json({ message: "Xóa thành công" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = cart;
