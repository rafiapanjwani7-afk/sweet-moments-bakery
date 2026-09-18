import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import AboutValues from '../components/AboutValues';

const About = () => {
  return (
    <div className="space-y-16 py-8 px-6 md:px-12 max-w-7xl mx-auto">
      <AboutHero />
      <AboutStory />
      <AboutValues />
    </div>
  );
};

export default About;