import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Booking/Sidebar'
import "./bookinList.css"
import Loading from '../../components/loading/Loading'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function BookingList() {
    const [run, setRun] = useState(true)
    const [data, setData] = useState()
    const [reload, setReload] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            setRun(false)
        }, 1000);
        const fetchBookings = async () => {
            const res = await axios.get("http://localhost:5000/api/booking")
            setData(res.data)
        }
        fetchBookings()
    }, [reload])
    // console.log(data.length);
    const handleDelete = async (e) => {
        try {
            await axios.delete(`http://localhost:5000/api/booking`, {
                data: { id: e._id }
            })
            toast.error(`تم حذف حجز باسم ${e.name}`)
        } catch (err) { console.log(err); }
        setReload(reload + 1)
    }

    return (<>

        {run ? <Loading /> : <div className='bookingList'>
            <Sidebar />
            <div className="table" >
                <h1>قائمة <span className="yellow">الحجوزات</span></h1>
                <table className="container" >
                    <thead >
                        <tr >
                            <th><h1>الاسم</h1></th>
                            <th><h1>نوع العربية</h1></th>
                            <th><h1>الموديل</h1></th>
                            <th><h1>العطل </h1></th>
                            <th><h1>السعر</h1></th>
                            <th><h1>الحالة</h1></th>
                            <th><h1>الحذف</h1></th>
                            <th><h1>التفاصيل</h1></th>
                        </tr>
                    </thead>
                    <tbody data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        {data ? data.map(e => (
                            <tr key={e._id} >
                                <td data-label="الاسم">{e.name}</td>
                                <td data-label="نوع العربية">{e.carType}</td>
                                <td data-label="الموديل">{e.model}</td>
                                <td data-label="العطل">{e.damage}</td>
                                <td data-label="السعر">{e.price}  <sup>جنيه</sup></td>
                                <td data-label="الحالة" ><input type="checkbox" /></td>
                                <td data-label="حذف"><div onClick={() => handleDelete(e)} className='btn btn-danger'>حذف</div></td>
                                <td data-label="التفاصيل">
                                    <Link to={`/bookingList/${e._id}`}>
                                        <div className='btn btn-primary'>التفاصيل</div>
                                    </Link>
                                </td>
                            </tr>
                        )) : ""}
                    </tbody>
                </table>
            </div>
        </div>}
    </>
    )
}

export default BookingList