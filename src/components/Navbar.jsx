import { Link, NavLink } from 'react-router-dom'
import { useState, useContext } from 'react'
import Logo from '../assets/images/Logo.png'
import { Menu, X, House, Info, CircleUserRound, Moon, Sun  } from 'lucide-react'
import { ThemeContext } from "../context/ThemeContext";
import { navLinks } from '../data/navLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navLinkStyle = ({ isActive }) => `transition-all duration-50 ${isActive ? "border-b-2" : "hover:text-gray-600 dark:hover:text-slate-400"}`;


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className='bg-white/95 dark:bg-slate-800/95 sticky top-0 z-50 h-15 shadow-lg p-3 flex justify-between items-center lg:max-w-7xl lg:mx-auto'>
      

        <Link to='/'>
        <img src={Logo} alt="Logo" className='h-9 dark:invert' />
        </Link>

        {/* Desktop links for navbar */}
        <div className='hidden md:flex gap-5 text-sm uppercase font-medium'>
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkStyle}>
              {link.name}
            </NavLink>
          ))}
        
        </div>

      
      <div className='flex gap-5'>
        <button
        onClick={toggleTheme}
        className="hidden md:flex p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>


        {/* Call to Action Button for Desktop */}
        <button className='hidden dark:bg-slate-700 dark:hover:bg-slate-900 md:flex bg-gray-800 text-white hover:bg-gray-950 px-3 py-2.5 rounded-xl active:scale-90 transition-all duration-500 cursor-pointer text-sm'>Book Appointment</button>
      </div>

        

        {/* Mobile burger menu */}
        <div className='md:hidden flex items-center gap-2'>

          <button
            onClick={toggleTheme}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white transition-all duration-300 cursor-pointer"
            >
          {darkMode ? <Sun size={30} /> : <Moon size={30} />}
        </button>

          <button className='dark:text-white cursor-pointer transition-all duration-500'
          onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>


            <div
                className={`dark:bg-slate-800/99 dark:text-gray-300 md:hidden fixed top-15 right-0 w-full h-screen bg-white text-slate-900
                transform transition-all duration-300 ease-in-out z-50 flex flex-col items-center 
                ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0 pointer-events-none"
                }`}
              >

                {/* Links */}

                <div className="flex flex-col px-5 font-sans gap-5 mt-15">

                    {navLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={({isActive}) => isActive ? "border-b-3 font-semibold text-2xl" : "hover:text-gray-600 dark:hover:text-gray-500 transition-colors text-2xl"}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </NavLink>
                    ))}

                </div>

                {/* Button */}

                <div className="px-4 mt-8">

                  <Link to="/projects" onClick={() => setMenuOpen(false)}>

                    <button className="w-35 bg-slate-900 dark:bg-slate-700 dark:text-gray-300 text-white py-3 rounded-xl font-semibold hover:bg-slate-950 transition active:scale-95 cursor-pointer">

                      Explore More

                    </button>

                  </Link>

                </div>

              </div>

    </nav>
  )
}

export default Navbar
