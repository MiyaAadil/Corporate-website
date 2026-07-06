
const ServiceCard = ({title, description, icon}) => {
  return (
    <div className='h-80 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer  overflow-hidden border border-gray-100'>
      
      <img className='h-40 w-full object-cover p-2 rounded-2xl' src={icon} alt="" />

      <div className='p-4 flex flex-col justify-between gap-2.5 items-center'>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <p className='text-sm text-center'>{description}</p>
        <button className='bg-slate-950 hover:bg-gray-900 text-white cursor-pointer p-2 rounded-full w-35'>Learn more</button>
      </div>
    </div>
  )
}

export default ServiceCard;
