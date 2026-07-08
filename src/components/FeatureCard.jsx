
const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-2xl flex flex-col items-center justify-between">

     
        <Icon className='text-red-500' size={40} />  
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-600 text-center">{description}</p>
   
      
    </div>
  )
}

export default FeatureCard;
