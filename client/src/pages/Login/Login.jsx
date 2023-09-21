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

    if (Email === "" || PassWord === "") {
      notification.error({
        message: "Thất bại",
        description: "Mời nhập đủ thông tin",
      });
      return;
    }
    await fetch("http://localhost:3003/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserLogin),
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Đăng nhập thất bại");
        }
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        notification.success({
          message: "Thành công",
          description: "Đăng nhập thành công",
        });
        if (data.data.users_roles === 0) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.message === "Đăng nhập thất bại") {
          notification.error({
            message: "Thất bại",
            description: "Đăng nhập thất bại",
          });
        } else {
          notification.error({
            message: "Thất bại",
            description: "Đăng nhập không thành công",
          });
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
                  <div className="ml-pd">
                    <div className="float-left">
                      <input type="checkbox" defaultChecked="" />
                      <label htmlFor="RememberMe">
                        Lưu thông tin đăng nhập
                      </label>
                    </div>
                    <div className="">
                      <span className="float-right">
                        <a href="">Quên mật khẩu?</a>
                      </span>
                    </div>
                  </div>
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
