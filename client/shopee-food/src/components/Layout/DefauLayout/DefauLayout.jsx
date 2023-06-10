import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import ContentPro from "./ContentPro/ContenPro";
import Footer from "./Footer/Footer";
import ScrollBar from "./ScrollBar/ScrollBar";

function DefauLayout() {
  return (
    <div className="">
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default DefauLayout;
