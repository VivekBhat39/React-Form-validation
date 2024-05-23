import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FormValidation from './components/FormValidation'
import FormValidation2 from './components/FormValidation2'
import Practise from './components/Practise'
import BasicValidation from './BasicValidation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormikValidation from './components/FormikValidation'
import Formik from './components/Formik'

function App() {

  return (
    <div>

      {/* <FormValidation/> */}
      {/* <FormValidation2/> */}
      {/* <Practise /> */}
      {/* <BasicValidation /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<FormValidation />} />
          <Route path='/validation2' element={<FormValidation2 />} />
          <Route path='/formik' element={<FormikValidation />} />
          <Route path='/formik2' element={<Formik />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
