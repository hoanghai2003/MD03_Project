const express = require("express");

const deliveryTime = express.Router();

const database = require("../Utils/database");

deliveryTime.get("/", async (req, res) => {
  try {
    let data = await database.execute("SELECT * FROM products.delivery_time");
    let [user] = data;
    res.json({
      status: "success",
      user,
    });
  } catch (error) {
    res.json(error);
  }
});

deliveryTime.get("/category/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let data = await database.execute(
      `SELECT * FROM products.delivery_time where delivery_time_id = ${id}`
    );
    res.json({
      status: "success",
      data: data[0],
    });
  } catch (error) {
    res.json(error);
  }
});

deliveryTime.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = `
    SELECT p.product_id, p.name_product, p.img_product, p.city, p.address_product, p.star_product,p.status_product,p.price_product,p.count_order,p.like_product,p.product_description,p.addsell_product,p.endow_product,p.discount_product,p.discount_product, d.delivery_time_name
    FROM product AS p
    JOIN delivery_time AS d ON p.delivery_time_id = d.delivery_time_id
    WHERE p.delivery_time_id =${id};`;

    const data = await database.execute(query, [id]);
    let [user] = data;
    res.json({
      status: "success",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

//
deliveryTime.post("/", (req, res) => {
  try {
    res.json({ mess: "Post success" });
  } catch (error) {
    res.json(error);
  }
});
//
deliveryTime.put("/:id", (req, res) => {
  try {
    res.json({ mess: "Update success" });
  } catch (error) {
    res.json(error);
  }
});
//
deliveryTime.delete("/:id", (req, res) => {
  try {
    res.json({ mess: "Delete success" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = deliveryTime;
