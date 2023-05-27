import { useState } from "react";
import "./login.css";
import axios from "axios";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess, startLogin } from "../../store/UsersSlice";

function Login() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [run, setRun] = useState(false);
  const [flag, setFlag] = useState(true);
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(startLogin());
    setRun(true);
    if (username === "" || password.length < 8) {
      setFlag(false);
    }
    if (flag) {
      try {
        const res = await axios.post(
          "https://cars-bac.vercel.app/api/auth/login",
          {
            username: username,
            password: password,
          }
        );
        dispatch(loginSuccess(res.data));
        window.location.replace("/");
      } catch (err) {
        dispatch(loginFailure());
        setErr(true);
      }
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="login-box position-absolute top-50 start-50 translate-middle">
        <h2 className="p-0 m-0 mb-5 text-center text-light">تسجيل دخول</h2>
        <form>
          <div className="position-relative mb-3">
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <label>اسم الستخدم</label>
          </div>
          <div className="position-relative mb-3">
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label>كلمة السر</label>
          </div>
          <div className="btns">
            <button className="btn" onClick={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              دخول
            </button>
            <Link to="/">
              <button className="btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                الرئيسية
              </button>
            </Link>
          </div>
        </form>
        <div className="mt-2 text-center text-white">
          ليس لديك حساب ؟
          <Link to="/register" className="text-info fw-bold">
            انشاء حساب
          </Link>
        </div>
        {err && (
          <span
            className="text-danger fw-bold my-2 text-center d-block"
            style={{ fontSize: "15px", whiteSpace: "nowrap" }}
          >
            عملية تسجيل دخول خاطئة برجاء المحاولة مرة اخري
          </span>
        )}
      </div>
    </div>
  );
}

export default Login;
