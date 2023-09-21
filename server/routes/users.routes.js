const express = require("express");
const users = express.Router();
const bcrypt = require("bcrypt");
const database = require("../Utils/database");
const jwt = require("jsonwebtoken");

users.get("/", async (req, res) => {
  try {
    const data = await database.execute("SELECT * FROM products.users");
    const [user] = data;
    res.json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
//dang ki
users.post("/register", async (req, res) => {
  try {
    const { users_name, users_password, users_roles } = req.body;
    const passwordHash = await bcrypt.hash(users_password, 10);

    const newUser = [users_name, passwordHash, users_roles];
    const query =
      "INSERT INTO `products`.`users` (users_name, users_password, users_roles) VALUES (?, ?, ?)";
    await database.execute(query, newUser);

    res.status(200).json({
      status: 200,
      message: "Thêm mới thành công.",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//dăng nhạp
users.post("/login", async (req, res) => {
  try {
    const { users_name, users_password } = req.body;

    const query = "SELECT * FROM products.users WHERE users_name = ?";
    const [rows] = await database.execute(query, [users_name]);

    if (rows.length === 0) {
      res.status(404).json({
        status: 404,
        message: "Tên đăng nhập hoặc mật khẩu không đúng.",
      });
    } else {
      const user = rows[0];
      const isMatch = await bcrypt.compare(users_password, user.users_password);

      if (!isMatch) {
        res.status(400).json({
          status: 400,
          message: "Tên đăng nhập hoặc mật khẩu không đúng.",
        });
      } else {
        const token = jwt.sign({ id: user.users_id }, "your_secret_key", {
          expiresIn: "1h",
        });

        res.status(200).json({
          status: 200,
          message: "Đăng nhập thành công",
          data: user,
          token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
});

users.put("/:id", (req, res) => {
  try {
    res.json({ mess: "Update success" });
  } catch (error) {
    res.json(error);
  }
});

users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await database.execute(`DELETE FROM products.users WHERE users_id = ?`, [
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

module.exports = users;
