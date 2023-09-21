import Content from "../Content/Content";
import "./Sidebar.css";
import assImages from "../../../../asset/images/images";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollBar from "../ScrollBar/ScrollBar";
import ContentPro from "../ContentPro/ContenPro";
function Sidebar() {
  return (
    <>
      <Header />
      <div className="containerr">
        <div className="image">
          <img src={assImages.mainBanner} alt="banner" />
        </div>
      </div>
      <Content />
      <div className="content">
        <ContentPro />
      </div>
      <div className="pdl-tt" style={{ paddingLeft: "150px" }}>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
      <ScrollBar />
    </>
  );
}

export default Sidebar;
