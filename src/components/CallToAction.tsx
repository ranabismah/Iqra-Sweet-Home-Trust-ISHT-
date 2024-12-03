
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 text-center">
      
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Image 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
          <img 
            src="/donate1.JPG"
            alt="Donate 1"
            className="w-15 h-15 object-cover rounded-lg mb-4" 
          />
          <div className="bg-black text-white py-1 px-2 rounded-md mb-2 text-sm font-semibold">
            Give Online
          </div>
          <p className="text-gray-600 text-xs">
            Make a one-time or recurring <span className="text-green-600 text-xl">online donation</span>
          </p>
        </div>

        {/* Image 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
          <img 
            src="/donate2.JPG"  
            alt="Donate 2"
            className="w-15 h-15 object-cover rounded-lg mb-4"
          />
          <div className="bg-black text-white py-1 px-2 rounded-md mb-2 text-sm font-semibold">
            Schedule a Pick-up
          </div>
          <p className="text-gray-600 text-xs">
            Call us at <span className="text-green-600 text-xl">0800-00823</span> to have your cheque or cash collected from your doorstep.
          </p>
        </div>

        {/* Image 3 */}
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
          <img 
            src="/donate3.JPG"  
            alt="Donate 3"
            className="w-15 h-15 object-cover rounded-lg mb-4"
          />
          <div className="bg-black text-white py-1 px-2 rounded-md mb-2 text-sm font-semibold">
            Bank Transfer
          </div>
          <p className="text-gray-600 text-xs">
            <span className="text-green-600 text-xl">Transfer</span> your Zakat and Sadqah to your selected bank.
          </p>
        </div>

        {/* Image 4 */}
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
          <img 
            src="/donate4.JPG"  
            alt="Donate 4"
            className="w-15 h-15 object-cover rounded-lg mb-4"
          />
          <div className="bg-black text-white py-1 px-2 rounded-md mb-2 text-sm font-semibold">
            Donate via SMS
          </div>
          <p className="text-gray-600 text-xs">
            Write your name and send it to <span className="text-green-600 text-xl">8232</span> to donate PKR 20 plus charges.
          </p>
        </div>
      </div>

      {/* Text and Call-to-Action Buttons */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8">Get Involved</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* Buttons with links to Google Forms */}
          <a 
            href="https://tinyurl.com/ISHTUnderGraduateScholarship" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="bg-yellow-500 text-blue-900 py-2 px-6 rounded-full hover:bg-yellow-400 transition">
              Apply for Undergraduate Scholarship
            </button>
          </a>

          <a 
            href="https://tinyurl.com/ISHTSchoolScholarship" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition">
              Apply for School Scholarship
            </button>
          </a>

          <a 
            href="https://tinyurl.com/ISHTVolunteering"  
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-400 transition">
              Volunteer for Ration Drive
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

