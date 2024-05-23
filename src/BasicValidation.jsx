import React, { useState } from 'react'

function BasicValidation() {

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        mobile: ""
    });

    // const [nameError, setNameError] = useState(undefined);
    // const [surnameError, setSurnameError] = useState(undefined);
    // const [emailError, setEmailError] = useState(undefined);
    // const [mobileError, setMobileError] = useState(undefined);

    const [error, setError] = useState({
        nameError: "",
        surnameError: "",
        emailError: "",
        mobileError: ""
    })

    function handleChange(e) {
        setError({
            nameError: "",
            surnameError: "",
            emailError: "",
            mobileError: ""
        })
        setData({ ...data, [e.target.id]: e.target.value })
        // console.log(data);
    };

    function handleSubmit(e) {

        const errObj = {
            nameError: "",
            surnameError: "",
            emailError: "",
            mobileError: ""
        };

        e.preventDefault();
        if (!data.name.trim()) {
            errObj.nameError = "Name is Required"
        } else if (data.name.trim().length <= 3) {
            errObj.nameError = "Above 3 Character Required"
        }
        if (!data.surname.trim()) {
            errObj.surnameError = "Surname is Required"
        } else if (data.surname.trim().length <= 3) {
            errObj.surnameError = "Above 3 Character Required"
        } if (!data.email.trim()) {
            errObj.emailError = "Email is Required"
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)) {
            errObj.emailError = "Email is Not Valid"
        }
        if (!data.mobile.trim()) {
            errObj.mobileError = "Mobile is Required"
        } else if (!/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(data.mobile)) {
            errObj.mobileError = "Mobile is Invalid"
        }

        setError(errObj)
        // console.log(data);
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
                                }} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                                {error.nameError && <span className='text-danger'>{error.nameError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Last Name <span className='text-danger'>*</span></label>
                                <input onChange={(e) => {
                                    handleChange(e)
                                }} type="text" className="form-control" id="surname" />
                                {error.surnameError && <span className='text-danger'>{error.surnameError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address  <span className='text-danger'>*</span></label>
                                <input onChange={(e) => {
                                    handleChange(e)
                                }} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                {error.emailError && <span className='text-danger'>{error.emailError}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mobile <span className='text-danger'>*</span></label>
                                <input onChange={(e) => {
                                    handleChange(e)
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

export default BasicValidation