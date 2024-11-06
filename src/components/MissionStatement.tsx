import React from 'react';
import { Target, Users, Award } from 'lucide-react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const MissionStatement = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses in Tier 3 cities with cutting-edge technology solutions and expert guidance for sustainable growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Value
            icon={<Target size={32} className="text-blue-600" />}
            title="Vision"
            description="To be the most trusted technology partner for businesses in Central India, driving digital transformation and growth"
          />
          <Value
            icon={<Users size={32} className="text-blue-600" />}
            title="Community"
            description="Building strong relationships with local businesses and contributing to regional economic development"
          />
          <Value
            icon={<Award size={32} className="text-blue-600" />}
            title="Excellence"
            description="Delivering superior solutions and maintaining the highest standards of service quality"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;