import React from 'react'
import logo from '../assets/images/Logo.png'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedProjects from '../components/FeaturedProjects'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from "../components/Testimonials";
import Team from '../components/Team'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <CTA />
    </div>
  )
}

export default Home
