
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Iqra Sweet Home Trust (ISHT)</h1>
        <p className="text-xl mb-6">
          Empowering students through education, support, and compassion. Our mission is to help children and families across Pakistan.
        </p>
        <button className="bg-yellow-500 text-blue-900 py-2 px-6 rounded-full hover:bg-yellow-400 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;


