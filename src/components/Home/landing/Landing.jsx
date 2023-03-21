import React from 'react'
import "./landing.css"
import { FaAngleDoubleDown } from "react-icons/fa"

function Landing() {
    return (
        <section className="landing position-relative overflow-hidden" id='landing' style={{ minHeight: "100vh" }}>
            <div className="container position-absolute top-50 start-50 translate-middle text-center">
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    style={{ color: "#fff" }}>
                    <h1 >صلح <span>سيارتك</span> الأن</h1>
                    <p style={{ lineHeight: "30px", margin: "20px 0" }} >افضل مركز صيانة سيارات في الشرق الاوسط حيث يقوم بمتابعة كافة مراحل صيانة السيارات(حجز موعد الصيانة، استقبال العميل، الكشف عن السيارة ، صرف قطع الغيار ، الكشف النهائي ، تصميم الفاتورة الالكترونية ، تصريح الخروج)</p>
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <a href='#contactus' style={{ width: "200px", whiteSpace: "nowrap" }} className='btn btn-outline-info py-2 '> قم بالحجز الان</a>
                    </div>
                </div>
            </div>
            <a href=" #about" className="go-down">
                <i className=""><FaAngleDoubleDown className='iv' /></i>
            </a>
        </section>
    )
}

export default Landing