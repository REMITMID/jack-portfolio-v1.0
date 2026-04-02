import React from 'react';
import ProfileImg from '../assets/foto-jack.png'
import lampu1 from '../assets/lampu 1.png'
import lampu2 from '../assets/lampu 2.png'
import lampu3 from '../assets/lampu 3.png'
import lampu4 from '../assets/lampu 4.png'

const Hero: React.FC = () => {
  return (
    // Container utama dengan background hitam pekat
    <section id="about" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center selection:bg-[#8B5CF6]/40">
      
      <div>
        {/* <img className="absolute -top-140 -left-90 w-[78%] h-auto" src={lampu1} alt="lampu1" />
        <img className="absolute -top-100 -left-60" src={lampu2} alt="lampu2" />

        <img className="absolute top-[-10%] left" src={lampu3} alt="lampu3" /> */}
      </div>
      
      {/* --- KONTEN UTAMA (RESPONSIF) --- */}
      <div className="container mx-auto px-6 md:px-16 z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 py-24">
        
        {/* KIRI: Konten Teks */}
        <div className="flex-3 text-center md:text-left">
          <h2 className="text-[#8B5CF6] text-xl md:text-2xl font-semibold mb-3 tracking-wide">
            About Me
          </h2>
          <h1 className="text-white text-5xl md:text-8xl font-black leading-tight mb-6 tracking-tighter">
            Ave Mundus<br />
            I'm Jack Sanders.
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            I'm a student at Brawijaya University, majoring in Information System. 
            I always embrace an iterative approach to self-development, 
            where every challenge is viewed as a prototype for future success.
          </p>
        </div>

        {/* KANAN: Foto Profil dengan Bingkai Khusus */}
        <div className="flex-1 flex justify-center items-center relative group">
          
          {/* Efek Glow tambahan saat hover foto */}
          <div className="absolute w-72 h-72 bg-[#8B5CF6]/20 blur-[100px] rounded-full group-hover:bg-[#8B5CF6]/40 transition-all duration-700"></div>

          {/* Bingkai Hexagonal Outer (Warna Ungu) */}
          <div 
            className="relative w-72 h-72 md:w-[420px] md:h-[420px] bg-[#8B5CF6] p-2 shadow-2xl transition-transform duration-500 hover:scale-105"
            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          >
            {/* Bingkai Hexagonal Inner (Hitam) */}
            <div 
              className="w-full h-full bg-[#050505] overflow-hidden"
              style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
            >
              <img 
                src={ProfileImg} 
                alt="Jack Sanders" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 "
              />
            </div>
          </div>

          {/* --- TOMBOL DOWNLOAD CV (Melingkar) --- */}
          {/* <a 
            href="/path-to-your-cv.pdf" // Ganti dengan link CV aslimu
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-10 -right-5 md:bottom-5 md:right-10 w-28 h-28 md:w-32 md:h-32 bg-[#8B5CF6] rounded-full flex items-center justify-center p-2 shadow-xl transform transition-all duration-300 hover:scale-110 hover:bg-[#a78bfa]"
          >
            {/* Teks Melingkar (Menggunakan SVG untuk presisi)
            <svg 
            viewBox="0 0 100 100" 
            className="absolute inset-0 w-full h-full animate-spin-slow">
              <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text className="text-[10px] font-bold fill-white uppercase tracking-[0.2em]">
                <textPath xlinkHref="#circlePath">
                  Download CV • Download CV •
                </textPath>
              </text>
            </svg>
            {/* Ikon Panah Download (Putih)
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="white" 
              className="w-8 h-8 z-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a> */}

          <a 
            href="/path-to-your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-15 -right-5 md:right-36 w-28 h-28 md:w-32 md:h-32 backdrop-blur rounded-full flex items-center justify-center shadow-xl transform transition-all hover:scale-110 hover:bg-[#7C3AED] group border-2 border-white"
          >
            <svg 
              viewBox="0 0 100 100" 
              className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]"
            >
              <defs>
                <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text className="text-[9px] font-medium fill-white uppercase tracking-[0.35em]">
                <textPath xlinkHref="#circlePath">
                  Download CV • Download CV •
                </textPath>
              </text>
            </svg>

            <div className="bg-[#A78BFA] p-5 rounded-full shadow-inner group-hover:bg-[#C4B5FD] transition-colors">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 18.75V28.75C30 29.0815 29.8683 29.3995 29.6339 29.6339C29.3995 29.8683 29.0815 30 28.75 30H1.25C0.918479 30 0.600537 29.8683 0.366117 29.6339C0.131696 29.3995 0 29.0815 0 28.75V18.75C0 18.4185 0.131696 18.1005 0.366117 17.8661C0.600537 17.6317 0.918479 17.5 1.25 17.5C1.58152 17.5 1.89946 17.6317 2.13388 17.8661C2.3683 18.1005 2.5 18.4185 2.5 18.75V27.5H27.5V18.75C27.5 18.4185 27.6317 18.1005 27.8661 17.8661C28.1005 17.6317 28.4185 17.5 28.75 17.5C29.0815 17.5 29.3995 17.6317 29.6339 17.8661C29.8683 18.1005 30 18.4185 30 18.75ZM14.1156 19.6344C14.2317 19.7506 14.3696 19.8428 14.5213 19.9057C14.6731 19.9686 14.8357 20.001 15 20.001C15.1643 20.001 15.3269 19.9686 15.4787 19.9057C15.6304 19.8428 15.7683 19.7506 15.8844 19.6344L22.1344 13.3844C22.2505 13.2682 22.3426 13.1304 22.4055 12.9786C22.4683 12.8269 22.5007 12.6642 22.5007 12.5C22.5007 12.3358 22.4683 12.1731 22.4055 12.0214C22.3426 11.8696 22.2505 11.7318 22.1344 11.6156C22.0182 11.4995 21.8804 11.4074 21.7286 11.3445C21.5769 11.2817 21.4142 11.2493 21.25 11.2493C21.0858 11.2493 20.9231 11.2817 20.7714 11.3445C20.6196 11.4074 20.4818 11.4995 20.3656 11.6156L16.25 15.7328V1.25C16.25 0.918479 16.1183 0.600537 15.8839 0.366116C15.6495 0.131696 15.3315 0 15 0C14.6685 0 14.3505 0.131696 14.1161 0.366116C13.8817 0.600537 13.75 0.918479 13.75 1.25V15.7328L9.63438 11.6156C9.39983 11.3811 9.08171 11.2493 8.75 11.2493C8.41829 11.2493 8.10017 11.3811 7.86562 11.6156C7.63107 11.8502 7.49931 12.1683 7.4993 12.5C7.49931 12.8317 7.63107 13.1498 7.86562 13.3844L14.1156 19.6344Z" fill="white"/>
              </svg>
            </div>
          </a>
        </div>

      </div>

    </section>
  );
};

export default Hero;
