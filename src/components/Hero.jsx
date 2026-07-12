import Tech from '../assets/images/tech.png'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
    className='p-5 dark:text-white
                    lg:max-w-7xl lg:mx-auto'>

      {/* Bigger heading and a CTA */}
      <div className='flex flex-col gap-3'>

        <motion.h1 className='text-4xl lg:text-6xl font-bold uppercase leading-none dark:text-gray-300'

        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:0.2, duration: 0.7 }}>Building Digital Solutions</motion.h1>

        <p className='text-sm text-gray-500 dark:text-gray-300'>We help businesses build innovative digital solutions that accelerate growth, improve efficiency, and create lasting impact.</p>

        <motion.button
        whileHover={{scale: 1.05,}}
        whileTap={{scale: 0.95,}}
        className='bg-gray-900 dark:bg-gray-800 px-3 py-3 rounded-xl text-white w-40 cursor-pointer'>Get started</motion.button>

      </div>


      {/* A large image and three divs */}
      <div className='flex flex-col'>

        <div className='mt-4 relative flex justify-center'>

          <img className='rounded-2xl h-100 w-full object-cover' src={Tech} alt="corporate image" />

          <p className='absolute bottom-0 rounded-2xl p-4 text-white bg-black/20 backdrop-blur m-5'>Our mission is to empower businesses through innovative software solutions, cutting-edge technology, and exceptional digital experiences.</p>
        </div>

        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='mt-4 grid grid-cols-1 gap-3 text-center
                        md:grid-cols-3'>

          <div className='bg-gray-950 dark:bg-gray-800 dark:text-gray-300 text-white rounded-2xl p-4'>
            <p className='text-3xl font-bold'>58+</p>
            <p className='text-xs'>Total Projects</p>
          </div>

          <div className='bg-gray-950 dark:bg-gray-800 dark:text-gray-300 text-white rounded-2xl p-4'>
            <p className='text-3xl font-bold'>72</p>
            <p className='text-xs'>Delivered</p>
          </div>

          <div className='bg-gray-950 dark:bg-gray-800 dark:text-gray-300 text-white rounded-2xl p-4'>
            <p className='text-3xl font-bold'>$310K+</p>
            <p className='text-xs'>Portfolio value</p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default Hero
