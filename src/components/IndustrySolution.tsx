import React from 'react';
import { Check } from 'lucide-react';

interface IndustrySolutionProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  reverse?: boolean;
}

const IndustrySolution: React.FC<IndustrySolutionProps> = ({ title, description, features, image, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      <div className="w-full md:w-1/2">
        <img 
          src={image} 
          alt={title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndustrySolution;