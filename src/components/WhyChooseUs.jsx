import { features } from '../data/features'
import FeatureCard from './FeatureCard';

const WhyChooseUs = () => {
  return (
    <div className='lg:max-w-7xl lg:mx-auto m-5 flex flex-col gap-4 py-7'>
        <h1 className='text-3xl font-bold mx-auto'>Why Choose <span className='font-normal italic'>us?</span></h1>
        <p className='text-gray-600 mx-auto'>Trusted by businesses worldwide to deliver innovative, secure, and scalable solutions.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {features.map((feature) => (
                <FeatureCard key={feature.id} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
        </div>

    </div>
  )
}

export default WhyChooseUs;
