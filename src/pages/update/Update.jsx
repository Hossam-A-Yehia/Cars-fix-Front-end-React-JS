import React, { useEffect, useState } from "react";
import { ImUserPlus } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { logout } from "../../store/UsersSlice";

function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [file, setFile] = useState(null);
  const [img, setImg] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("userCars"));
  useEffect(() => {
    if (file !== null) {
      const fileName = new Date().getTime() + file?.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log("IMG Erorr ");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImg(downloadURL);
          });
        }
      );
    }
  }, [file, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://cars-bac.vercel.app/api/users/${id}`, {
        username,
        email,
        password,
        profilePic: img ? img : userInfo.img,
        userId: userInfo._id,
      });
      dispatch(logout());
      window.location.replace("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto my-3 text-white">
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <h2>تحديث حسابك الشخصي</h2>
            <p className="text-danger fs-5" style={{ cursor: "pointer" }}>
              حذف حسابك
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-50 m-auto">
            <div className="d-flex my-4 align-items-center">
              <img
                src={img ? img : userInfo.profilePic}
                alt=""
                className="rounded-4"
                style={{ width: "70px", height: "70px" }}
              />
              <label htmlFor="profileIMG">
                <ImUserPlus
                  className="fs-3 me-3"
                  style={{ color: "#009688" }}
                />
              </label>
              <input
                type="file"
                id="profileIMG"
                className="d-none"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <label>اسم المستخدم</label>
            <input
              type="text"
              placeholder={userInfo.username}
              className="form-control border border-secondary  mt-2 mb-4 text-white bg-transparent "
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>البريد الالكتروني</label>
            <input
              type="email"
              placeholder={userInfo.email}
              className="form-control border border-secondary  mt-2 mb-4 text-white bg-transparent "
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>كلمة السر</label>
            <input
              type="password"
              className="form-control border border-secondary  mt-2 mb-4 text-white bg-transparent "
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex align-items-center justify-content-between">
              <button type="submit" className="btn btn-primary ">
                تحديث
              </button>
              <Link to="/">
                <button className="btn btn-danger ">رجوع</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
