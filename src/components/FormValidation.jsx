import React, { useState } from 'react'

export default function FormValidation() {

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        mobile: ""
    });

    const [nameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [mobileError, setMobileError] = useState("");

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
        console.log(data);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (data.name.trim() === "") {
            setNameError("Name is Required")
        } else if (data.name.length <= 3) {
            setNameError("Minimum 3 Character Required")
        }
        if (!data.surname) {
            setSurnameError("Surname is Required")
        } else if (data.surname.length <= 3) {
            setSurnameError("Minimum 3 Character Required")
        }
        if (!data.email.trim()) {
            setEmailError("Email is Required")
        } else if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(data.email)) {
            setEmailError("Email is Not Valid")
        }
        if (!/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(data.mobile)) {
            setMobileError("Mobile is Required")
        }
    }

    return (
        <>
            <div className="App">
                <h3>Form Validation</h3>
                <div className="row mt-3">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">First Name :</label>

                                <input onChange={(e) => {
                                    handleChange(e)
                                    setNameError("")
                                }} type="email" className="form-control" id="name" aria-describedby="emailHelp" />
                                {nameError && <span className='text-danger'>{nameError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                                <input onChange={(e) => {
                                    handleChange(e)
                                    setSurnameError("")
                                }
                                } type="password" className="form-control" id="surname" />
                                {surnameError && <span className='text-danger'>{surnameError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address </label>
                                <input onChange={(e) => {
                                    handleChange(e)
                                    setNameError("")
                                }} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                {emailError && <span className='text-danger'>{emailError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
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
