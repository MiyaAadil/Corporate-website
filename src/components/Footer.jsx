import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-black/90 text-white h-20 flex flex-col justify-center items-center'>
      <h1>© 2026 TechNova Solutions. All Rights Reserved.</h1>
      <div className='flex gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

      </div>
    </footer>
  )
}

export default Footer
