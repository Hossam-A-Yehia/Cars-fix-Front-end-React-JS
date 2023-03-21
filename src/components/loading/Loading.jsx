import React from 'react'
import "./loading.css"

function Loading() {
    return (
        <div className='bg-black'>
            <div className='circle d-flex align-items-center justify-content-center text-center' style={{ minHeight: "100vh" }}>
                <div className="bk-circle"></div>
                <p>Waiting</p>
            </div>
        </div>
    )
}

export default Loading