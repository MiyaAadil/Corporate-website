
const ServiceCard = ({title, description, icon}) => {
  return (
    <div className='h-60 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer  relative overflow-hidden '>
      
      <img className='absolute w-full h-full object-cover inset-0 opacity-70' src={icon} alt="" />

      <div className='absolute inset-0 bg-black/70 text-white p-4 flex flex-col justify-between gap-3'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className=''>{description}</p>
        <button className='bg-white hover:bg-gray-300 cursor-pointer text-black p-2 rounded-full'>Learn more</button>
      </div>
    </div>
  )
}

export default ServiceCard;
