import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Organization', id: 'organization' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isOpen, setIsOpen] = useState(false); // State untuk menu HP

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
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
    <>
      {/* --- NAVBAR DESKTOP --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 p-1 bg-[#2D2D3A]/60 backdrop-blur-lg border border-white/10 rounded-full font-bricolage hidden md:block">
        <div className="flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className={`relative px-6 py-2 rounded-full text-base font-bold transition-colors duration-500 uppercase tracking-wider cursor-pointer ${
                  isActive ? 'text-[#151022]' : 'text-white hover:text-gray-300'
                }`}
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

      {/* --- NAVBAR MOBILE --- */}
      <div className="md:hidden fixed top-4 right-4 left-4 z-50 font-bricolage">
        <div className="flex justify-between items-center bg-[#2D2D3A]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
          <span className="text-white font-bold text-xl uppercase tracking-tighter">Jack.</span>
          
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-2 bg-[#2D2D3A] border border-white/10 rounded-2xl overflow-hidden flex flex-col p-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className={`px-6 py-4 rounded-xl text-lg font-bold uppercase transition-all ${
                    activeSection === link.id ? 'bg-white text-[#151022]' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;