import React from 'react'
import logo from '../assets/images/logo.png'

const Home = () => {
  return (
    <div className='bg-black text-white mt-4 lg:max-w-7xl lg:mx-auto'>
      This is Home page
      <img src={logo} alt="" className='h-full w-full' />
      <img src={logo} alt="" className='h-full w-full' />
      <img src={logo} alt="" className='h-full w-full' />
      <img src={logo} alt="" className='h-full w-full' />
    </div>
  )
}

export default Home
