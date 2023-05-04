import { useEffect, useState } from "react";
import { format } from "timeago.js";
import "./complaints.css";
import Sidebar from "../../components/Booking/Sidebar";
import { toast } from "react-toastify";
import axios from "axios";
import Loader3 from "../loader/Loader3";

function Complaints() {
  const [data, setData] = useState();
  const [reload, setReload] = useState(1);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchComplaints = async () => {
      setLoad(true);
      try {
        const res = await axios.get("https://backws.vercel.app/api/complaint");
        setData(res.data);
        setLoad(false);
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };
    fetchComplaints();
  }, [reload]);

  const handleDelete = async (e) => {
    try {
      await axios.delete(`https://backws.vercel.app/api/complaint`, {
        data: { id: e._id },
      });
      toast.error(`تم حذف شكوي باسم ${e.name}`);
    } catch (err) {
      console.log(err);
    }
    setReload(reload + 1);
  };
  return (
    <>
      {load ? (
        <Loader3 width="200px" height="200px" />
      ) : (
        <div className="complaintsBox position-absolute start-0">
          <Sidebar />
          <h1>
            صندوق <span style={{ color: "#fff842" }}>الشكاوي</span>
          </h1>
          <div className=" position-relative" style={{ padding: "70px 0" }}>
            <div className="container">
              <div className="boxs">
                {data ? (
                  data.map((e) => (
                    <div key={e._id} className="box" data-aos="flip-up">
                      <img src={e.img} alt="" />
                      <h2>{e.name}</h2>
                      <p>{e.email}</p>
                      <p>{e.title}</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <button
                          onClick={() => handleDelete(e)}
                          className="btn btn-danger"
                        >
                          حذف
                        </button>
                        <span
                          className="d-inline-block "
                          style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            cursor: "pointer",
                            direction: "ltr",
                          }}
                        >
                          {format(e.createdAt)}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>لا يوجد شكاوي</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Complaints;
