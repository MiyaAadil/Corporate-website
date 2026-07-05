import Corporate from '../assets/images/corporate.jpg'

const Hero = () => {
  return (
    <div className='p-5'>

      {/* Bigger heading and a CTA */}
      <div className='flex flex-col gap-3'>
        <h1 className='text-4xl font-bold uppercase'>Inspired by you <br /> built for the future</h1>
        <p className='text-sm text-gray-500'>Delivering excellence through innovation, precision and trust.</p>
        <button className='bg-gray-900 px-3 py-2 rounded-xl text-white w-35 cursor-pointer'>Get started</button>
      </div>


      {/* A large image and three divs */}
      <div className='flex flex-col'>
        <div className='mt-4 relative'>
          <img className='rounded-2xl' src={Corporate} alt="corporate image" />
          <p className='absolute bottom-2 rounded-2xl p-2 text-white bg-gray-500/40 m-2'>Our mission is to redefine skylines through precision engineering, smart design and sustainable construction practices.</p>
        </div>

        <div className='mt-4 grid grid-cols-1 gap-3
                        md:grid-cols-3'>
          <div className='bg-gray-300 h-20 rounded-2xl p-4'>
            <p className='text-xl font-bold'>58</p>
            <p className='text-xs'>Total Projects</p>
          </div>
          <div className='bg-gray-300 h-20 rounded-2xl p-4'>
            <p className='text-xl font-bold'>72</p>
            <p className='text-xs'>Delivered</p>
          </div>
          <div className='bg-gray-900 text-white h-20 rounded-2xl p-4'>
            <p className='text-xl font-bold'>310M</p>
            <p className='text-xs'>Portfolio value [$]</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
