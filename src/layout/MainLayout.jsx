import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='className="bg-white text-black dark:bg-slate-950 dark:text-white'>
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
