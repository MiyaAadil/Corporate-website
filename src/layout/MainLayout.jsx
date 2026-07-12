import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import ScrollToTop from '../components/ScrollToTop'
import PageLoader from "../components/PageLoader";

const MainLayout = () => {
  return (
    <div className='className="bg-white text-black dark:bg-slate-950 dark:text-white'>
      <PageLoader />
      <ScrollToTop />
      <Navbar />
        <Outlet />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default MainLayout
