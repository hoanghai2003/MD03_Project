const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const productRoute = require("./routes/product.routes");
const userRoute = require("./routes/users.routes");
const categoryRoute = require("./routes/category.routes");
const optionsRoute = require("./routes/options.routes");
const cartRoute = require("./routes/Cart.routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

//suwr dung
app.use("/api/v1/product", productRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/options", optionsRoute);
app.use("/api/v1/cart", cartRoute);
//

app.listen(3003, () => {
  console.log(`http://localhost:3003/api/v1/product`);
  console.log("http://localhost:3003/api/v1/users");
  console.log("http://localhost:3003/api/v1/category");
  console.log("http://localhost:3003/api/v1/options");
  console.log("http://localhost:3003/api/v1/cart");
});
