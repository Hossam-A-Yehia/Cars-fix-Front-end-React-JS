import React, { useRef, useState } from "react";
import "./fix.css";
import { toast } from "react-toastify";
import axios from "axios";
import Topbar from "../../components/Home/topbar/Topbar";
import emailjs from "emailjs-com";

function Fix() {
  const form = useRef();

  const [empty, isEmpty] = useState(false);

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [carType, setCarType] = useState("");
  const [model, setModel] = useState("");
  const [version, setVersion] = useState("");
  const [damage, setDamage] = useState("");

  const clearAll = () => {
    setUsername("");
    setPhone("");
    setAddress("");
    setCarType("");
    setModel("");
    setVersion("");
    setDamage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    isEmpty(true);
    if (
      username === "" ||
      phone === "" ||
      address === "" ||
      carType === "" ||
      model === "" ||
      version === "" ||
      damage === ""
    ) {
      toast.error("لا يجب ان يكون هناك حقل فارغ");
    } else {
      const data = {
        name: username,
        phone: phone,
        address: address,
        carType: carType,
        model: model,
        version: version,
        damage: damage,
        price: 0,
        received: 0 - 0 - 0,
        dueDate: 0 - 0 - 0,
      };
      await axios.post("https://cars-bac.vercel.app/api/booking", data);
      toast.info(
        `تم تسجيل حجز جديد باسم ${username} سنتواصل معك في اقرب وقت  `
      );
      e.target.reset();
      emailjs.sendForm(
        "service_7npbx3i",
        "template_qzbu06b",
        form.current,
        "Vmt_9u0xDEMIDmEIA"
      );
      console.log(form.current);
    }
  };

  return (
    <>
      <Topbar />
      <div className="fix container" style={{ height: "calc(100vh - 50px)" }}>
        <h1>
          حجز <span style={{ color: "#fff842" }}>صيانة</span>
        </h1>
        <form
          ref={form}
          className=" m-0  row g-3 w-100"
          onSubmit={handleSubmit}
        >
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label ">
              الاسم بالكامل
            </label>
            {username === "" && empty && (
              <p className="text-danger m-0 mt-1 me-2 d-inline-block  ">
                ( يجب كتابة الاسم )
              </p>
            )}
            <input
              type="text"
              className="form-control "
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="username"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label ">
              رقم الهاتف
            </label>
            {phone === "" && empty && (
              <p className="text-danger m-0 mt-1 me-2 d-inline-block  ">
                ( يجب كتابة رقم الهاتف )
              </p>
            )}
            <input
              type="text"
              className="form-control "
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              name="phone"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="inputAddress" className="form-label ">
              العنوان
            </label>
            {address === "" && empty && (
              <p className="text-danger m-0 mt-1 me-2 d-inline-block  ">
                ( يجب كتابة العنوان )
              </p>
            )}
            <input
              type="text"
              className="form-control "
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              name="address"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputAddress2" className="form-label ">
              نوع العربية
            </label>
            {carType === "" && empty && (
              <p className="text-danger m-0 mt-1 me-2 d-inline-block  ">
                ( يجب كتابة نوع العربية )
              </p>
            )}
            <input
              type="text"
              className="form-control "
              onChange={(e) => setCarType(e.target.value)}
              value={carType}
              name="typeCar"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputAddress2" className="form-label ">
              الموديل
            </label>
            {model === "" && empty && (
              <p className="text-danger m-0 mt-1 me-2 d-inline-block  ">
                ( يجب كتابة الموديل )
              </p>
            )}
            <input
              type="text"
              className="form-control "
              onChange={(e) => setModel(e.target.value)}
              value={model}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label ">
              سنة الاصدار
            </label>
            {version === "" && empty && (
              <p className="text-danger m-0 mt-1 me-2 d-inline-block  ">
                ( يجب كتابة الاصدار )
              </p>
            )}
            <input
              type="number"
              className="form-control "
              onChange={(e) => setVersion(e.target.value)}
              value={version}
            />
          </div>
          <div className="col-md-8">
            <label htmlFor="inputAddress2" className="form-label ">
              العطل
            </label>
            {damage === "" && empty && (
              <p className="text-danger m-0 mt-1 me-2 d-inline-block  ">
                ( يجب كتابة سبب العطل )
              </p>
            )}
            <input
              type="text"
              className="form-control "
              onChange={(e) => setDamage(e.target.value)}
              value={damage}
              name="dameg"
            />
          </div>

          <div className="col-12 .btns">
            <button className="btn btn-primary ms-2" type="submit">
              حجز
            </button>
            <div className="btn btn-danger" onClick={() => clearAll()}>
              حذف
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Fix;
