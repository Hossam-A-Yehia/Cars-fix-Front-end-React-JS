import { useDispatch } from "react-redux";
import { logout } from "../../../store/UsersSlice";
import { Link } from "react-router-dom";

function Topbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.replace("/");
  };

  return (
    <nav class="navbar navbar-expand-lg pos" style={{ minHeight: "50px" }}>
      <div class="container d-flex align-items-center justify-content-between">
        <Link to="/" class="fw-bold fs-4 text-primary">
          EreYehia
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
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
