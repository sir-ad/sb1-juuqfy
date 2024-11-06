import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, position, company }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <Quote size={32} className="text-blue-600 mb-4" />
      <p className="text-gray-700 mb-6">{text}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-gray-600">{position}</p>
        <p className="text-gray-600">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;