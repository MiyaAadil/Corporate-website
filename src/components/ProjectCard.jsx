import React from 'react'

const ProjectCard = ({title, category, image}) => {
  return (
    <div className='h-90 flex flex-col bg-gray-400 p-3 rounded-4xl cursor-pointer hover:translate-y-1 transition-all duration-300 shadow-xl relative overflow-hidden'>

    <img className='h-full object-cover rounded-4xl absolute inset-0 w-full p-2' src={image} alt="" />

      <div className='bg-black/50 backdrop:blur-4xl p-3 w-full flex absolute bottom-0 right-0 flex-col gap-2 text-white'>

        <h2 className='text-2xl font-medium leading-3'>{title}</h2>

        <h2 className='text-gray-200 text-sm'>{category}</h2>

        <button className='bg-white hover:bg-slate-200 text-black py-3 rounded-full cursor-pointer font-medium'>View Project</button>
      </div>

      

      
    </div>
  )
}

export default ProjectCard;
