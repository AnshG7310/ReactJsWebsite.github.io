import React, { useState } from 'react';
const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    });
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.fullname}.My Mobile Number is ${data.phone}.My email is ${data.email} and I want to say that i am ${data.msg}`);
        setData({
            fullname: '',
            phone: '',
            email: '',
            msg: '',
        })
    }
    const styleService = {
        fontSize: "40px",
        textShadow: "3px 1px 2px rgba(0,0,0,0.8)"
    }
    return (
        <>
            <div classNameName="my-5">
                <h1 className='text-center' style={styleService}>
                    Contact Us
                </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-4">
                                <label
                                    className="form-label">
                                    Your Name
                                </label>
                                <input type="text" className="form-control" name='fullname' value={data.fullname} onChange={inputEvent} placeholder="Enter your name" required />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="form-label">
                                    Phone Number
                                </label>
                                <input type="number" className="form-control" name='phone' value={data.phone} onChange={inputEvent} placeholder="Mobile Number" required />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="form-label">
                                    Email address
                                </label>
                                <input type="email" className="form-control" name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com" required />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="form-label">
                                    Message
                                </label>
                                <textarea className="form-control" rows="3" name='msg' value={data.msg} onChange={inputEvent} required>
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button
                                    className="btn btn-outline-primary"
                                    type="submit">
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;
