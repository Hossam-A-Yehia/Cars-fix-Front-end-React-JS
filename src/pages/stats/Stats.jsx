import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Booking/Sidebar'
import "./stats.css"
import { FcTodoList } from "react-icons/fc"
import { TfiCommentsSmiley } from "react-icons/tfi"
import { TiMessages } from "react-icons/ti"
import axios from 'axios'
function Stats() {
  const [bookinsL, setBookingsL] = useState([])
  const [complL, setComplL] = useState([])
  const [commentL, setCommentL] = useState([])

  useEffect(() => {

    const fetchBookings = async () => {
      const res = await axios.get("http://localhost:5000/api/booking")
      setBookingsL(res.data.length)
    }
    const fetchComplaints = async () => {
      const res = await axios.get("http://localhost:5000/api/complaint")
      setComplL(res.data.length)
    }
    const fetchComment = async () => {
      const res = await axios.get("http://localhost:5000/api/comment")
      setCommentL(res.data.length)
    }
    fetchComment()
    fetchComplaints()
    fetchBookings()
  }, [bookinsL, complL, commentL])

  return (
    <>
      <Sidebar />
      <div className='stats h-100 position-absolute start-0 text-center'>
        <h1>احصائيات <span style={{ color: "#fff842" }}>المركز</span></h1>
        <div className='container row m-auto mt-5'>
          <div className='col-md-5 p-3 '>
            <FcTodoList className='fs-1' />
            <h2 className='text-light my-3'>عدد الحجوزات</h2>
            {bookinsL && <span class="d-inline-block fw-bold " style={{ fontSize: "22px", fontWeight: "600", cursor: "pointer", color: "#ececf2" }}> {bookinsL} </span>}
          </div>
          <div className='col-md-5 p-3 mt-5 mt-md-0 me-auto'>
            <TfiCommentsSmiley className='fs-1' style={{ color: "#90caf9" }} />
            <h2 className='text-light my-3'>عدد الشكاوي</h2>
            {complL && <span class="d-inline-block fw-bold " style={{ fontSize: "22px", fontWeight: "600", cursor: "pointer", color: "#ececf2" }}> {complL} </span>}

          </div>
          <div className='col-md-5 p-3 m-auto mt-5'>
            <TiMessages className='fs-1' style={{ color: "#90caf9" }} />
            <h2 className='text-light my-3'>عدد التعليقات</h2>
            {commentL && <span class="d-inline-block fw-bold " style={{ fontSize: "22px", fontWeight: "600", cursor: "pointer", color: "#ececf2" }}> {commentL} </span>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Stats