const express = require("express");

const options = express.Router();

const database = require("../Utils/database");

options.get("/", async (req, res) => {
  try {
    let data = await database.execute("SELECT * FROM products.options");
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
options.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = `
      select c.category_id, c.category_name, o.options_id, o.options_name
      from options as o join categories as c on o.category_id = c.category_id where c.category_id=?`;

    const data = await database.execute(query, [id]);
    let [user] = data;
    console.log(user);
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
options.post("/", (req, res) => {
  try {
    res.json({ mess: "Post success" });
  } catch (error) {
    res.json(error);
  }
});
//
options.put("/:id", (req, res) => {
  try {
    res.json({ mess: "Update success" });
  } catch (error) {
    res.json(error);
  }
});
//
options.delete("/:id", (req, res) => {
  try {
    res.json({ mess: "Delete success" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = options;
