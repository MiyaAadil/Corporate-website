import { services } from '../data/services'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section className='lg: max-w-7xl lg: mx-auto p-5 flex flex-col gap-4'>
      <h1 className='text-4xl font-bold'>Our Services</h1>

      <p className='text-md text-gray-500'>We provide digital solutions
      for modern businesses.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map((service) => (
            <ServiceCard key={service.id} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </div>
    </section>
  )
}

export default Services
