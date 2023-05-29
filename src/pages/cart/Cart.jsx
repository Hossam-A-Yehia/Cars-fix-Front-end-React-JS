import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HiArrowNarrowLeft } from "react-icons/hi";
import "./cart.css";
import { clearItems, removeItem } from "../../store/CartSlice";
import Topbar from "../../components/Home/topbar/Topbar";
import StripeCheckout from "react-stripe-checkout";

function Cart() {
  const { cartProducts, total } = useSelector((state) => state.cart);
  const KEY =
    "pk_test_51MsOd0KF1DyiYwQfSVRT1EmEMyHjKJqVvplfO1S5oto6000Rkcdnb7CEKWOG8TJlvHg2epBdS3vEIBeHPmcy2HdZ00ihLP9EbK";
  const navigate = useNavigate();

  const payNow = async (token) => {
    try {
      const res = await axios({
        url: "https://e-commerce-back-end-psi.vercel.app/api/checkout/payment",
        method: "post",
        data: {
          amount: cartProducts.price * 100,
          token,
        },
      });
      if (res.status === 200) {
        navigate("/success", {
          state: { products: cartProducts },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const dispatch = useDispatch();

  const discount = 0.75;
  const flex = "d-flex align-items-center";
  const userAccount = JSON.parse(localStorage.getItem("userCars"));
  return (
    <>
      <Topbar />
      <Container>
        <div className="cart my-4 text-white">
          <h1 className="text-center mb-5">سلة المشتريات</h1>
          {cartProducts?.length > 0 ? (
            <div>
              <div className="titles">
                <h3 style={{ paddingLeft: "0.5rem" }}>المنتج</h3>
                <h3>السعر</h3>
                <h3 className="text-center">الكمية</h3>
                <h3 style={{ paddingRight: "0.5rem", justifySelf: "left" }}>
                  المجموع
                </h3>
              </div>
              <div>
                {cartProducts?.map((item) => (
                  <div
                    className="cart-item"
                    key={item.date}
                    style={{ borderTop: "1px solid #999", padding: "2rem 0 " }}
                  >
                    <div className="pro d-flex align-items-center" style={{}}>
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          width: "180px",
                          marginLeft: "1rem",
                          height: "200px",
                        }}
                      />
                      <div>
                        <h5>{item.title}</h5>
                        <p className="text-white-50 ms-2">{item.desc}</p>
                        <button
                          className="btn btn-danger"
                          onClick={() => dispatch(removeItem(item))}
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                    <div className="price">
                      {item.price} <sup>جنيه</sup>
                    </div>
                    <div className={`${flex} quantity justify-content-center`}>
                      <span className="  d-block border border-primary rounded-2 py-1 px-3">
                        {item.quantity}
                      </span>
                    </div>
                    <div
                      className="total"
                      style={{
                        margin: "0 0.5rem",
                        textAlign: "left",
                        fontWeight: "bold",
                      }}
                    >
                      {item.quantity * item.price} <sup>جنيه</sup>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="checkout d-flex align-items-center justify-content-between py-4"
                style={{ borderTop: "1px solid #999" }}
              >
                <button
                  className="btn btn-outline-danger"
                  style={{ width: "fit-content" }}
                  onClick={() => dispatch(clearItems())}
                >
                  امسح كل المنتجات{" "}
                </button>
                <div className=" " style={{ width: "200px" }}>
                  <div className="d-flex justify-content-between ">
                    <h5 className="fw-bold">الاجمالي</h5>
                    <div className=" fw-bold text-decoration-line-through">
                      {total} <sup>جنيه</sup>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between border-bottom border-danger  ">
                    <h5 className="fw-bold">الخصم</h5>
                    <div className=" fw-bold">30% </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="fw-bold">المدفوع</h5>
                    <div className=" fw-bold">
                      {total * discount} <sup>جنيه</sup>
                    </div>
                  </div>
                  {userAccount ? (
                    <StripeCheckout
                      name="Auto Fix"
                      image="https://res.cloudinary.com/dimy2zhcs/image/upload/v1685355991/Screenshot_37_ehwdsn.png"
                      label="Pay Now"
                      billingAddress
                      shippingAddress
                      description={`المبلغ المطلوب دفعه هو ${
                        total * discount
                      } جنيه`}
                      amount={total * discount * 100}
                      token={payNow}
                      stripeKey={KEY}
                    >
                      <button className="w-100 my-2 btn btn-success">
                        تأكيد الدفع
                      </button>
                      ;
                    </StripeCheckout>
                  ) : (
                    <Link to="/login" className="btn btn-warning">
                      يجب تسجيل الدخول اولا
                    </Link>
                  )}
                  <Link className="text-primary fw-bold" to="/">
                    استمر بالتسوق
                    <HiArrowNarrowLeft style={{ fontSize: "25px" }} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center fs-4">
              <p className="m-0 p-0">سلة المشتريات فارغة </p>
              <Link className="text-primary fw-bold" to="/">
                اذهب للتسوق <HiArrowNarrowLeft style={{ fontSize: "25px" }} />
              </Link>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default Cart;
