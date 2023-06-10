import Header from "../../components/Layout/DefauLayout/Header/Header";
import Footer from "../../components/Layout/DefauLayout/Footer/Footer";
import ScrollBar from "../../components/Layout/DefauLayout/ScrollBar/ScrollBar";
import axios from "axios";
import { notification } from "antd";

import "./Register.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [checkPassWord, setCheckPassWord] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const navigate = useNavigate();

  const newUsers = {
    users_name: email,
    users_password: passWord,
    users_roles: 1,
  };

  const handlePost = async (e) => {
    e.preventDefault();

    if (email === "" || passWord === "" || !isCheckboxChecked) {
      notification.error({
        message: "Thất bại",
        description: "Mời nhập đủ thông tin và chấp nhận điều khoản ",
      });
      return;
    } else if (!isValid || passWord !== checkPassWord) {
      notification.error({
        message: "Lỗi",
        description: "Thông tin đăng ký không hợp lệ",
      });
      return;
    } else if (email.length < 10 || passWord.length < 10) {
      notification.error({
        message: "Lỗi",
        description: "Email và mật khẩu phải có ít nhất 10 chữ cái hoặc số",
      });
      return;
    }
    await axios
      .post("http://localhost:3003/api/v1/users/register", newUsers)
      .then((res) => {
        if (res.data.status === 201) {
          notification.success({
            message: "Thành công",
            description: "Đăng kí thành công",
          });
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <div className=".container-login">
        <div className="now-login">
          <div className="content">
            <div className="title">Đăng ký</div>
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
            <p className="text">Đăng ký tài khoản</p>
            <form onSubmit={handlePost}>
              <div className="form-login-input">
                <div className="field-group">
                  <div className="input-group">
                    <i className="far fa-envelope" />
                    <input
                      type="text"
                      placeholder="Tên đăng ký hoặc Email"
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
                  <div className="input-group">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      placeholder="Nhập lại mật khẩu"
                      onChange={(e) => {
                        setCheckPassWord(e.target.value);
                        setIsValid(passWord === e.target.value);
                      }}
                    />
                  </div>
                  {!isValid && (
                    <p className="error-message">
                      Mật khẩu nhập lại không khớp!!!
                    </p>
                  )}
                </div>
                <div className="form-group clearfix">
                  <div className="float-left">
                    <input
                      type="checkbox"
                      checked={isCheckboxChecked}
                      onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
                    />
                    <label htmlFor="RememberMe">
                      Bạn đồng ý chấp nhận chính sách/điều khoản của chúng tôi
                    </label>
                    {!isCheckboxChecked && (
                      <p className="error-message err">
                        Bạn cần chấp nhận điều khoản!!!!
                      </p>
                    )}
                  </div>
                </div>
                <button
                  className="btn btn-block btn-submit"
                  disabled={!isCheckboxChecked}
                >
                  Đăng Ký
                </button>
              </div>
            </form>
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
