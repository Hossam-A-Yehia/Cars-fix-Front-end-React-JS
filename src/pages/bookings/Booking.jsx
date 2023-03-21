import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Booking/Sidebar'
import "./bookings.css"
import Loading from '../../components/loading/Loading'
import { toast } from 'react-toastify'
import axios from 'axios'


function Booking() {
    const [run, setRun] = useState(true)
    const [empty, isEmpty] = useState(false)

    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [carType, setCarType] = useState("")
    const [model, setModel] = useState("")
    const [version, setVersion] = useState("")
    const [received, setReceived] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [damage, setDamage] = useState("")
    const [price, setPrice] = useState("")


    const clearAll = () => {
        setUsername("")
        setPhone("")
        setAddress("")
        setCarType("")
        setModel("")
        setVersion("")
        setReceived("")
        setDueDate("")
        setDamage("")
        setPrice("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        isEmpty(true)
        if (username === "" || phone === "" || address === "" || carType === "" || model === "" || version === "" || received === "" || price === "" || damage === "" || dueDate === "") {
            toast.error("لا يجب ان يكون هناك حقل فارغ")
        } else {
            const data = {
                name: username,
                phone: phone,
                address: address,
                carType: carType,
                model: model,
                version: version,
                received: received,
                dueDate: dueDate,
                damage: damage,
                price: price,
            }
            await axios.post("http://localhost:5000/api/booking", data)
            toast.info(`تم تسجيل حجز جديد باسم ${username} `)
            e.target.reset()
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setRun(false)
        }, 1000);
    }, [])

    return (<>

        {run ? <Loading /> : <div className='booking' style={{ height: "auto" }}>
            <Sidebar />
            <h1 >حجز <span style={{ color: "#fff842" }}>صيانة</span></h1>
            <form className=" m-0 position-absolute start-0 row g-3" style={{ width: "calc(100% - 76px)" }} onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label ">الاسم بالكامل</label>
                    {username === "" && empty && <p className='text-danger m-0 mt-1 me-2 d-inline-block  '> ( يجب كتابة الاسم )</p>}
                    <input type="text" className="form-control " onChange={e => setUsername(e.target.value)} value={username} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label ">رقم الهاتف</label>
                    {phone === "" && empty && <p className='text-danger m-0 mt-1 me-2 d-inline-block  '> ( يجب كتابة رقم الهاتف )</p>}
                    <input type="text" className="form-control " onChange={e => setPhone(e.target.value)} value={phone} />
                </div>
                <div className="col-md-5">
                    <label htmlFor="inputAddress" className="form-label ">العنوان </label>
                    {address === "" && empty && <p className='text-danger m-0 mt-1 me-2 d-inline-block  '> ( يجب كتابة العنوان )</p>}
                    <input type="text" className="form-control " onChange={e => setAddress(e.target.value)} value={address} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputAddress2" className="form-label ">نوع العربية</label>
                    {carType === "" && empty && <p className='text-danger m-0 mt-1 me-2 d-inline-block  '> ( يجب كتابة نوع العربية )</p>}
                    <input type="text" className="form-control " onChange={e => setCarType(e.target.value)} value={carType} />
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputAddress2" className="form-label ">الموديل </label>
                    {model === "" && empty && <p className='text-danger m-0 mt-1 me-2 d-inline-block  '> ( يجب كتابة الموديل )</p>}
                    <input type="text" className="form-control " onChange={e => setModel(e.target.value)} value={model} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label ">سنة الاصدار</label>
                    {version === "" && empty && <p className='text-danger m-0 mt-1 me-2 d-inline-block  '> ( يجب كتابة الاصدار )</p>}
                    <input type="number" className="form-control " onChange={e => setVersion(e.target.value)} value={version} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label ">تاريخ الاستلام</label>
                    {received === "" && empty && <p className='text-danger m-0 mt-1 me-2 d-inline-block  '> ( يجب كتابة تاريخ الاستلام )</p>}
                    <input type="date" className="form-control " onChange={e => setReceived(e.target.value)} value={received} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label ">تاريخ التسليم</label>
                    {dueDate === "" && empty && <p className='text-danger m-0 mt-1 me-2 d-inline-block  '> ( يجب كتابة تاريخ التسليم )</p>}
                    <input type="date" className="form-control " onChange={e => setDueDate(e.target.value)} value={dueDate} />
                </div>
                <div className="col-md-9">
                    <label htmlFor="inputAddress2" className="form-label ">العطل</label>
                    {damage === "" && empty && <p className='text-danger m-0 mt-1 me-2 d-inline-block  '> ( يجب كتابة سبب العطل )</p>}
                    <input type="text" className="form-control " onChange={e => setDamage(e.target.value)} value={damage} />
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputAddress2" className="form-label ">السعر</label>
                    {price === "" && empty && <p className='text-danger m-0 mt-1 me-2 d-inline-block  '> ( يجب كتابة السعر )</p>}
                    <input type="text" className="form-control " onChange={e => setPrice(e.target.value)} value={price} />
                </div>
                <div className="col-12 .btns">
                    <button className='btn btn-primary ms-2' type="submit">حجز</button>
                    <div className='btn btn-danger' onClick={() => clearAll()}>حذف</div>
                    <div className='btn btn-warning me-auto' >طباعة الايصال</div>
                </div>
            </form>
        </div>}
    </>
    )
}

export default Booking