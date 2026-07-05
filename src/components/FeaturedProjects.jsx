import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const FeaturedProjects = () => {
  return (
    <div className='flex flex-col gap-2 m-5 lg:max-w-7xl lg:mx-auto'>
      <h1 className='text-4xl text-slate-900 font-bold'>Featured Projects</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects.map((project) => (
        <ProjectCard key={project.id} title={project.title} category={project.category} image={project.image} />
        ))}
      </div>

    </div>
  )
}

export default FeaturedProjects
