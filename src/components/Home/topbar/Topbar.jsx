import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/UsersSlice";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

function Topbar() {
  const dispatch = useDispatch();
  const { quantity } = useSelector((state) => state.cart);

  const handleLogout = () => {
    dispatch(logout());
    window.location.replace("/");
  };

  return (
    <nav
      class="navbar navbar-expand-lg position-sticky"
      style={{
        minHeight: "60px",
        background: "#1f1f38",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "10000",
      }}
    >
      <div class="container d-flex align-items-center justify-content-between">
        <Link
          to="/"
          class="fw-bold fs-4 text-primary d-flex align-items-center gap-2"
        >
          <img
            src="https://res.cloudinary.com/dimy2zhcs/image/upload/v1685355991/Screenshot_37_ehwdsn.png"
            alt=""
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
          AUTO FIX
        </Link>
        <div className="d-flex align-items-center justify-content-center m-0 ">
          {JSON.parse(localStorage.getItem("userCars")) ? (
            <>
              <Link
                to={`update/${
                  JSON.parse(localStorage.getItem("userCars"))._id
                }`}
              >
                <img
                  src={JSON.parse(localStorage.getItem("userCars")).profilePic}
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-outline-primary me-2"
              >
                تسجيل خروج
              </button>
            </>
          ) : (
            <>
              <Link to="login">
                <button className="btn btn-outline-primary me-2">
                  تسجيل دخول
                </button>
              </Link>
            </>
          )}
          <Link
            to="/cart"
            className="navbar-brand d-flex align-items-center "
            href="#"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: "3rem",
                height: "3rem",
                position: "relative",
              }}
            >
              <BsFillCartCheckFill
                style={{ fontSize: "30", color: "#2196f3" }}
              />
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  width: "20px",
                  height: "20px",
                  color: "white",
                  top: "0",
                  right: "0",
                  transform: "translate(25%,25%)",
                  fontSize: "15px",
                }}
              >
                {quantity}
              </div>
            </div>
            <span
              className="fw-bold"
              style={{
                fontSize: "13px",
                margin: "14px -10px 0",
                color: "#fff",
              }}
            >
              عربة التسوق
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
