import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Grub from "./pages/Grub/Grub";
import ConfimProduct from "./pages/ConfimProduct/ConfimProduct";
import Category from "./pages/Category/Category";
import Admin from "./pages/Admin/Admin";
import UserAdmin from "./pages/Admin/UserAdmin/UserAdmin";
import Sidebar from "./components/Layout/DefauLayout/Sidebar/Sidebar";
import CategoriAdmin from "./pages/Admin/CategoriAdmin/CategoriAdmin";
import OrderAdmin from "./pages/Admin/OrderAdmin/OrderAdmin";
import ProductAdmin from "./pages/Admin/ProductAdmin/ProductAdmin";
import CreateProduct from "./pages/Admin/ProductAdmin/CreateProduct";
import InformatonProduct from "./pages/InformatonProduct/InformatonProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Sidebar />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/grub" element={<Grub />} />
        <Route path="/confim" element={<ConfimProduct />} />
        <Route path="/category" element={<Category />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<UserAdmin />} />
        <Route path="/productad" element={<ProductAdmin />} />
        <Route path="/order" element={<OrderAdmin />} />
        <Route path="/categori" element={<CategoriAdmin />} />
        <Route path="/Create" element={<CreateProduct />} />
        <Route path="/informaton" element={<InformatonProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
