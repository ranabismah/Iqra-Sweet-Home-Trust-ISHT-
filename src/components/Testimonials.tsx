
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">What People Say</h2>
        <div className="space-y-8">
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
            <p className="italic text-gray-700 mb-4">
              "The education and support I received from ISHT helped me change my life. I am now pursuing my degree thanks to their help."
            </p>
            <p className="font-semibold">- Student Name</p>
          </div>
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
            <p className="italic text-gray-700 mb-4">
              "ISHT's ration distribution has been a lifesaver during tough times. Their kindness and support make a real difference."
            </p>
            <p className="font-semibold">- Parent Name</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

