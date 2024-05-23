import React, { useState } from 'react'

export default function Practise() {

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        mobile: ""
    });

    const [nameError, setNameError] = useState(undefined);
    const [surnameError, setSurnameError] = useState(undefined);
    const [emailError, setEmailError] = useState(undefined);
    const [mobileError, setMobileError] = useState(undefined);

    function handleChange(e) {

        setData({ ...data, [e.target.id]: e.target.value })
        // console.log(data);
    };

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(data);
        if (!data.name.trim()) {
            setNameError("Name is Required")
        } else if (data.name.trim().length <= 3) {
            setNameError("Maximum 3 Character Required")
        }
        if (!data.surname.trim()) {
            setSurnameError("Surname is Required")
        } else if (data.name.trim().length <= 3) {
            setSurnameError("Maximum 3 Character Required")
        }
        if (!data.email.trim()) {
            setEmailError("Email is Required")
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)) {
            setEmailError("Enter Valid Email")
        }
        if (!data.mobile.trim()) {
            setMobileError("Name is Required")
        } else if (!/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(data.mobile)) {
            setMobileError("Mobile is Not Valid")
        }
        console.log(data);
    }

    return (
        <>
            <div className="App">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">First Name : <span className='text-danger'>*</span></label>

                                <input onChange={(e) => {
                                    handleChange(e)
                                    setNameError("")
                                }} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                                {nameError && <span className='text-danger'>{nameError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Last Name <span className='text-danger'>*</span></label>
                                <input onChange={(e) => {
                                    handleChange(e)
                                    setSurnameError("")
                                }
                                } type="text" className="form-control" id="surname" />
                                {surnameError && <span className='text-danger'>{surnameError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address  <span className='text-danger'>*</span></label>
                                <input onChange={(e) => {
                                    handleChange(e)
                                    setEmailError("")
                                }} type="text" className="form-control" id="email" aria-describedby="emailHelp" />
                                {emailError && <span className='text-danger'>{emailError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mobile <span className='text-danger'>*</span></label>
                                <input onChange={(e) => {
                                    handleChange(e)
                                    setMobileError("")
                                }} type="text" className="form-control" id="mobile" />
                                {mobileError && <span className='text-danger'>{mobileError}</span>}
                            </div>
                            <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>


                </div>
            </div>
        </>
    )
}
