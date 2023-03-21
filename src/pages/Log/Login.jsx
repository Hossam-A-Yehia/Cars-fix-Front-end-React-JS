import React, { useState } from 'react'
import "./login.css"

function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [valid, setValid] = useState(true)
    const handleSubmit = (e) => {
        if (userName === "admin" && password === "admin") {
            setValid(true)
        } else {
            setValid(false)
        }
        setPassword("")
        setUserName("")
    }
    const onChangeUser = (e) => {
        setUserName(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)

    }
    return (
        <div style={{ height: "100vh" }}>
            <div className="login-box position-absolute top-50 start-50 translate-middle">
                <h2 className='p-0 m-0 mb-5 text-center text-light'>تسجيل دخول</h2>
                <form >
                    <div className="position-relative">
                        <input style={valid ? { borderBottom: "solid 1px #2196f3" } : { borderBottom: "solid 1px red" }} type="text" name="username" required="" onChange={onChangeUser} value={userName} />
                        <label style={valid ? { color: "#2196f3" } : { color: "red" }}>اسم الستخدم</label>
                    </div>
                    <div className="position-relative">
                        <input style={valid ? { borderBottom: "solid 1px #2196f3" } : { borderBottom: "solid 1px red" }} type="password" name="password" required="" onChange={onChangePassword} value={password} />
                        <label style={valid ? { color: "#2196f3" } : { color: "red" }}>كلمة السر</label>
                    </div>
                    <div className='btns'>
                        <a href={valid ? "/stats" : '#'} onClick={() => handleSubmit()}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            دخول
                        </a>
                        <a href="/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            الرئيسية
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login