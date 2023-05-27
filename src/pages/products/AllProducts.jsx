import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import CardProduct from "../../components/Home/cardProduct/CardProduct";
import { AiOutlineSearch } from "react-icons/ai";
import "./allProducts.css";
import axios from "axios";
import Topbar from "../../components/Home/topbar/Topbar";

function AllProducts() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [searchByTitle, setSearchByTitle] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`https://cars-bac.vercel.app/api/products`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [id]);

  return (
    <>
      <Topbar />
      <div className=" products p-2">
        <div
          className="py-3 px-4 mt-2 fs-4 fw-bold text-light text-center"
          style={{ borderBottom: "1px solid #999" }}
        >
          {id ? id : "جميع المنتجات"}
        </div>
        <form className="w-50 position-relative mt-3 mx-auto" role="search">
          <input
            className="form-control bg-transparent fw-bold text-light"
            type="search"
            placeholder="اكتب اسم المنتج اللي بتدور عليه وسيب الباقي علينا"
            onChange={(e) => setSearchByTitle(e.target.value)}
            style={{ height: "50px", fontFamily: "inherit " }}
          />
          <AiOutlineSearch
            className=" fs-3  position-absolute top-50"
            style={{
              fontSize: "30",
              left: "10px",
              transform: "translatey(-50%)",
            }}
          />
        </form>
        <div className="position-relative" style={{ minHeight: "300px" }}>
          <Row className="d-flex mt-3 m-0">
            {data
              .filter((items) => {
                return searchByTitle.toLowerCase() === ""
                  ? items
                  : items.title.toLowerCase().includes(searchByTitle);
              })
              .map((product) => (
                <CardProduct product={product} key={product._id} />
              ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
