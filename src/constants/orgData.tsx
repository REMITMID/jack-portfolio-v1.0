import React, { type JSX } from 'react';
import kbmdsi from '../assets/kbmdsi.png';
import taekwondo from '../assets/tiub.png';

export interface Organization {
  name: string;
  logo: JSX.Element;
  role: string;
  description: string;
}

export const ORG_ITEMS: Organization[] = [
  {
    name: "TAEK WON DO UB",
    role: "Designer",
    logo: (
      <a 
        href="https://www.instagram.com/taekwondoub/"
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full h-full hover:scale-110 transition-transform duration-300 cursor-pointer"
        title="Buka Instagram Taekwondo UB"
      >
        <img 
          src={taekwondo}
          alt="Taekwondo UB" 
          className="w-full h-full object-contain"
        />
      </a>
    ),
    description: "As a designer for the Universitas Brawijaya Taekwondo Club, I am responsible for developing the organization's visual identity by creating the official Cabinet Logo and designing the PDH (Daily Service Uniform). My commitment to delivering high-quality vector assets and professional mockups using Adobe Illustrator and Canva earned me the Best Staff Award, recognizing my technical excellence and dedication to the team's branding success."
  },
  {
    name: "KBMDSI",
    role: "Front-end Developer",
    logo: (
      <a 
        href="https://www.instagram.com/kbmdsi.ub/"
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full h-full hover:scale-110 transition-transform duration-300 cursor-pointer"
        title="Buka Instagram KBMDSI"
      >
        <img 
          src={kbmdsi}
          alt="KBMDSI UB" 
          className="w-full h-full object-contain"
        />
      </a>
    ),
    description: "As a Front-end Developer for KBMDSI, I am responsible for building and maintaining user-centric web interfaces using React.js and Tailwind CSS. My work focuses on translating complex UI/UX designs from Figma into clean, responsive, and high-performance code, ensuring a seamless digital experience for the Information Systems student body."
  }
];