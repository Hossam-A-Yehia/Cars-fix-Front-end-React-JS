import React, { useRef } from 'react'
import "./contact.css"
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';


function ContactUs() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_arquvte', 'template_jbeyimt', form.current, 'twjfcIalycanNTis5')
        e.target.reset()
        toast.success("تم ارسال رسالتك بنجاح سيتم التواصل معك في اقرب وقت")
    }


    return (
        <section className="contact" id='contactus'>
            <div className="container">
                <h2 className="main-title " data-aos="flip-left">اتصل بنا</h2>
                <p className='spacialP ' data-aos="flip-left">لأي استفسار أو خدمة لا تترد في الاتصال </p>
                <form ref={form} className="row" onSubmit={sendEmail} data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <div className='col-md-6 my-2'>
                        <input className='form-control w-100' type="text" name="name" id="name" placeholder="الأسم الكامل" />
                    </div>
                    <div className='col-md-6 my-2'>
                        <input className='form-control w-100' type="email" name="email" placeholder="البريد الالكتروني" />
                    </div>
                    <div className='col-md-12 my-2'>
                        <input className='form-control w-100' type="text" name="subject" id="" placeholder="الموضوع" />
                    </div>
                    <div className='col-md-12 my-2'>
                        <textarea className='form-control w-100' name="message" placeholder="الرسالة"></textarea>
                    </div>
                    <div className='col-md-12 my-2'>
                        <button className='btn btn-outline-primary' type='submit'>ارسال </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactUs