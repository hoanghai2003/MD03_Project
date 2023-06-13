const express = require("express");
const route = express.Router();
const database = require("../Utils/database");
const multer = require("multer");
//   destination: function (req, file, cb) {
//     cb(null, "../public/images");
//   },
//   filename: function (req, file, cb) {
//     let ext = file.originalname.split(".")[1];
//     const uniqueSuffix =
//       Date.now() + "-" + Math.round(Math.random() * 1e9) + `.${ext}`;
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

// const upload = multer({ storage: storage });

// route.post("/upload", upload.single("images"), async (req, res) => {
//   try {
//     const {
//       name_product,
//       city,
//       address_product,
//       status_product,
//       price_product,
//       discount_product,
//       shop_form,
//       category_id,
//     } = req.body;

//     const insertProductQuery = `INSERT INTO products.product (name_product, city, address_product, status_product, price_product, discount_product, shop_form, category_id, img_product) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//     const imagePath = `http://localhost:3003/images/${file.filename}`;
//     console.log(imagePath);

//     await database.execute(insertProductQuery, [
//       imagePath,
//       name_product,
//       city,
//       address_product,
//       status_product,
//       price_product,
//       discount_product,
//       shop_form,
//       category_id,
//     ]);

//     res.json({ message: "Post success" });
//   } catch (error) {
//     res.json(error);
//   }
// });

const fileStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, `${__dirname}/../public/images`);
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".")[1];
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + `.${ext}`;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: fileStorage });

route.post("/single", (req, res) => {
  upload.single("image")(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
      res.status(500).json({ message: "Lỗi khi tải lên ảnh" });
    } else if (err) {
      console.log(err);
      res.status(500).json({ message: "Lỗi khi tải lên ảnh" });
    } else {
      try {
        const {
          name_product,
          city,
          address_product,
          status_product,
          price_product,
          discount_product,
          shop_form,
          category_id,
        } = req.body;

        const img_product = req.file.filename; // Lấy tên file ảnh đã tải lên
        const img_url = `http://localhost:3003/images/${img_product}`; // Đường link hoàn chỉnh của ảnh
        const insert =
          "INSERT INTO `products`.`product` (`name_product`, `img_product`, `city`, `address_product`, `status_product`, `price_product`, `discount_product`, `shop_form`, `category_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        // Thực hiện lưu thông tin sản phẩm vào cơ sở dữ liệu
        await database.execute(insert, [
          name_product,
          img_url,
          city,
          address_product,
          status_product,
          price_product,
          discount_product,
          shop_form,
          category_id,
        ]);

        res.json({ message: "Post success" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Lỗi khi lưu thông tin sản phẩm" });
      }
    }
  });
});

// ////////////////////////////////////////////////////
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
      message: error,
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
route.put("/:id", (req, res) => {
  try {
    res.json({ mess: "Update success" });
  } catch (error) {
    res.json(error);
  }
});
//
route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await database.execute(
      `DELETE FROM products.product WHERE (product_id = ${id})`
    );
    return res.status(200).json({
      status: 200,
      message: "Xoá thành công",
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = route;
