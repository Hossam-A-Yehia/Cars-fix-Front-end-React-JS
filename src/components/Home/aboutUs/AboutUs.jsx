import React from 'react'
import "./aboutUs.css"
import money from "../../imgs/about/money.png"
import mechanic from "../../imgs/about/mechanic_serv.png"
import time from "../../imgs/about/chronometers.png"


function AboutUs() {
    return (
        <section className='aboutUs w-100 pb-6' id='about'>
            <div className="container">
                <h2 className="main-title " data-aos="flip-left">اوتو فيكس</h2>
                <p className='spacialP ' data-aos="flip-left" >أوتو راب هو المركز الاول من نوعه في الوطن العربي لخدمة السيارات , والذي يتكون من فريق عمل يهدف لإحداث ثورة في عالم تصليح السيارات، وايصال كل صاحب مركبة للمركبة المثالية , لتكون بلادنا خالية من السيارات العاطلة على الطريق، فنحن من سيساعدك للحصول على :</p>
                <div className="services-section row d-flex align-items-center justify-content-center " style={{ margin: "100px 0" }}>
                    <div className="card col-md-3 text-center position-relative rounded " data-aos="fade-down" style={{ width: "330px", transition: "transform 0.3s", cursor: "pointer", margin: "0 15px", zIndex: "0" }} >
                        <div className="d-flex align-items-center justify-content-center rounded-circle text-bg-light " style={{ width: "150px", height: "150px", border: "10px solid #007bff", transition: "transform 1s", margin: "-75px auto 0" }}>
                            <img src={money} alt="Money" />
                        </div>
                        <h2 className='text-center position-relative text-light'>اسعار منافسة</h2>
                        <p>تشمل الشركات التابعة لها الشركة المصنعة لسيارات الركاب بايك موتور، صانع مركبات عسكرية و سيارات الدفع الرباعي ، باو ؛ وصانع الشاحنات والحافلات والمعدات الزراعية ، فوتون للسيارات </p>
                    </div>
                    <div className="card col-md-3 text-center position-relative rounded " data-aos="fade-down" style={{ width: "330px", transition: "transform 0.3s", cursor: "pointer", margin: "0 15px", zIndex: "0" }}>
                        <div className="d-flex align-items-center justify-content-center rounded-circle text-bg-light " style={{ width: "150px", height: "150px", border: "10px solid #007bff", transition: "transform 1s", margin: "-75px auto 0" }}>
                            <img src={mechanic} alt="Mechanic" />
                        </div>
                        <h2 className='text-center position-relative text-light' >الاحترافية</h2>
                        <p>إن الشركة فى ١ اكتوبر الجاري استقبلت الفريق الفنى من الشركه الام بايك فى الصين فى مراكز خدمة بودى جروب لإقامه دائمه  لتبادل الخبرات و تدريب و متابعه الفريق الفنى فى مراكز الخدمة على تكنولوچيا الجيل التاسع من بايك</p>
                    </div>
                    <div className="card col-md-3 text-center position-relative rounded mt-sm-3 " data-aos="fade-down" style={{ width: "330px", transition: "transform 0.3s", cursor: "pointer", margin: "0 15px", zIndex: "0" }}>
                        <div className="d-flex align-items-center justify-content-center rounded-circle text-bg-light " style={{ width: "150px", height: "150px", border: "10px solid #007bff", transition: "transform 1s", margin: "-75px auto 0" }}>
                            <img src={time} alt="Time" />
                        </div>
                        <h2 className='text-center position-relative text-light'>السرعة</h2>
                        <p> خطوة لتعظيم ربحبة الشركات واستعادة جذب العملاء للمراكز المعتمدة المال ـ خاص أعلنت 8 علامات تجارية، عن خصومات على قطع الغيار، والصيانة، وتقديم خدمات أخرى للسيارات</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs