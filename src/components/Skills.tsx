"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { SKILLS_ITEMS } from "../constants/skillsData";

const Skills = () => {
  // Inisialisasi Embla dengan AutoScroll
  const [emblaRef] = useEmblaCarousel(
    { loop: true }, // Membuat loop tanpa putus
    [
      AutoScroll({ 
        playOnInit: true, 
        speed: 1,
        stopOnInteraction: true,
        stopOnMouseEnter: true
      })
    ]
  );

  return (
    <section id="skills" className="bg-[#151022] py-20 flex flex-col items-center w-full overflow-hidden font-bricolage">
      <h2 className="text-[#A78BFA] text-4xl font-bold tracking-[0.2em] uppercase mb-12">
        Skills
      </h2>

      {/* BARIS IKON PUTIH */}
      <div className="w-full bg-white border-y-[20px] border-[#A78BFA] py-6 mb-16 relative">
        
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {SKILLS_ITEMS.map((skill, index) => (
              <div 
                key={index} 
                className="flex-[0_0_120px] md:flex-[0_0_150px] flex items-center justify-center group"
                title={skill.name}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-black hover:text-[#A78BFA] transition-colors duration-300">
                  <div className="flex items-center justify-center *:w-full *:h-full">
                    {skill.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      <div className="max-w-4xl flex flex-wrap justify-center gap-3 px-6">
        {SKILLS_ITEMS.map((skill, index) => (
          <span
            key={index}
            className="px-6 py-2 bg-[#2D2D3A] text-gray-200 rounded-full text-sm font-semibold border border-transparent hover:border-[#A78BFA] transition-all cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;