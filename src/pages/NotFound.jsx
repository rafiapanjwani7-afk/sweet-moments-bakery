import React from 'react';
import NotFoundContent from '../components/NotFoundContent';
import NotFoundActions from '../components/NotFoundActions';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12">
      <div className="space-y-6 w-full">
        <NotFoundContent />
        <NotFoundActions />
      </div>
    </div>
  );
};

export default NotFound;