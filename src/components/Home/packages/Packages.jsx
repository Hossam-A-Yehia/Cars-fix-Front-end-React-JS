import React from 'react'
import "./packages.css"
import { FaCheckDouble } from "react-icons/fa"

import plan0 from "../../imgs/Packages/plan-0.jpg"
import plan1 from "../../imgs/Packages/plan-1.jpg"
import plan2 from "../../imgs/Packages/plan-2.jpg"


function Packages({ isBuy }) {
    return (
        <section className='packages' id='packages' style={{ padding: "100px 0" }}>
            <div className='container'>
                <h2 className="main-title" data-aos="flip-left">الاشتراك الشهري</h2>
                <p className='spacialP' data-aos="flip-left" >تفقد الباقات الشهرية والتي تتناسب مع جميع الفئات </p>
                <div className='boxs'>
                    <div className='box' data-aos="zoom-in-left">
                        <img src={plan0} alt="" />
                        <div className="head">
                            <h1>المجانية</h1>
                            <p>0$</p>
                            <span>في الشهر</span>
                        </div>
                        <ul className="body">
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />السرعة في الصيانة </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />ادارة علاقة العملاء </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />ادارة المركبات </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />كرت دخول المركبة </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />التقارير </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />اشعارات عبر الايميل </li>
                        </ul>
                        <button className='btn btn-outline-light' onClick={() => isBuy(true)}>أشتري الأن</button>
                    </div>

                    <div className='box ' data-aos="zoom-in">
                        <img src={plan1} alt="" />
                        <div className="head">
                            <h1>الاساسية</h1>
                            <p>75$</p>
                            <span>في الشهر</span>
                        </div>
                        <ul className="body">
                            <li style={{ fontWeight: "bold" }}><FaCheckDouble style={{ marginLeft: "5px" }} />كل محتويات الباقة الاساسية  </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />إضافة حقول خاصة </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />صلاحيات حسب المنصب </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />إدارة مطالبات التأمين للمركبات </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />الربط مع الواتس آب </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />إشعارات عبر الرسائل النصية (SMS) </li>
                        </ul>
                        <button className='btn btn-outline-light' onClick={() => isBuy(true)}>أشتري الأن</button>
                    </div>

                    <div className='box ' data-aos="zoom-in-right">
                        <img src={plan2} alt="" />
                        <div className="head">
                            <h1>الاحترافية</h1>
                            <p>190$</p>
                            <span>في الشهر</span>
                        </div>
                        <ul className="body">
                            <li style={{ fontWeight: "bold" }}><FaCheckDouble style={{ marginLeft: "5px" }} />كل محتويات الباقة الإحترافية </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />أسعار مميزة للمستخدمين </li>
                            <li> <FaCheckDouble style={{ marginLeft: "5px" }} />الخدمة مميزة لتطبيق النظام </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />مدير حساب خاص بك</li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />أمن بمستوى عالي للشركات </li>
                            <li><FaCheckDouble style={{ marginLeft: "5px" }} />مواصفات خاصة </li>
                        </ul>
                        <button className='btn btn-outline-light' onClick={() => isBuy(true)}>أشتري الأن</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Packages