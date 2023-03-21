import React, { useEffect, useState } from 'react'
import "./testimonials.css"

import AVTR1 from "../../imgs/avater/avatar_1.png"

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

function Testimonials({ handleCommentTrue, reload }) {
    const [data, setData] = useState()

    useEffect(() => {
        const fetchComment = async () => {
            const res = await axios.get("http://localhost:5000/api/comment")
            setData(res.data)
        }
        fetchComment()
    }, [reload])

    return (
        <section id='testimonials'>
            <h2 className="main-title " data-aos="flip-left">قالوا عنا</h2>
            <p className='spacialP ' data-aos="flip-left"> اراء بعض العملاء رجاء ابدي رأيك لكي نحسن مستوي الخدمة</p>
            <Swiper className='container testimonials__container text-center' style={{ paddingBottom: "3rem" }}
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {data?.map(
                    e => <SwiperSlide className='testimonial' key={e._id}>
                        <div className='client__avatar' data-aos="flip-down">
                            <img src={AVTR1} alt="" />
                        </div>
                        <h5 style={{ color: "#fff" }}>{e.name}</h5>
                        <span className='ms-2 ' style={{ fontSize: "12px", color: "#777777ad", fontWeight: "600", cursor: "pointer" }}>{new Date(e.createdAt).toDateString()}</span>
                        <small className='client__review'>{e.title}</small>
                    </SwiperSlide>
                )}
            </Swiper>
            <button className='btn btn-primary m-auto d-block my-3 py-2 px-3 fs-5' onClick={() => handleCommentTrue()}>ضع تعليقك</button>
        </section>
    )
}

export default Testimonials