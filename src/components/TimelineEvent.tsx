import React from 'react';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ year, title, description }) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
        <div className="w-0.5 h-full bg-gray-200"></div>
      </div>
      <div className="pb-8">
        <span className="text-blue-600 font-bold">{year}</span>
        <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;