
const ProjectCard = ({title, category, image}) => {
  return (
    <div className='h-90 flex flex-col border border-gray-200 p-3 rounded-4xl cursor-pointer hover:translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group'>

    <img className='h-full object-cover rounded-4xl absolute inset-0 w-full p-2 group-hover:scale-110 transition-transform duration-500' src={image} alt="" />

      <div className='bg-black/40 backdrop-blur-xs p-3 w-full flex absolute bottom-0 right-0 flex-col gap-2 text-white'>

        <h2 className='text-2xl font-medium leading-5 text-center'>{title}</h2>

        <h2 className='text-gray-200 text-xs bg-red-500/90 py-1 w-30 rounded-md text-center mx-auto'>{category}</h2>

        <button className='bg-white hover:bg-slate-200 text-black py-3 rounded-full cursor-pointer font-medium'>View Project</button>
      </div>

    </div>
  )
}

export default ProjectCard;
