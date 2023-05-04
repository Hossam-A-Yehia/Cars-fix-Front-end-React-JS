import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Booking/Sidebar";
import "./bookinList.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Loader3 from "../loader/Loader3";

function BookingList() {
  const [data, setData] = useState();
  const [reload, setReload] = useState(1);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoad(true);
      try {
        const res = await axios.get("https://backws.vercel.app/api/booking");
        setData(res.data);
        setLoad(false);
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };
    fetchBookings();
  }, [reload]);

  const handleDelete = async (e) => {
    try {
      await axios.delete(`https://backws.vercel.app/api/booking`, {
        data: { id: e._id },
      });
      toast.error(`تم حذف حجز باسم ${e.name}`);
    } catch (err) {
      console.log(err);
    }
    setReload(reload + 1);
  };

  return (
    <>
      {load ? (
        <Loader3 height="200px" width="200px" />
      ) : (
        <div className="bookingList">
          <Sidebar />
          <div className="table">
            <h1>
              قائمة <span className="yellow">الحجوزات</span>
            </h1>
            <table className="container">
              <thead>
                <tr>
                  <th>
                    <h1>الاسم</h1>
                  </th>
                  <th>
                    <h1>نوع العربية</h1>
                  </th>
                  <th>
                    <h1>الموديل</h1>
                  </th>
                  <th>
                    <h1>العطل </h1>
                  </th>
                  <th>
                    <h1>السعر</h1>
                  </th>
                  <th>
                    <h1>الحالة</h1>
                  </th>
                  <th>
                    <h1>الحذف</h1>
                  </th>
                  <th>
                    <h1>التفاصيل</h1>
                  </th>
                </tr>
              </thead>
              <tbody
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                {data
                  ? data.map((e) => (
                      <tr key={e._id}>
                        <td data-label="الاسم">{e.name}</td>
                        <td data-label="نوع العربية">{e.carType}</td>
                        <td data-label="الموديل">{e.model}</td>
                        <td data-label="العطل">{e.damage}</td>
                        <td data-label="السعر">
                          {e.price} <sup>جنيه</sup>
                        </td>
                        <td data-label="الحالة">
                          <input type="checkbox" />
                        </td>
                        <td data-label="حذف">
                          <div
                            onClick={() => handleDelete(e)}
                            className="btn btn-danger"
                          >
                            حذف
                          </div>
                        </td>
                        <td data-label="التفاصيل">
                          <Link to={`/bookingList/${e._id}`}>
                            <div className="btn btn-primary">التفاصيل</div>
                          </Link>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingList;
