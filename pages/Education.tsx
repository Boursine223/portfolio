import React from 'react';
import Image from 'next/image';
import { FaUniversity, FaBuilding, FaCertificate } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="bg-hero w-full px-4 md:px-12 lg:px-24 text-white pt-12 pb-24">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center mx-auto">
        {/* Image - Hidden on small screens, visible on large screens */}
        <div className="hidden lg:flex lg:w-1/2 justify-center lg:justify-start mb-8 lg:mb-0">
          <Image
            src="/certificat.png"
            alt="Education Illustration"
            width={450}
            height={450}
            style={{ objectFit: 'contain', width: '450px', height: '450px' }}
          />
        </div>
        
        {/* Content - Full width on small screens, half width on large screens */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 text-center lg:text-left">Éducation</h1>
          <div className="relative border-l-2 border-blue-500">
            {/* Timeline Item 1 */}
            <div className="relative mb-6 lg:mb-8 pl-8 lg:pl-10">
              <div className="absolute left-0 top-1 transform -translate-x-1/2">
                <div className="bg-[#1e233c] p-2 rounded-full border-2 border-blue-500">
                  <FaUniversity className="text-yellow-500 text-xl lg:text-2xl" />
                </div>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-400">Lycée Technique de Sikasso</h2>
              <p className="text-gray-400 text-xs md:text-sm mb-1 lg:mb-2">2020 - 2023</p>
              <p className="text-gray-300 text-sm md:text-base">Mention Assez Bien</p>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="relative mb-6 lg:mb-8 pl-8 lg:pl-10">
              <div className="absolute left-0 top-1 transform -translate-x-1/2">
                <div className="bg-[#1e233c] p-2 rounded-full border-2 border-blue-500">
                  <FaBuilding className="text-sky-400 text-xl lg:text-2xl" />
                </div>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-400">Institut Supérieur de Technologies Appliquées(TechnoLAB-ISTA)</h2>
              <p className="text-gray-400 text-xs md:text-sm mb-1 lg:mb-2">2023 - 2025</p>
              <p className="text-gray-300 text-sm md:text-base">Licence en Informatique(à venir)</p>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="relative pl-8 lg:pl-10">
              <div className="absolute left-0 top-1 transform -translate-x-1/2">
                <div className="bg-[#1e233c] p-2 rounded-full border-2 border-blue-500">
                  <FaCertificate className="text-green-500 text-xl lg:text-2xl" />
                </div>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-400">Certification Développeur Fullstack</h2>
              <p className="text-gray-400 text-xs md:text-sm mb-1 lg:mb-2">Mimo - 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
