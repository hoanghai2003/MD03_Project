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
cart.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let data = await database.execute(
      `SELECT p.product_id, quantity, c.created_date, u.users_id FROM carts as c join users as u on u.users_id = c.users_id join product as p on p.product_id=c.product_id WHERE cart_id = ${id}`
    );

    console.log(dat);
    res.json({
      status: "success",
    });
  } catch (error) {
    res.json(error);
  }
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
cart.delete("/:id", (req, res) => {
  try {
    res.json({ mess: "Delete success" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = cart;
