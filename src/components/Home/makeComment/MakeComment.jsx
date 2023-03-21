import React, { useRef } from 'react'
import "./makeComment.css"

import { toast } from 'react-toastify'
import axios from 'axios'

function MakeComment({ commentTrue, setCommentTrue, setReload, reload }) {
    const username = useRef("")
    const massage = useRef("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: username.current.value,
            title: massage.current.value
        }
        try {
            axios.post("http://localhost:5000/api/comment", data)
            e.target.reset()
            toast.info(`تم اضافة تعليقك بنجاح شكرا لابداء رأيك`)
            setCommentTrue(false)
        } catch (err) { console.log(err) }
        setReload(reload + 1)
    }




    return (<>

        {commentTrue && <div className="makeComment position-fixed top-0 start-0 w-100 h-100" >
            <form className="position-absolute top-50 start-50 translate-middle " onSubmit={handleSubmit} >
                <div className="container my-0 mx-auto text-center rounded position-relative p-3" style={{ width: "420px", backgroundColor: "#fff" }}>
                    <div className="head rounded ">
                        <h2 className='text-center fs-3 py3 px-0'>تعليقك</h2>
                    </div>
                    <input type="text" className='form-control w-100 mb-2 mt-3' style={{ backgroundColor: "#f1e9e9" }} placeholder="الاسم بالكامل" ref={username} required />
                    <textarea className='form-control w-100 my-2 pb-5' style={{ backgroundColor: "#f1e9e9" }} placeholder="التعليق" ref={massage} required></textarea>
                    <div className=' d-flex align-items-center justify-content-between mt-4 '>
                        <button className='btn btn-primary' id="submit" type="submit">ارسال</button>
                        <button className='btn btn-danger' onClick={(e) => {
                            setCommentTrue(false)
                            e.preventDefault()
                        }}>اغلاق</button>
                    </div>
                </div>
            </form >
        </div >}
    </>
    )
}

export default MakeComment