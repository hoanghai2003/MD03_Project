const express = require("express");

const route = express.Router();

const database = require("../Utils/database");

route.get("/", async (req, res) => {
  try {
    let data = await database.execute("SELECT * FROM products.product");
    let [user] = data;
    res.json({
      status: "success",
      user,
    });
  } catch (error) {
    res.json(error);
  }
});
//get/id
route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let data = await database.execute(
      `SELECT * FROM products.product where product_id = ${id}`
    );

    // KIem tra data co ton tai
    if (data[0].length > 0) {
      return res.status(200).json({
        status: 200,
        data: data[0],
      });
    } else {
      return res.status(404).json({
        status: 404,
        data: "Product not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: err,
    });
  }
});

route.get("/search/:q", async (req, res) => {
  const searchTerm = req.params.q;
  try {
    const data = await database.execute(
      `SELECT * FROM product WHERE name_product LIKE '%${searchTerm}%' OR address_product LIKE '%${searchTerm}%'`
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

//
route.post("/post", async (req, res) => {
  try {
    const {
      name_product,
      img_product,
      city,
      address_product,
      status_product,
      price_product,
      discount_product,
      shop_form,
      category_id,
    } = req.body;

    await database.execute(
      "INSERT INTO `products`.`product` (`name_product`, `img_product`, `city`, `address_product`, `status_product`, `price_product`, `discount_product`, `shop_form`, `category_id`) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name_product,
        img_product,
        city,
        address_product,
        status_product,
        price_product,
        discount_product,
        shop_form,
        category_id,
      ]
    );
    res.json({ mess: "Post success" });
  } catch (error) {
    res.json(error);
  }
});
//
route.put("/:id", (req, res) => {
  try {
    res.json({ mess: "Update success" });
  } catch (error) {
    res.json(error);
  }
});
//
route.delete("/:id", (req, res) => {
  try {
    res.json({ mess: "Delete success" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = route;
