import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Booking/Sidebar'
import "./teamWork.css"

import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

import ward from "../../components/imgs/TeamProject/word.jpeg"
import hoso2 from "../../components/imgs/TeamProject/WhatsApp Image 2023-03-17 at 1.47.29 PM.jpeg"
import nagat from "../../components/imgs/TeamProject/Nagat.jpeg"
import shded from "../../components/imgs/TeamProject/shded.jpeg"
import toha from "../../components/imgs/TeamProject/toha.jpeg"
import kero from "../../components/imgs/TeamProject/kero.jpg"

import Loading from '../../components/loading/Loading'



const data = [
    {
        id: 1,
        name: "كيرلس مجدي",
        tilte: "مصمم مواقع",
        img: kero
    },
    {
        id: 2,
        name: "توحا مصطفي",
        tilte: "مصمم مواقع",
        img: toha
    },
    {
        id: 3,
        name: "محمد شديد",
        tilte: "مطور مواقع",
        img: shded
    },
    {
        id: 4,
        name: "نجاة خالد",
        tilte: "UI/UX",
        img: nagat
    },
    {
        id: 5,
        name: "ورد حسونه",
        tilte: "UI/UX",
        img: ward
    },
    {
        id: 6,
        name: "حسام يحيي",
        tilte: "مطور مواقع",
        img: hoso2
    },
]



function TeamWork() {
    const [run, setRun] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setRun(false)
        }, 1000);
    }, [])


    return (
        <>
            {run ? <Loading /> : <div className='team h-100 position-absolute start-0'>
                <Sidebar />
                <div className="container">
                    <h1>فريق <span style={{ color: "#fff842" }}>العمل</span></h1>
                    <div className="row">
                        {data.map(e => {
                            return (<div data-aos="fade-up" key={e.id}
                                data-aos-easing="linear"
                                data-aos-duration="1000" className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="our-team position-relative overflow-hidden text-center">
                                    <div className="picture">
                                        <img src={e.img} className="img-fluid" alt="Team" />
                                    </div>
                                    <div className="team-content">
                                        <h3 className="name">{e.name} </h3>
                                        <h4 className="title">{e.tilte}</h4>
                                    </div>
                                    <ul className="social">
                                        <li><a href="#Facebook"><BsFacebook /></a></li>
                                        <li><a href="#Linkedin"><BsLinkedin /></a></li>
                                        <li><a href="#Github"><BsGithub /></a></li>
                                        <li><a href="#Instagram"><BsInstagram /></a></li>
                                    </ul>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>}
        </>
    )

}

export default TeamWork

