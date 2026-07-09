import { services } from '../data/services'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className='lg:max-w-7xl lg:mx-auto mx-5 flex flex-col gap-3 py-7 dark:text-gray-300'>
      <h1 className='text-4xl font-bold mx-auto'>Our Services</h1>

      <p className='text-md text-gray-500 text-center'>We provide digital solutions for modern businesses.</p>

      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map((service) => (
            <ServiceCard key={service.id} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </motion.div>
    </section>
  )
}

export default Services
