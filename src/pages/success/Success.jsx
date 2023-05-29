import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span className="fw-bold fs-4 my-3 text-light">
        عملية شراء ناحجة سنتواصل معك قريبا , شكرا
      </span>
      <Link to="/">
        <button className="btn btn-success">الرجوع الي الصفحة الرئيسية</button>
      </Link>
    </div>
  );
};

export default Success;
