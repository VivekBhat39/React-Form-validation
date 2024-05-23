import React, { useState } from 'react'

export default function FormValidation2() {

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        mobile: ""
    });

    // const [nameError, setNameError] = useState("");
    // const [surnameError, setSurnameError] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [mobileError, setMobileError] = useState("");

    const [error, setError] = useState({
        nameError: "",
        surnameError: "",
        emailError: "",
        mobileError: "",
    })

    function handleChange(e) {
        setError({
            nameError: "",
            surnameError: "",
            emailError: "",
            mobileError: "",
        })

        setData({ ...data, [e.target.id]: e.target.value })
        console.log(data);
    }

    function handleSubmit(e) {
        e.preventDefault();

        let errObj = {
            nameError: "",
            surnameError: "",
            emailError: "",
            mobileError: "",
        }

        if (data.name.trim() === "") {
            errObj.nameError = "Name is Required"
        } else if (data.name.length <= 3) {
            errObj.nameError = "Minimum 3 Character Required"
        }
        if (!data.surname) {
            errObj.surnameError = "Surname is Required"
        } else if (data.surname.length <= 3) {
            errObj.surnameError = "Minimum 3 Character Required"
        }
        if (!data.email.trim()) {
            errObj.emailError = "Email is Required"
        } else if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(data.email)) {
            errObj.emailError = "Email is Not Valid"
        }
        if (!/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(data.mobile)) {
            errObj.mobileError = "Mobile is Required"
        }

        setError(errObj)
    }

    return (
        <>
            <div className="App">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">First Name :</label>

                                <input onChange={(e) => {
                                    handleChange(e)
                                    setNameError("")
                                }} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                                {error.nameError && <span className='text-danger'>{error.nameError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                                <input onChange={(e) => {
                                    handleChange(e)
                                    setSurnameError("")
                                }
                                } type="text" className="form-control" id="surname" />
                                {error.surnameError && <span className='text-danger'>{error.surnameError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address </label>
                                <input onChange={(e) => {
                                    handleChange(e)
                                    setNameError("")
                                }} type="text" className="form-control" id="email" aria-describedby="emailHelp" />
                                {error.emailError && <span className='text-danger'>{error.emailError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                                <input onChange={(e) => {
                                    handleChange(e)
                                    setMobileError("")
                                }} type="text" className="form-control" id="mobile" />
                                {error.mobileError && <span className='text-danger'>{error.mobileError}</span>}
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
