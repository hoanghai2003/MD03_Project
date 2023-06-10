const express = require("express");

const category = express.Router();

const database = require("../Utils/database");

category.get("/", async (req, res) => {
  try {
    let data = await database.execute("SELECT * FROM products.categories");
    let [user] = data;
    res.json({
      status: "success",
      user,
    });
  } catch (error) {
    res.json(error);
  }
});

category.get("/getName/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let data = await database.execute(
      `SELECT * FROM products.categories where category_id = ${id}`
    );
    res.json({
      status: "success",
      data: data[0],
    });
  } catch (error) {
    res.json(error);
  }
});

category.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = `
    SELECT p.product_id, p.name_product, p.img_product, p.city, p.address_product, p.star_product,p.status_product,p.price_product,p.count_order,p.like_product,p.product_description,p.addsell_product,p.endow_product,p.discount_product,p.discount_product, c.category_name
    FROM product AS p
    JOIN categories AS c ON p.category_id = c.category_id
    WHERE p.category_id = ?`;

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
category.post("/", (req, res) => {
  try {
    res.json({ mess: "Post success" });
  } catch (error) {
    res.json(error);
  }
});
//
category.put("/:id", (req, res) => {
  try {
    res.json({ mess: "Update success" });
  } catch (error) {
    res.json(error);
  }
});
//
category.delete("/:id", (req, res) => {
  try {
    res.json({ mess: "Delete success" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = category;
