import React, { useRef } from 'react'
import "./makeComplaint.css"

import { toast } from 'react-toastify'
import axios from 'axios'

function MakeComplaint({ complaintTrue, setComplaintTrue, title, placeHolder }) {

    const username = useRef("")
    const email = useRef("")
    const massage = useRef("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: username.current.value,
            email: email.current.value,
            desc: massage.current.value
        }
        try {
            axios.post("http://localhost:5000/api/complaint", data)
            toast.success(`تم ارسال الشكوي شكرا استاذ ${data.name}`)
            e.target.reset()
        } catch (err) { console.log(err) }
    }



    return (
        <>
            {complaintTrue && <div className='makeCopmlaint position-fixed top-0 start-0 w-100 h-100' >
                <form className="position-absolute top-50 start-50 translate-middle " onSubmit={handleSubmit}>
                    <div className="container my-0 mx-auto text-center rounded position-relative p-3" style={{ width: "420px", backgroundColor: "#fff" }}>
                        <div className="head rounded">
                            <h2 className='text-center fs-3 py3 px-0'>{title}</h2>
                        </div>
                        <input type="text" className='form-control w-100 mb-2 mt-3' style={{ backgroundColor: "#f1e9e9" }} placeholder="الاسم بالكامل" ref={username} required />
                        <input type="email" className='form-control w-100 mb-2 mt-3' style={{ backgroundColor: "#f1e9e9" }} placeholder="البريد الالكتروني" ref={email} required />
                        <textarea className='form-control w-100 mt-3 pb-5' style={{ backgroundColor: "#f1e9e9" }} placeholder={placeHolder} ref={massage} required></textarea>
                        <div className=' d-flex align-items-center justify-content-between mt-4 '>
                            <button className='btn btn-primary' type="submit">ارسال</button>
                            <button className='btn btn-danger' href='#makeCopmlaint' onClick={() => setComplaintTrue(false)} >اغلاق</button>
                        </div>
                    </div>
                </form>
            </div>}
        </>
    )
}

export default MakeComplaint