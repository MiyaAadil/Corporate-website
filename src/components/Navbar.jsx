import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/images/Logo.png'
import { Menu, X, House, Info, CircleUserRound   } from 'lucide-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faHouse, faCircleInfo, faAddressBook, faDiagramProject, faGear } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-white/95 sticky top-0 z-50 h-15 shadow-md p-3 flex justify-between items-center'>
      

        <Link to='/'>
        <img src={logo} alt="Logo" className='h-9 invert' />
        </Link>

        {/* Desktop links for navbar */}
        <div className='hidden md:flex md:gap-6 lg:gap-10 text-gray-900  text-sm uppercase'>
          <Link className='hover:text-gray-600' to='/about'>About</Link>
          <Link className='hover:text-gray-600' to='/blog'>Blog</Link>
          <Link className='hover:text-gray-600' to='/contact'>Contact</Link>
          <Link className='hover:text-gray-600' to='/projects'>Projects</Link>
          <Link className='hover:text-gray-600' to='/services'>Services</Link>
        </div>
      

        {/* Call to Action Button for Desktop */}
        <button className='hidden md:flex bg-green-500 text-white hover:bg-green-600 px-3 py-2.5 rounded-xl active:scale-90 transition-all duration-500 cursor-pointer text-sm'>Book Appointment</button>

        

        {/* Mobile burger menu */}
        <div className='md:hidden flex items-center'>
          <button className='cursor-pointer transition-all duration-500'
          onClick={() => setMenuOpen(true)}><Menu size={30} />
          </button>
        </div>


            {menuOpen && (
              <div className='md:hidden bg-white text-black absolute top-0 right-0 transition-all duration-500 w-full h-screen flex flex-col px- gap-' onClick={() => setMenuOpen(false)}>

                <div className='flex justify-between p-3 border-b border-gray-300'>
                  <Link to='/'>
                  <img src={logo} alt="Logo" className='h-9 invert' />
                  </Link>


                  <button className='cursor-pointer text-gray-400'
                  onClick={() => setMenuOpen(false)}><X size={40} /></button>
                </div>
                
                <div className='flex flex-col p-5 gap-5 text-xl'>
                  <Link className='flex border-b border-gray-300 items-center gap-2 p-4' to='/'>Home</Link>

                  <Link className='border-b border-gray-300 flex items-center gap-2 p-4' to='/about'>About</Link>

                  <Link className='border-b border-gray-300 flex items-center gap-2 p-4' to='/blog'>Blog</Link>

                  <Link className='border-b border-gray-300 flex items-center gap-2 p-4' to='/contact'>Contact</Link>

                  <Link className='border-b border-gray-300 flex items-center gap-2 p-4' to='/projects'>Projects</Link>

                  <Link className='border-b border-gray-300 flex items-center gap-2 p-4'>Services</Link>
                </div>

                <Link to='projects'
                className='flex'>
                  <button className='bg-red-500 mx-auto rounded-full w-40 p-3 text-white font-semibold text-lg cursor-pointer active:scale-95 transition-all duration-500'>
                    Explore More
                  </button>
                </Link>
              </div>
            )}
    </nav>
  )
}

export default Navbar
