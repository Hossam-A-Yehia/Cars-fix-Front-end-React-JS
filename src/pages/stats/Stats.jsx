import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Booking/Sidebar";
import "./stats.css";
import { FcTodoList } from "react-icons/fc";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { TiMessages } from "react-icons/ti";
import axios from "axios";
import Loader2 from "../loader/Loader2";
function Stats() {
  const [bookinsL, setBookingsL] = useState([]);
  const [complL, setComplL] = useState([]);
  const [commentL, setCommentL] = useState([]);
  const [load, setLoad] = useState(false);
  const [load2, setLoad2] = useState(false);
  const [load3, setLoad3] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoad(true);
      try {
        const res = await axios.get("https://cars-bac.vercel.app/api/booking");
        setBookingsL(res.data.length);
        setLoad(false);
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };
    const fetchComplaints = async () => {
      setLoad2(true);
      try {
        const res = await axios.get(
          "https://cars-bac.vercel.app/api/complaint"
        );
        setComplL(res.data.length);
        setLoad2(false);
      } catch (err) {
        console.log(err);
        setLoad2(false);
      }
    };
    const fetchComment = async () => {
      setLoad3(true);

      try {
        const res = await axios.get("https://cars-bac.vercel.app/api/comment");
        setCommentL(res.data.length);
        setLoad3(false);
      } catch (err) {
        console.log(err);
        setLoad3(false);
      }
    };
    fetchComment();
    fetchComplaints();
    fetchBookings();
  }, [bookinsL, complL, commentL]);

  return (
    <>
      <Sidebar />
      <div className="stats h-100 position-absolute start-0 text-center">
        <h1>
          احصائيات <span style={{ color: "#fff842" }}>المركز</span>
        </h1>
        <div className="container row m-auto mt-5">
          <div
            className="col-md-5 p-3 position-relative "
            style={{ minHeight: "200px" }}
          >
            {load ? (
              <Loader2 height="100px" width="100px" />
            ) : (
              <>
                <FcTodoList className="fs-1" />
                <h2 className="text-light my-3">عدد الحجوزات</h2>
                {bookinsL && (
                  <span
                    class="d-inline-block fw-bold "
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      cursor: "pointer",
                      color: "#ececf2",
                    }}
                  >
                    {bookinsL}
                  </span>
                )}
              </>
            )}
          </div>
          <div className="col-md-5 p-3 mt-5 mt-md-0 me-auto position-relative">
            {load2 ? (
              <Loader2 height="100px" width="100px" />
            ) : (
              <>
                <TfiCommentsSmiley
                  className="fs-1"
                  style={{ color: "#90caf9" }}
                />
                <h2 className="text-light my-3">عدد الشكاوي</h2>
                {complL && (
                  <span
                    class="d-inline-block fw-bold "
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      cursor: "pointer",
                      color: "#ececf2",
                    }}
                  >
                    {complL}
                  </span>
                )}
              </>
            )}
          </div>
          <div
            className="col-md-5 p-3 m-auto mt-5 position-relative"
            style={{ minHeight: "200px" }}
          >
            {load3 ? (
              <Loader2 height="100px" width="100px" />
            ) : (
              <>
                <TiMessages className="fs-1" style={{ color: "#90caf9" }} />
                <h2 className="text-light my-3">عدد التعليقات</h2>
                {commentL && (
                  <span
                    class="d-inline-block fw-bold "
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      cursor: "pointer",
                      color: "#ececf2",
                    }}
                  >
                    {commentL}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
