// Main Library 
import React, { useEffect } from 'react';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import AOS from "aos"
// CSS Library 
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "aos/dist/aos.css"
// Pages 
import "./App.css"
import Login from './pages/Log/Login';
import Booking from './pages/bookings/Booking';
import BookingList from './pages/bookinsList/BookingList';
import TeamWork from './pages/teamWork/TeamWork';
import BookingInfo from './pages/bookingInfo/BookingInfo';
import Complaints from './pages/messageBox/Complaints';
import Stats from './pages/stats/Stats';


function App() {

    useEffect(() => {
        if (localStorage.getItem("color")) {
            document.documentElement.style.setProperty("--main-color", localStorage.getItem("color"));
        }
        AOS.init({ duration: 1000 });
    }, [])


    return (
        <>
            <BrowserRouter>
                <ToastContainer position="top-right" theme="colored" pauseOnHover={false} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path='/bookingList' element={<BookingList />} />
                    <Route path='/ProblemBox' element={<Complaints />} />
                    <Route path='/teamWork' element={<TeamWork />} />
                    <Route path='/bookingList/:id' element={<BookingInfo />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App