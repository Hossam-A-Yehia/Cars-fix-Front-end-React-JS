import React from 'react'
import "./credit.css"

function Credit({ isBuy, buy }) {
    return (
        <div className='credit' style={buy ? { left: "0" } : { left: "1500px" }}>
            <div className="container">
                <form>
                    <div className="row">
                        <h4>الحساب</h4>
                        <div className='col-full'>
                            <div className="input-group input-group-icon">
                                <input type="text" placeholder="الاسم بالكامل" />
                                <div className="input-icon"><i className="fa fa-user" /></div>
                            </div>
                        </div>
                        <div className='col-full'>
                            <div className="input-group input-group-icon">
                                <input type="text" placeholder="البريد الالكتروني" />
                                <div className="input-icon"><i className="fa fa-envelope" /></div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-half">
                            <h4>تاريخ الميلاد</h4>
                            <div className="input-group">
                                <div className="col-third">
                                    <input type="text" placeholder="اليوم" />
                                </div>
                                <div className="col-third">
                                    <input type="text" placeholder="الشهر" />
                                </div>
                                <div className="col-third">
                                    <input type="text" placeholder="السنة" />
                                </div>
                            </div>
                        </div>
                        <div className="col-half">
                            <h4>النوع</h4>
                            <div className="input-group">
                                <input id="gender-male" type="radio" name="gender" value="male" />
                                <label htmlFor="gender-male">ذكر</label>
                                <input id="gender-female" type="radio" name="gender" value="female" />
                                <label htmlFor="gender-female">انثي</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h4>بيانات الدفع</h4>
                        <div className="input-group">
                            <input id="payment-method-card" type="radio" name="payment-method" value="card" />
                            <label htmlFor="payment-method-card"><span>بطاقة الائتمان</span></label>
                            <input id="payment-method-paypal" type="radio" name="payment-method" value="paypal" />
                            <label htmlFor="payment-method-paypal"> <span>بايبال</span></label>
                        </div>
                        <div className='col-full'>
                            <div className=" input-group input-group-icon">
                                <input type="text" placeholder="رقم البطاقة" />
                                <div className="input-icon"><i className="fa fa-credit-card" /></div>
                            </div>
                        </div>
                        <div className="col-full">
                            <div className="input-group input-group-icon">
                                <input type="text" placeholder="رمز التحقق" />
                                <div className="input-icon"><i className="fa fa-user" /></div>
                            </div>
                        </div>
                        <div className="col-half">
                            <div className="input-group">
                                <button className='btn btn-primary'>شراء</button>
                            </div>
                        </div>
                        <div className="col-half">
                            <div className="input-group">
                                <button onClick={() => isBuy(false)} className='btn btn-danger'>اغلاق</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Credit