import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import Info from '../../components/Info/Info'
import Banner from '../../components/Banner/Banner'
import Instructors from '../../components/Instructors/Instructors'
import Testimonials from '../../components/Testimonials/Testimonials'
import Teaching from '../../components/Teaching/Teaching'
import Footer from '../../components/Footer/Footer'

const LandingPage = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <Info/>
    <Courses/>
    <Banner/>
    <Outlet/>
    <Instructors/>
    <Testimonials/>
    <Teaching/>
    <Footer/>
    </>
  )
}

export default LandingPage