import React from 'react';

interface LeadershipCardProps {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ name, position, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-blue-600 font-semibold mb-4">{position}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default LeadershipCard;