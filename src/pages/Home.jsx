import React from 'react'
import logo from '../assets/images/Logo.png'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedProjects from '../components/FeaturedProjects'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
    </div>
  )
}

export default Home
