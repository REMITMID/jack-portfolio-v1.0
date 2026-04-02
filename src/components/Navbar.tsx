import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Organization', id: 'organization' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 p-1 bg-[#2D2D3A]/60 backdrop-blur-lg border border-white/10 rounded-full font-bricolage">
      <div className="flex items-center gap-2">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          
          return (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className={`
                relative px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold 
                transition-colors duration-500 uppercase tracking-wider cursor-pointer
                ${isActive ? 'text-[#151022]' : 'text-white hover:text-gray-300'}
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className="absolute inset-0 bg-white rounded-full -z-10"
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;