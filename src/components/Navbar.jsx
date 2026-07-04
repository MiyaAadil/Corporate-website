import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Menu, X, House, Info, CircleUserRound   } from 'lucide-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faHouse, faCircleInfo, faAddressBook, faDiagramProject, faGear } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-black/95 text-white sticky top-0 z-50 shadow-md lg:max-w-7xl lg:mx-auto relative'>
      <div className='flex justify-between items-center p-4'>

        <Link to='/'>
        <img src={logo} alt="Logo" className='h-9' />
        </Link>

        {/* Desktop links for navbar */}
        <div className='hidden md:flex gap-10'>
          <Link className='' to='/about'>About</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/services'>Services</Link>
        </div>

        {/* Mobile burger menu */}
        <div className='md:hidden'>
          <button className='cursor-pointer transition-all duration-500'
          onClick={() => setMenuOpen(true)}><Menu size={40} />
          </button>
        </div>

         

      </div>

            {menuOpen && (
              <div className='md:hidden bg-white text-black absolute top-0 transition-all duration-500 w-full h-screen flex flex-col px- gap-' onClick={() => setMenuOpen(false)}>

                <div className='flex justify-between p-4 border-b border-gray-300'>
                  <Link to='/'>
                  <img src={logo} alt="Logo" className='h-9 invert' />
                  </Link>


                  <button className='cursor-pointer text-gray-400'
                  onClick={() => setMenuOpen(false)}><X size={50} /></button>
                </div>
                
                <div className='flex flex-col p-5 gap-5 text-xl'>
                  <Link className='bg-gray-100/40 flex items-center gap-2 rounded-2xl p-4' to='/'><FontAwesomeIcon icon={faHouse} />Home</Link>

                  <Link className='block bg-gray-100/40 flex items-center gap-2 rounded-2xl p-4' to='/about'><FontAwesomeIcon icon={faCircleInfo} />About</Link>

                  <Link className='bg-gray-100/40 flex items-center gap-2 rounded-2xl p-4' to='/blog'><FontAwesomeIcon icon={faBlog} />Blog</Link>

                  <Link className='bg-gray-100/40 flex items-center gap-2 rounded-2xl p-4' to='/contact'><FontAwesomeIcon icon={faAddressBook} />Contact</Link>

                  <Link className='bg-gray-100/40 flex items-center gap-2 rounded-2xl p-4' to='/projects'><FontAwesomeIcon icon={faDiagramProject} />Projects</Link>

                  <Link className='bg-gray-100/40 flex items-center gap-2 rounded-2xl p-4' to='/services'><FontAwesomeIcon icon={faGear} />Services</Link>
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
