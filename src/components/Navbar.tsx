import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // [1] Import motion

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Organization', href: '#organization' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

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
      const element = document.getElementById(link.href.replace('#', ''));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#2D2D3A]/60 backdrop-blur-lg border border-white/10 rounded-full font-bricolage transition-all duration-300">
      <div className="flex items-center gap-2">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace('#', '');
          
          return (
            <a
              key={link.name}
              href={link.href}
              className={`
                relative px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold 
                transition-colors duration-500 uppercase tracking-wider
                ${isActive ? 'text-[#151022]' : 'text-white hover:text-gray-300'}
              `}
            >
              {/* [2] Indikator Putih dengan Animasi Bergeser */}
              {isActive && (
                <motion.span
                  layoutId="active-pill" // ID unik agar Framer tahu ini elemen yang bergeser
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} // Mengatur kehalusan geseran
                  className="absolute inset-0 bg-white rounded-full -z-10"
                />
              )}
              
              <span className="relative z-10">
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;