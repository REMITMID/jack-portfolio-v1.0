import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#151022] py-20 px-6 font-bricolage min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-[#A78BFA] text-4xl font-bold">Contact Me</h2>
            {/* Ikon Smiley Putih */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="3"/>
              <circle cx="13" cy="15" r="2" fill="white"/>
              <circle cx="27" cy="15" r="2" fill="white"/>
              <path d="M12 25C12 25 15 29 20 29C25 29 28 25 28 25" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-gray-300 text-lg">Glad to answer your questions</p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-12 md:gap-20">
          
          {/* SISI KIRI: SOSIAL MEDIA */}
          <div className="flex flex-col gap-6 w-full md:w-1/3">
            {[
              { name: 'Github',link:'https://github.com/REMITMID', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              { name: 'LinkedIn',link:'https://www.linkedin.com/in/jack-sanders-ba8393322/', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
              { name: 'Instagram',link: 'https://www.instagram.com/jack_sanders_06/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.419.419-.818.679-1.382.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.413a3.659 3.659 0 0 1-1.382-.896 3.659 3.659 0 0 1-.896-1.382c-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.419-.419.818-.679 1.382-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.773.131 4.902.33 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.331 4.902.131 5.773.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.059 1.277.258 2.148.558 2.911.306.789.717 1.459 1.384 2.126s1.078 1.384 1.834 1.834c.763.3 1.634.499 2.911.558 1.28.058 1.687.072 4.947.072s3.667-.014 4.947-.072c1.277-.059 2.148-.258 2.911-.558.789-.306 1.459-.717 2.126-1.384s1.384-1.078 1.834-1.834c.3-.763.499-1.634.558-2.911.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.059-1.277-.258-2.148-.558-2.911a5.85 5.85 0 0 0-1.384-2.126A5.85 5.85 0 0 0 19.86.63c-.763-.3-1.634-.499-2.911-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z' }
            ].map((soc, i) => (
              <a 
                key={soc.name} 
                href={soc.link}
                target="_blank"
                className="flex items-center gap-10 bg-[#2D2D3A] px-8 py-5 rounded-[40px] hover:bg-[#3D3D4A] transition-all border border-transparent hover:border-[#A78BFA]/30 group"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white group-hover:fill-[#A78BFA] transition-colors">
                  <path d={soc.icon}/>
                </svg>
                <span className="text-white text-xl font-medium">{soc.name}</span>
              </a>
            ))}
          </div>

          {/* GARIS PEMISAH VERTIKAL */}
          <div className="hidden md:block w-[2px] bg-gray-700 self-stretch rounded-full" />

          {/* SISI KANAN: FORMULIR */}
          <div className="flex flex-col gap-4 w-full md:w-2/3">
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-[#2D2D3A] text-white px-8 py-5 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#A78BFA] border border-transparent"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-[#2D2D3A] text-white px-8 py-5 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#A78BFA] border border-transparent"
            />
            <textarea 
              placeholder="message" 
              rows={6}
              className="bg-[#2D2D3A] text-white px-8 py-5 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#A78BFA] border border-transparent resize-none"
            />
            <button className="mt-4 border-2 border-white text-white py-4 rounded-full text-xl font-bold hover:bg-white hover:text-[#151022] transition-all">
              Send
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;