import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardProduct from "./CardProduct.jsx";
import axios from "axios";

function BestSeller({ title, btnTitle }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://cars-bac.vercel.app/api/products");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [title]);
  console.log(data);
  return (
    <div
      className="container px-2 position-relative  "
      id="products"
      style={{ minHeight: "400px", padding: "100px 0 0 0" }}
    >
      <h2 className="main-title " data-aos="flip-left">
        قطع غيار السيارات
      </h2>
      <p className="spacialP " data-aos="flip-left">
        لأي استفسار أو خدمة لا تترد في الاتصال{" "}
      </p>

      <Row className="d-flex mt-3 m-0 " data-aos="fade-up">
        {data
          ? data
              .slice(0, 8)
              .map((product) => (
                <CardProduct product={product} key={product._id} />
              ))
          : ""}
      </Row>
      <Link to="/products">
        <button className=" w-100 p-3 btn btn-outline-info mt-5">المزيد</button>
      </Link>
    </div>
  );
}

export default BestSeller;
