import Header from "../../components/Layout/DefauLayout/Header/Header";
import Footer from "../../components/Layout/DefauLayout/Footer/Footer";
import ScrollBar from "../../components/Layout/DefauLayout/ScrollBar/ScrollBar";

import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

function Login() {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const navigate = useNavigate();

  const UserLogin = {
    users_name: Email,
    users_password: PassWord,
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // console.log("11111111");
    if (Email === "" || PassWord === "") {
      notification.error({
        message: "Thất bại",
        description: "Mời nhập đủ thông tin",
      });
      return;
    }
    await axios
      .post("http://localhost:3003/api/v1/users/login", UserLogin)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data));
          notification.success({
            message: "Thành công",
            description: "Đăng nhập thành công",
          });
          if (res.data.data.users_roles === 0) {
            navigate("/admin");
          } else {
            navigate("/");
          }
        }
      })
      .catch((err) => {
        if (err.response.data.status === 404) {
          notification.error({
            message: "Thất bại",
            description: "Email hoặc mật khẩu không tồn tại",
          });
          return;
        } else if (err.response.status === 400) {
          notification.error({
            message: "Thất bại",
            description: "Email hoặc mật khẩu không đúng",
          });
          return;
        } else {
          notification.error({
            message: "Thất bại",
            description: "Đăng nhập thất bại",
          });
          return;
        }
      });
  };

  return (
    <div>
      <Header />
      <div className=".container-login">
        <div className="now-login">
          <div className="content">
            <div className="title">Đăng nhập</div>
            <div className="login-via">
              <div className="item phone">
                <span className="fas fa-mobile-alt" />
                Số điện thoại
              </div>
              <div className="item fb">
                <span className="fab fa-facebook-f face" />
                Facebook
              </div>
              <form>
                <div className="item plus">
                  <i className="fab fa-google-plus-g" />
                  Google
                </div>
              </form>
            </div>
            <p className="text">Hoặc đăng nhập bằng tài khoản của bạn</p>
            <div className="form-login-input">
              <form onSubmit={handleLogin}>
                <div className="field-group">
                  <div className="input-group">
                    <i className="far fa-envelope" />
                    <input
                      type="text"
                      placeholder="Tên đăng nhập hoặc Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      onChange={(e) => setPassWord(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group clearfix">
                  <div className="float-left">
                    <input type="checkbox" defaultChecked="" />
                    <label htmlFor="RememberMe">Lưu thông tin đăng nhập</label>
                  </div>
                  <span className="float-right">
                    <a href="">Quên mật khẩu?</a>
                  </span>
                </div>
                <button className="btn btn-block btn-submit">Đăng nhập</button>
              </form>
              <span className="float-right">
                <a href="/register">Đăng kí tài khoản</a>
              </span>
            </div>
            <br />
            <div className="login-mess-policy">
              Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với{" "}
              <a className="login-link" target="_blank" href="">
                Chính sách quy định của Foody
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer
        className="footer"
        style={{
          width: "960px",
          marginRight: "auto",
          marginLeft: "auto",
          height: "100%",
        }}
      >
        <Footer />
      </footer>
      <ScrollBar />
    </div>
  );
}

export default Login;
