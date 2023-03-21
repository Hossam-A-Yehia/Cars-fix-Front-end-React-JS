import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

import { ImMenu } from "react-icons/im"
import { VscEyeClosed } from "react-icons/vsc"

import { AiOutlineHome } from "react-icons/ai"
import { FaCarCrash } from "react-icons/fa"
import { MdMiscellaneousServices } from "react-icons/md"
import { BiPackage } from "react-icons/bi"
import { FaStreetView } from "react-icons/fa"
import { AiOutlineContacts } from "react-icons/ai"
import { MdReportProblem } from "react-icons/md"
import { GoSignIn } from "react-icons/go"




function Navbar({ handleComplaintTrue }) {
    const [activeNav, setActiveNav] = useState("#")
    const [toggleNav, setToggleNav] = useState(false)




    return (
        <nav className='d-flex flex-column position-fixed' style={toggleNav ? { height: "540px", overflow: "unset" } : { height: "66px" }}>
            <a href='#opneNav' onClick={() => setToggleNav(!toggleNav)} className='toggle__nav'>{toggleNav ? <VscEyeClosed /> : <ImMenu />}</a>
            <a href='#landing' onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /><span>الرئيسية</span></a>
            <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaCarCrash /><span>من نحن</span></a>
            <a href='#services' onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><MdMiscellaneousServices /><span>خدماتنا</span></a>
            <a href='#packages' onClick={() => setActiveNav("#packages")} className={activeNav === "#packages" ? "active" : ""}><BiPackage /><span>الباقات</span></a>
            <a href='#testimonials' onClick={() => setActiveNav("#testimonials")} className={activeNav === "#testimonials" ? "active" : ""}><FaStreetView /><span>قالوا عنا</span></a>
            <a href='#contactus' onClick={() => setActiveNav("#contactus")} className={activeNav === "#contactus" ? "active" : ""}><AiOutlineContacts /><span>اتصل بنا</span></a>
            <a href='#complaint' onClick={handleComplaintTrue}><MdReportProblem /><span> شكوي</span></a>
            <Link to='/login'><GoSignIn /><span>الدخول</span></Link>
        </nav>
    )
}

export default Navbar