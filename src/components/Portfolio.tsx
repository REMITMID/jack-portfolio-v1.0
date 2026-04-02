import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants/portfolioData';

const Portfolio = () => {
  return (
    <section className="bg-[#151022] py-20 px-6 font-bricolage">
      <div className="max-w-6xl mx-auto">
        {/* JUDUL SECTION */}
        <h2 className="text-[#A78BFA] text-4xl font-bold tracking-[0.2em] uppercase text-center mb-16">
          Portfolio
        </h2>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="bg-[#2D2D3A]/50 backdrop-blur-md border border-gray-700 rounded-[50px] p-8 md:p-10 flex flex-col items-center hover:border-[#A78BFA]/50 transition-all duration-300 group"
            >
              {/* CONTAINER GAMBAR */}
              <div className="w-full aspect-[4/3] mb-8 overflow-hidden rounded-[30px] bg-white/5 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* DESKRIPSI PROYEK */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center px-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;