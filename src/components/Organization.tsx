import React from 'react';
import { ORG_ITEMS } from '../constants/orgData';

const Organization = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Judul Section */}
        <h2 className="text-[#A78BFA] text-4xl font-bold tracking-[0.2em] uppercase text-center mb-16">
          Organization
        </h2>

        {/* Grid Card Organisasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ORG_ITEMS.map((org, index) => (
            <div 
              key={index}
              className="bg-[#2D2D3A]/40 backdrop-blur-sm border border-gray-700 rounded-[40px] p-8 md:p-10 hover:border-[#A78BFA]/50 transition-all duration-300 flex flex-col"
            >
              {/* Header Card: Logo & Nama */}
              <div className={`flex items-center gap-6 mb-6 ${index % 2 !== 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-white/5 rounded-full p-2 flex items-center justify-center">
                  {org.logo}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                  {org.name}
                </h3>
              </div>

              {/* Deskripsi */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                {org.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organization;