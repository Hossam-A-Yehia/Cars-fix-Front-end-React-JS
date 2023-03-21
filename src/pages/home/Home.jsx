import React, { useEffect, useState } from 'react'
import AboutUs from '../../components/Home/aboutUs/AboutUs'
import ContactUs from '../../components/Home/contact/Contact'
import Footer from '../../components/Home/footer/Footer'
import Landing from '../../components/Home/landing/Landing'
import MakeComplaint from '../../components/Home/makeComplaint/MakeComplaint'
import Navbar from '../../components/Home/navbar/Navbar'
import Packages from '../../components/Home/packages/Packages'
import Services from '../../components/Home/services/Services'
import Credit from '../../components/Home/credit/Credit'
import Testimonials from '../../components/Home/testimonials/Testimonials'
import MakeComment from '../../components/Home/makeComment/MakeComment'
import Loading from '../../components/loading/Loading'

function Home() {
    const [complaintTrue, setComplaintTrue] = useState(false)
    const [commentTrue, setCommentTrue] = useState(false)
    const [run, setRun] = useState(true)
    const [buy, isBuy] = useState(false)
    const [reload, setReload] = useState(1)


    const handleComplaintTrue = () => {
        setComplaintTrue(true)
    }
    const handleCommentTrue = () => {
        setCommentTrue(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setRun(false)
        }, 1000);
    }, [])

    return (<>
        {run ? <Loading /> : <>
            <Navbar handleComplaintTrue={handleComplaintTrue} />
            <Landing />
            <MakeComplaint complaintTrue={complaintTrue} setComplaintTrue={setComplaintTrue} title={"قدم الشكوي"} placeHolder="الشكوي" />
            <MakeComment commentTrue={commentTrue} setCommentTrue={setCommentTrue} setReload={setReload} reload={reload} />
            <AboutUs />
            <Services />
            <Packages isBuy={isBuy} />
            <Credit buy={buy} isBuy={isBuy} />
            <Testimonials handleCommentTrue={handleCommentTrue} reload={reload} />
            <ContactUs />
            <Footer />
        </>}
    </>
    )
}

export default Home