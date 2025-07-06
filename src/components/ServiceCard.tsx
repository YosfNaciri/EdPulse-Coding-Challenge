import React from 'react'


type ServiceCardProps = {
  title: string;
  description: string;
  color:string
};

const ServiceCard :React.FC<ServiceCardProps>= ({title,description,color}) => {
  return (
     <div className="bg-white rounded-2xl shadow-md p-6 text-center w-72">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full" style={{backgroundColor : color}}>
          
        </div>
      </div>
      <h3 className="text-lg font-semibold text-[#2D2E32] mb-2">{title}</h3>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>

  )
}

export default ServiceCard