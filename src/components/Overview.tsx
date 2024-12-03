
import React from 'react';

const Overview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Shelter Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Shelter</h3>
            <p className="text-gray-700">
              Safe and nurturing accommodation for orphans and students in need, helping them grow and thrive.
            </p>
          </div>

          {/* Education Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Education</h3>
            <p className="text-gray-700">
              Providing free schooling from nursery to intermediate, along with scholarships for higher education.
            </p>
          </div>

          {/* Ration Distribution Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Ration Distribution</h3>
            <p className="text-gray-700">
              Monthly drives to support families facing food insecurity, ensuring essential supplies reach those in need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
