// Main Library
import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
// CSS Library
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
// Pages
import "./App.css";
import Login from "./pages/Log/Login";
import Register from "./pages/Log/Register";
import Booking from "./pages/bookings/Booking";
import BookingList from "./pages/bookinsList/BookingList";
import TeamWork from "./pages/teamWork/TeamWork";
import BookingInfo from "./pages/bookingInfo/BookingInfo";
import Complaints from "./pages/messageBox/Complaints";
import Stats from "./pages/stats/Stats";
import Update from "./pages/update/Update";
import SingleProduct from "./pages/singelProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import AllProducts from "./pages/products/AllProducts";
import Fix from "./pages/fix/Fix";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="bottom-left"
          theme="colored"
          pauseOnHover={false}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/bookingList" element={<BookingList />} />
          <Route path="/ProblemBox" element={<Complaints />} />
          <Route path="/teamWork" element={<TeamWork />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/bookingList/:id" element={<BookingInfo />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/fix" element={<Fix />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
