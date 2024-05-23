import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas';

export default function FormikValidation() {

    const initialValues = {
        name: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    };

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    console.log(errors);

    return (
        <div>
            <div className="App">
                <h3>Form Validation Using Formik</h3>
                <div className="row mt-3">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>

                                <input value={values.name} onChange={handleChange} type="text" className="form-control" name="name" aria-describedby="emailHelp" />
                                {errors.name && <span className='text-danger'>{errors.name}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                <input value={values.email} onChange={handleChange} type="text" className="form-control" name="email" />
                                {errors.email && <span className='text-danger'>{errors.email}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                                <input value={values.mobile} onChange={handleChange} type="text" className="form-control" name="mobile" />
                                {errors.mobile && <span className='text-danger'>{errors.mobile}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Password </label>
                                <input value={values.password} onChange={handleChange} type="text" className="form-control" name="password" aria-describedby="emailHelp" />
                                {errors.password && <span className='text-danger'>{errors.password}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                                <input value={values.cpassword} onChange={handleChange} type="text" className="form-control" name="cpassword" />
                                {errors.cpassword && <span className='text-danger'>{errors.cpassword}</span>}
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>


                </div>
            </div>
        </div>
    )
}
