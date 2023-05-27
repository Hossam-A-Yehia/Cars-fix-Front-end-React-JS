import { useState } from "react";
import "./login.css";

import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [run, setRun] = useState(false);
  const [flag, setFlag] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setRun(true);
    if (username === "" || email === "" || password.length < 8) {
      setFlag(false);
    } else {
      setFlag(true);
    }
    if (flag) {
      try {
        const res = await axios.post(
          "https://cars-bac.vercel.app/api/auth/register",
          {
            username,
            email,
            password,
          }
        );
        console.log(res.data);
        res.data && window.location.replace("/login");
        setRun(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div style={{ height: "100vh" }}>
      <div className="login-box position-absolute top-50 start-50 translate-middle">
        <h2 className="p-0 m-0 mb-5 text-center text-light">انشاء حساب جديد</h2>
        <form>
          <div className="position-relative mb-3">
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <label>اسم المستخدم</label>
            {username === "" && run && (
              <p className="text-danger mt-1" style={{ fontSize: "14px" }}>
                يجب كتابة اسم المستخدم
              </p>
            )}
          </div>
          <div className="position-relative mb-3">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>البريد الالكتروني</label>
            {email === "" && run && (
              <p className="text-danger mt-1">يجب كتابة البريد الالكتروني</p>
            )}
          </div>
          <div className="position-relative mb-3">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label>كلمة السر</label>
            {password.length < 8 && run && (
              <p className="text-danger mt-1">كلمة السر اقل من 8</p>
            )}
          </div>
          <div className="btns">
            <button className="btn" onClick={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              js
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
          لديك حساب بالفعل ؟{" "}
          <Link to="/login" className="text-info fw-bold">
            تسجيل دخول
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
