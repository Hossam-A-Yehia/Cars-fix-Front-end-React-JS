import React, { useEffect, useState } from "react";
import "./testimonials.css";
import Loader2 from "../../../pages/loader/Loader2";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { format } from "timeago.js";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

function Testimonials() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [comment, setComment] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("userCars"));

  useEffect(() => {
    const fetchComment = async () => {
      setLoad(true);
      try {
        setLoad(false);
        const res = await axios.get("https://cars-bac.vercel.app/api/comment");
        setData(res.data);
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };
    fetchComment();
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: userInfo.username,
      title: comment,
      img: userInfo.profilePic,
    };
    try {
      await axios.post("https://cars-bac.vercel.app/api/comment", data);
      toast.info(`تم اضافة تعليقك بنجاح شكرا لابداء ${userInfo.username}`);
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="testimonials">
      <h2 className="main-title " data-aos="flip-left">
        قالوا عنا
      </h2>
      <p className="spacialP " data-aos="flip-left">
        اراء بعض العملاء رجاء ابدي رأيك لكي نحسن مستوي الخدمة
      </p>
      {load ? (
        <Loader2 height="100px" width="100px" />
      ) : (
        <Swiper
          className="container testimonials__container text-center"
          style={{ paddingBottom: "3rem" }}
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data ? (
            data.map((e) => (
              <SwiperSlide className="testimonial" key={e._id}>
                <div className="client__avatar" data-aos="flip-down">
                  <img src={e.img} alt="" />
                </div>
                <h5 style={{ color: "#fff" }}>{e.name}</h5>
                <span
                  className="ms-2 "
                  style={{
                    fontSize: "12px",
                    color: "#777777ad",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {format(e.createdAt)}
                </span>
                <small className="client__review">{e.title}</small>
              </SwiperSlide>
            ))
          ) : (
            <div className="text-white">لا يوجد تعليقات</div>
          )}
        </Swiper>
      )}
      <div
        className="d-flex align-items-center gap-3 my-3 p-3 border border-info rounded-pill mx-auto  "
        style={
          !userInfo
            ? { pointerEvents: "none", opacity: "0.5", maxWidth: "700px" }
            : { pointerEvents: "all", opacity: "1", maxWidth: "700px" }
        }
      >
        <img
          src={
            userInfo
              ? userInfo.profilePic
              : "https://firebasestorage.googleapis.com/v0/b/shop-209b2.appspot.com/o/images.png?alt=media&token=75ac5164-5162-494f-89f6-0d5dea814eb8"
          }
          alt=""
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
        <input
          type="text"
          onChange={(e) => setComment(e.target.value)}
          className="form-control rounded bg-transparent text-white border-secondary "
          style={{ height: "50px" }}
          placeholder="اكتب تعليقك"
          value={comment}
        />
        <button
          className="btn btn-primary"
          style={{ whiteSpace: "nowrap" }}
          onClick={handleSubmit}
        >
          اضافة تعليق
        </button>
      </div>
      {!userInfo && (
        <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
          <span className="text-danger fw-bold">
            يجب عليك تسجيل الدخول اولا لكتابة تعليق
          </span>
          <Link className="btn btn-outline-info " to="/login">
            تسجيل دخول
          </Link>
        </div>
      )}
    </section>
  );
}

export default Testimonials;
