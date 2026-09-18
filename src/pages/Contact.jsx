import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="space-y-12 py-8 px-6 md:px-12 max-w-7xl mx-auto">
      <ContactHero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;