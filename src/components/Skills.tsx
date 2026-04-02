import { SKILLS_ITEMS } from '../constants/skillsData';

const SKILLS_TAGS = SKILLS_ITEMS.map(skill => skill.name);

const Skills = () => {
  // Kita duplikasi datanya agar animasi "infinite" tidak terputus
  const duplicatedSkills = [...SKILLS_ITEMS, ...SKILLS_ITEMS];

  return (
    <section id="skills" className="bg-[#151022] py-20 flex flex-col items-center w-full overflow-hidden font-bricolage">
      <h2 className="text-[#A78BFA] text-4xl font-bold tracking-[0.2em] uppercase mb-12">
        Skills
      </h2>

      {/* BARIS IKON PUTIH */}
      {/* group-hover:pause-paused akan menghentikan jalan saat mouse di atasnya (opsional) */}
      <div className="w-full bg-white border-y-[20px] border-[#A78BFA] py-6 mb-16 relative flex items-center">
        
        {/* Container Scroll Manual & Otomatis */}
        <div className="flex w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none">
          
          <div className="flex items-center gap-10 md:gap-20 animate-infinite-scroll min-w-max px-10">
            {duplicatedSkills.map((skill, index) => (
              <div 
                key={index} 
                className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center group"
                title={skill.name}
              >
                <div className="w-full h-full flex items-center justify-center text-black hover:text-[#A78BFA] transition-colors duration-300">
                  <div className="flex items-center justify-center *:w-full *:h-full *:max-h-full *:max-w-full">
                    {skill.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* TAGS (PILLS) */}
      <div className="max-w-4xl flex flex-wrap justify-center gap-3 px-6">
        {SKILLS_TAGS.map((tag, index) => (
          <span
            key={index}
            className="px-6 py-2 bg-[#2D2D3A] text-gray-200 rounded-full text-sm font-semibold border border-transparent hover:border-[#A78BFA] transition-all cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;