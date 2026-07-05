import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/images/Logo.png'
import { Menu, X, House, Info, CircleUserRound   } from 'lucide-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faHouse, faCircleInfo, faAddressBook, faDiagramProject, faGear } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-white/95 sticky top-0 z-50 h-15 shadow-md p-3 flex justify-between items-center lg:max-w-7xl lg:mx-auto'>
      

        <Link to='/'>
        <img src={logo} alt="Logo" className='h-9 invert' />
        </Link>

        {/* Desktop links for navbar */}
        <div className='hidden md:flex md:gap-10 text-gray-900 text-sm uppercase font-medium'>
          <Link className='hover:text-gray-600' to='/about'>About</Link>
          <Link className='hover:text-gray-600' to='/blog'>Blog</Link>
          <Link className='hover:text-gray-600' to='/contact'>Contact</Link>
          <Link className='hover:text-gray-600' to='/projects'>Projects</Link>
          <Link className='hover:text-gray-600' to='/services'>Services</Link>
        </div>
      

        {/* Call to Action Button for Desktop */}
        <button className='hidden md:flex bg-gray-800 text-white hover:bg-gray-950 px-3 py-2.5 rounded-xl active:scale-90 transition-all duration-500 cursor-pointer text-sm'>Book Appointment</button>

        

        {/* Mobile burger menu */}
        <div className='md:hidden flex items-center'>
          <button className='cursor-pointer transition-all duration-500'
          onClick={() => setMenuOpen(true)}><Menu size={30} />
          </button>
        </div>


            <div
                className={`md:hidden fixed top-0 right-0 w-full h-screen bg-white text-black
                transform transition-all duration-300 ease-in-out z-50
                ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0 pointer-events-none"
                }`}
              >

                {/* Header */}

                <div className="flex justify-between items-center p-4 border-b border-gray-300">

                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="Logo" className="h-9 invert" />
                  </Link>

                  <button
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer text-gray-500 hover:text-black transition"
                  >
                    <X size={36} />
                  </button>

                </div>

                {/* Links */}

                <div className="flex flex-col px-6 py-6">

                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-gray-200 py-5 text-lg hover:text-gray-900 transition"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-gray-200 py-5 text-lg hover:text-gray-900 transition"
                  >
                    About
                  </Link>

                  <Link
                    to="/services"
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-gray-200 py-5 text-lg hover:text-gray-900 transition"
                  >
                    Services
                  </Link>

                  <Link
                    to="/projects"
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-gray-200 py-5 text-lg hover:text-gray-900 transition"
                  >
                    Projects
                  </Link>

                  <Link
                    to="/blog"
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-gray-200 py-5 text-lg hover:text-gray-900 transition"
                  >
                    Blog
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-gray-200 py-5 text-lg hover:text-gray-900 transition"
                  >
                    Contact
                  </Link>

                </div>

                {/* Button */}

                <div className="px-6 mt-auto pb-10">

                  <Link to="/projects" onClick={() => setMenuOpen(false)}>

                    <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold hover:bg-slate-950 transition active:scale-95 cursor-pointer">

                      Explore More

                    </button>

                  </Link>

                </div>

              </div>
    </nav>
  )
}

export default Navbar
