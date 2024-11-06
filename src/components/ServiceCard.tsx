import React from 'react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const Icon = Icons[icon];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
        <Icon size={24} className="text-blue-600" />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;