import React, { useEffect, useState } from 'react'

import "./complaints.css"
import Avatar1 from "../../components/imgs/avater/avatar_1.png"
import Sidebar from '../../components/Booking/Sidebar'
import Loading from '../../components/loading/Loading'
import { toast } from 'react-toastify'
import axios from 'axios'

function Complaints() {
    const [run, setRun] = useState(true)
    const [data, setData] = useState()
    const [reload, setReload] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            setRun(false)
        }, 1000);
        const fetchComplaints = async () => {
            const res = await axios.get("http://localhost:5000/api/complaint")
            setData(res.data)
        }
        fetchComplaints()
    }, [reload])

    const handleDelete = async (e) => {
        try {
            await axios.delete(`http://localhost:5000/api/complaint`, {
                data: { id: e._id }
            })
            toast.error(`تم حذف شكوي باسم ${e.name}`)
        } catch (err) { console.log(err); }
        setReload(reload + 1)
    }

    return (<>
        {run ? <Loading /> : <div className='complaintsBox position-absolute start-0'>
            <Sidebar />
            <h1>صندوق <span style={{ color: "#fff842" }}>الشكاوي</span></h1>
            <div className=" position-relative" style={{ padding: "70px 0" }}>
                <div className="container">
                    <div className='boxs'>
                        {data ? data.map(e => (
                            <div key={e._id} className="box" data-aos="flip-up">
                                <img src={Avatar1} alt="" />
                                <h2>{e.name}</h2>
                                <p>{e.email}</p>
                                <p>{e.desc}</p>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <button onClick={() => handleDelete(e)} className='btn btn-danger'>حذف</button>
                                    <span className='d-inline-block ' style={{ fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>{new Date(e.createdAt).toDateString()}</span>
                                </div>
                            </div>
                        )) : <h1>لا يوجد شكاوي</h1>}
                    </div>
                </div>
            </div>
        </div>}
    </>
    )
}

export default Complaints