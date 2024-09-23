import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/footer'
import Home from '../screens/home/home'
import Header from '../components/header'
import Profile from '../screens/home/Profile'
import Popularq from '../screens/home/popularq'
import About from '../screens/home/about'
import Carousal from '../screens/home/carousal'
import Signup from '../screens/loginflow/signup'
import Login from '../screens/loginflow/login'
import ForgetPassword from '../screens/loginflow/forgetPassword'

//    links 
import Aboutus from '../screens/links/aboutus'
import Contactus from '../screens/links/contactus'
import Faqq from '../screens/links/faqq'


import Buttonslayout from '../screens/model/buttonslayout'

export default function publicrouter() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='popularq' element={<Popularq />} />
                    <Route path='about' element={<About />} />
                    <Route path='carousal' element={<Carousal />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='login' element={<Login />} />
                    <Route path='aboutus' element={<Aboutus />} />
                    <Route path='contactus' element={<Contactus />} />
                    <Route path='faqq' element={< Faqq />} />
                    <Route path='forgetPassword' element={< ForgetPassword />} />
                    <Route path='buttonslayout' element={< Buttonslayout />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}





