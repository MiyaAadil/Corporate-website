import React from 'react'

const ProjectCard = ({title, category, image}) => {
  return (
    <div className='h-100 flex flex-col justify-between items bg-gray-200 p-3 rounded-2xl cursor-pointer hover:translate-y-1 transition-all duration-300'>

      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-medium'>{title}</h2>
        <h2 className='text-lg'>{category}</h2>
      </div>

      <img className='h-60 object-cover rounded-2xl' src={image} alt="" />

      <button className='bg-slate-950 hover:bg-slate-900 text-white py-4 rounded-full cursor-pointer'>View Project</button>
    </div>
  )
}

export default ProjectCard;
