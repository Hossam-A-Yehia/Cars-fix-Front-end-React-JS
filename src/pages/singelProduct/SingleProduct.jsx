import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addItem } from "../../store/CartSlice";
import IMG from "../../components/imgs/single/57357.gif";
import IMG2 from "../../components/imgs/single/497-truck-delivery-outline.gif";
import IMG3 from "../../components/imgs/single/177-envelope-mail-send-outline.gif";
import IMG4 from "../../components/imgs/single/220-arrow-9.gif";
import IMG5 from "../../components/imgs/single/946-equity-security-outline.gif";
// import Comments from "../../components/comments/Comments";
// import SuggestedProducts from "../../components/stggested/SuggestedProducts";
import axios from "axios";
import Topbar from "../../components/Home/topbar/Topbar";
import { addItem } from "../../store/CartSlice";

function SingleProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `https://cars-bac.vercel.app/api/products/find/${id}`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleCart = () => {
    dispatch(addItem({ ...product, quantity, date: new Date() - 1 }));
  };
  const flex = "d-flex align-items-center";
  const button = "border-0 bg-transparent fw-bold fs-2 text-white";
  return (
    <>
      <Topbar />
      <div
        className="p-2 my-3 position-relative text-white"
        style={{ minHeight: "calc(100vh - 60px)" }}
      >
        <div className="row d-flex m-0">
          <div className="col-md-5 p-4 text-center">
            <img
              src={product?.img}
              alt="a"
              style={{ height: "50vh", objectFit: "contain" }}
            />
          </div>
          <div className=" p-3 col-md-4 ">
            <div>
              <h1 className="fs-4">{product?.title}</h1>
              <p className="my-4 text-info">{product?.desc}</p>
              <p className="fs-4 fw-medium d-flex align-items-center justify-content-between">
                <div>
                  {product?.price} <sup>جنيه</sup>
                </div>
              </p>
            </div>

            <div
              className={`alert p-1 border border-primary mt-2 ${flex} justify-content-center rounded gap-2`}
              role="alert"
            >
              <img src={IMG} alt="5737" style={{ width: "80px" }} />
              <p
                className="m-0"
                style={{ fontSize: "13px", color: "rgb(215 208 208)" }}
              >
                اتبرع لمستشفى 57357، لعلاج الاطفال من مرض السرطان بالمجان وساعد
                في علاج اكبر عدد منهم{" "}
              </p>
            </div>
            <div className={`${flex} gap-5 my-2`}>
              <div className={`${flex} gap-2`}>
                <button
                  onClick={() => handleQuantity("dec")}
                  className={button}
                >
                  -
                </button>
                <span
                  className="d-block border border-primary rounded-2 py-1 px-3"
                  value={quantity}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantity("cre")}
                  className={button}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-outline-primary "
                onClick={() => handleCart()}
              >
                اضافة الي العربة
              </button>
            </div>
          </div>
          <div className="col-md-3 p-2 ">
            <div className={`${flex} gap-2 border-bottom py-2`}>
              <img
                src={IMG4}
                alt=""
                style={{
                  width: "50px",
                  borderRadius: "50%",
                  background: "#e7e8ff",
                }}
              />
              <span style={{ fontSize: "14px " }}>
                لا يمكن استبدال أو ارجاع هذا المنتج بعد 15 يوم
              </span>
            </div>
            <div className={`${flex} gap-2 border-bottom py-2`}>
              <img
                src={IMG3}
                alt=""
                style={{
                  width: "50px",
                  borderRadius: "50%",
                  background: "#e7e8ff",
                }}
              />
              <span style={{ fontSize: "15px " }}>شحن موثوق به</span>
            </div>
            <div className={`${flex} gap-2 border-bottom py-2 `}>
              <img
                src={IMG2}
                alt=""
                style={{
                  width: "50px",
                  borderRadius: "50%",
                  background: "#e7e8ff",
                }}
              />
              <div>
                <span className="fw-bold" style={{ fontSize: "16px " }}>
                  توصيل مجاني
                </span>
                <span
                  className="d-block text-secondary"
                  style={{ fontSize: "13px " }}
                >
                  بدون مصاريف شحن لما تشتري ب 200 جنيه أو أكتر
                </span>
              </div>
            </div>
            <div className={`${flex} gap-2 border-bottom py-2 `}>
              <img
                src={IMG5}
                alt=""
                style={{
                  width: "50px",
                  borderRadius: "50%",
                  background: "#e7e8ff",
                }}
              />
              <div>
                <span className="fw-bold" style={{ fontSize: "16px " }}>
                  تسوق أمن
                </span>
                <span
                  className="d-block text-secondary"
                  style={{ fontSize: "13px " }}
                >
                  بياناتك محمية دائما
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <SuggestedProducts category={product?.categories[0]} />
          <Comments img={product?.img} title={product?.title} /> */}
      </div>
    </>
  );
}

export default SingleProduct;
