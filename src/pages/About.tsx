import React from 'react';
import TimelineEvent from '../components/TimelineEvent';
import LeadershipCard from '../components/LeadershipCard';
import MissionStatement from '../components/MissionStatement';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="Office" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Since 1996, HCS Business Solutions has been at the forefront of bringing technological advancement to businesses across Central India. Our journey is marked by continuous innovation and unwavering commitment to our clients' success.
          </p>
        </div>
      </section>

      {/* Mission & Values Section */}
      <MissionStatement />

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <TimelineEvent
              year="1996"
              title="Foundation"
              description="HCS Business Solutions was established in Singrauli with a vision to bring technology solutions to local businesses"
            />
            <TimelineEvent
              year="2000"
              title="Tally Partnership"
              description="Became an official channel partner of Tally Solutions, marking the beginning of our journey in business software solutions"
            />
            <TimelineEvent
              year="2010"
              title="Regional Expansion"
              description="Expanded operations to Ambikapur and Bilaspur, serving a wider range of businesses across multiple states"
            />
            <TimelineEvent
              year="2017"
              title="GST Excellence Center"
              description="Established dedicated GST training centers to help businesses transition smoothly to the new tax regime"
            />
            <TimelineEvent
              year="2024"
              title="Digital Transformation"
              description="Leading the charge in bringing advanced digital solutions to businesses in Tier 3 cities"
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LeadershipCard
              name="Surendra Kumar Gupta"
              position="Founder & Managing Director"
              description="With over three decades of experience in business technology, Surendra Kumar Gupta has been instrumental in bringing digital transformation to countless businesses across Central India."
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            />
            <LeadershipCard
              name="Adarsh Agrahari"
              position="Director of Operations"
              description="A technology enthusiast and business strategist, Adarsh has been pivotal in modernizing HCS's service delivery and expanding its regional presence."
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;