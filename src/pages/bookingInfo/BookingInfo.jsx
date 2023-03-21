import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./bookingInfo.css"

function BookingInfo() {
    const [name, setName] = useState()
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [carType, setCarType] = useState("")
    const [model, setModel] = useState("")
    const [version, setVersion] = useState("")
    const [received, setReceived] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [damage, setDamage] = useState("")
    const [price, setPrice] = useState("")

    const [data, setData] = useState()
    const { id } = useParams()
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const fetchOneBooking = async () => {
            const res = await axios.get(`http://localhost:5000/api/booking/${id}`)
            setData(res.data)
            setName(res.data.name)
            setPhone(res.data.phone)
            setAddress(res.data.address)
            setCarType(res.data.carType)
            setModel(res.data.model)
            setVersion(res.data.version)
            setReceived(res.data.received)
            setDueDate(res.data.dueDate)
            setDamage(res.data.damage)
            setPrice(res.data.price)
        }
        fetchOneBooking()
    }, [id, updateMode])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name,
            phone,
            address,
            carType,
            model,
            version,
            received,
            dueDate,
            damage,
            price,
        }
        await axios.put(`http://localhost:5000/api/booking/${id}`, data)
        setUpdateMode(false)
    }

    return (
        <>
            {<>
                {data ? <div className=' carInfo position-absolute top-50 start-50 translate-middle w-100' style={{ height: "100vh" }}>
                    {updateMode ? <h1 className='header'>تعديل <span style={{ color: "#fff842" }}>الحجز</span></h1>
                        : <h1 className='header'>تفاصيل <span style={{ color: "#fff842" }}>الحجز</span></h1>}
                    <form className=" m-0 position-absolute start-0 row g-3 px-3 w-100" onSubmit={handleSubmit} >
                        <div className="col-md-4">
                            <label htmlFor="inputEmail4" className="form-label">الاسم بالكامل :</label>
                            {updateMode ? <input type="text" className="form-control mb-2 " style={{ width: "calc(100% - 40px)" }} onChange={e => setName(e.target.value)} value={name} /> : <p>{data.name}</p>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPassword4" className="form-label">رقم الهاتف</label>
                            {updateMode ? <input type="text" className="form-control mb-2 " style={{ width: "calc(100% - 40px)" }} onChange={e => setPhone(e.target.value)} value={phone} /> : <p>{data.phone}</p>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputAddress" className="form-label">العنوان </label>
                            {updateMode ? <input type="text" className="form-control mb-2 " style={{ width: "100%" }} onChange={e => setAddress(e.target.value)} value={address} /> : <p>{data.address}</p>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputAddress2" className="form-label">نوع العربية</label>
                            {updateMode ? <input type="text" className="form-control mb-2 " style={{ width: "calc(100% - 40px)" }} onChange={e => setCarType(e.target.value)} value={carType} /> : <p>{data.carType}</p>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputAddress2" className="form-label">الموديل </label>
                            {updateMode ? <input type="text" className="form-control mb-2 " style={{ width: "calc(100% - 40px)" }} onChange={e => setModel(e.target.value)} value={model} /> : <p>{data.model}</p>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputCity" className="form-label">سنة الاصدار</label>
                            {updateMode ? <input type="text" className="form-control mb-2 " style={{ width: "100% " }} onChange={e => setVersion(e.target.value)} value={version} /> : <p>{data.version}</p>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputZip" className="form-label">تاريخ الاستلام</label>
                            {updateMode ? <input type="text" className="form-control mb-2 " style={{ width: "calc(100% - 40px)" }} onChange={e => setReceived(e.target.value)} value={received} /> : <p>{data.received}</p>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputZip" className="form-label">تاريخ التسليم</label>
                            {updateMode ? <input type="text" className="form-control mb-2 " style={{ width: "calc(100% - 40px)" }} onChange={e => setDueDate(e.target.value)} value={dueDate} /> : <p>{data.dueDate}</p>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputAddress2" className="form-label">العطل</label>
                            {updateMode ? <input type="text" className="form-control mb-2 " style={{ width: "100% " }} onChange={e => setDamage(e.target.value)} value={damage} /> : <p>{data.damage}</p>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputAddress2" className="form-label">السعر</label>
                            {updateMode ? <input type="text" className="form-control mb-2 " style={{ width: "100% " }} onChange={e => setPrice(e.target.value)} value={price} /> : <p>{data.price}</p>}
                        </div>
                        <div className="col-12 .btns">
                            {updateMode ?
                                <>
                                    <button className='btn btn-primary' type='submit' >تأكيد</button>
                                    <button className='btn btn-danger d-block me-auto' onClick={() => setUpdateMode(false)} >الغاء</button>
                                </>
                                :
                                <>
                                    <Link to="/bookingList" className="btn btn-danger ms-3">رجوع</Link>
                                    <div className='btn btn-primary' onClick={() => setUpdateMode(true)} >تعديل</div>
                                    <div href='#طباعة الايصال' className="btn btn-warning me-auto">طباعة الايصال</div>
                                </>
                            }
                        </div>
                    </form>
                </div> : ""}
            </>}
        </>
    )
}

export default BookingInfo