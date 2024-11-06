import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface OfficeLocationProps {
  city: string;
  address: string;
  phone: string;
}

const OfficeLocation: React.FC<OfficeLocationProps> = ({ city, address, phone }) => {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0">
        <MapPin className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h3 className="font-semibold">{city}</h3>
        <p className="text-gray-600 mb-2">{address}</p>
        <div className="flex items-center space-x-2 text-gray-600">
          <Phone size={16} />
          <span>{phone}</span>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;