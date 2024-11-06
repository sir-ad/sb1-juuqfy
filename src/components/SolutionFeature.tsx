import React from 'react';
import { Check } from 'lucide-react';

interface SolutionFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

const SolutionFeature: React.FC<SolutionFeatureProps> = ({ icon, title, description, features, highlight }) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition ${highlight ? 'border-2 border-blue-500' : ''}`}>
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      {highlight && (
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          Featured Solution
        </span>
      )}
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolutionFeature;