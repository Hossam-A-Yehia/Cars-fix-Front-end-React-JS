import React, { useRef, useState } from "react";
import "./makeComplaint.css";

import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

function MakeComplaint({
  complaintTrue,
  setComplaintTrue,
  title,
  placeHolder,
}) {
  const massage = useRef("");
  const [err, setErr] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userCars"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: userInfo.username,
      title: massage.current.value,
      img: userInfo.profilePic,
      email: userInfo.email,
    };
    try {
      await axios.post("https://cars-bac.vercel.app/api/complaint", data);
      toast.info(
        `تم تقديم شكوي باسم ${userInfo.username} سيتم النظر فيها في اقرب وقت `
      );
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };

  return (
    <>
      {complaintTrue && (
        <div className="makeCopmlaint position-fixed top-0 start-0 w-100 h-100">
          <form
            className="position-absolute top-50 start-50 translate-middle "
            onSubmit={handleSubmit}
          >
            <div
              className="container my-0 mx-auto text-center rounded position-relative p-3"
              style={{ width: "420px", backgroundColor: "#fff" }}
            >
              <div className="head rounded">
                <h2 className="text-center fs-3 py3 px-0">{title}</h2>
              </div>
              {userInfo && (
                <span
                  className="text-danger fw-bold "
                  style={{ fontSize: "14px" }}
                >
                  لديك امكانية ارسال شكوي واحدة فقط
                </span>
              )}
              <textarea
                className="form-control w-100 mt-3 pb-5"
                style={{ backgroundColor: "#f1e9e9" }}
                placeholder={placeHolder}
                ref={massage}
                required
              ></textarea>
              {err && (
                <span
                  className="text-danger fw-bold my-2 text-center d-block"
                  style={{ fontSize: "15px", whiteSpace: "nowrap" }}
                >
                  عفوا لا يمكنك ارسال اكثر من شكوي واحده
                </span>
              )}
              <div className=" d-flex align-items-center justify-content-between mt-4 ">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={
                    !userInfo
                      ? { pointerEvents: "none", opacity: "0.5" }
                      : { pointerEvents: "all", opacity: "1" }
                  }
                >
                  ارسال
                </button>
                <button
                  className="btn btn-danger"
                  href="#makeCopmlaint"
                  onClick={() => setComplaintTrue(false)}
                >
                  اغلاق
                </button>
              </div>
              {!userInfo && (
                <div className="d-flex align-items-center justify-content-center gap-2 my-3">
                  <span
                    className="text-danger fw-bold "
                    style={{ fontSize: "14px", whiteSpace: "nowrap" }}
                  >
                    يجب عليك تسجيل الدخول اولا لتقديم الشكوي
                  </span>
                  <Link
                    className="btn btn-outline-info "
                    to="/login"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    تسجيل دخول
                  </Link>
                </div>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default MakeComplaint;
