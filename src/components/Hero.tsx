import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'MARIO STOJCEVSKI';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#F196E4' }}>
      {/* Retro grid background */}
      <div className="absolute inset-0 retro-grid opacity-30" />
      
      {/* Scan lines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-lines opacity-20" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="terminal-window rounded-lg p-8 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-400 font-mono-retro text-sm ml-4">SYSTEM_BOOT.EXE</span>
          </div>
          
          <div className="text-left space-y-2 font-mono-retro text-blue-400">
            <p> Initializing developer profile...</p>
            <p> Loading credentials...</p>
            <p> Status: ONLINE</p>
            <p className="text-cyan-400">Welcome to the matrix</p>
          </div>
        </div>
        
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono-retro">
            <span className="text-cyan-400 text-shadow-neon">
              {displayText}
              <span className="animate-blink">_</span>
            </span>
          </h1>
          
          <div className="terminal-window rounded-lg p-6 mb-8 text-left">
            <p className="text-blue-400 font-mono-retro text-lg mb-2"> PROFILE.TXT</p>
            <p className="text-white font-mono-retro">
              Full-Stack Developer crafting digital experiences<br/>
              with retro aesthetics and modern functionality.<br/>
              Specializing in web technologies since 1995.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="neon-border border-cyan-400 text-cyan-400 px-8 py-3 font-mono-retro font-bold hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:scale-105"
            >
              [VIEW_PROJECTS.EXE]
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="neon-border border-blue-400 text-blue-400 px-8 py-3 font-mono-retro font-bold hover:bg-blue-400 hover:text-black transition-all duration-200 transform hover:scale-105"
            >
              [CONTACT.BAT]
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="p-4 terminal-window rounded-lg hover:scale-110 transition-all duration-200 group"
            >
              <Github className="h-6 w-6 text-blue-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="#"
              className="p-4 terminal-window rounded-lg hover:scale-110 transition-all duration-200 group"
            >
              <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="#"
              className="p-4 terminal-window rounded-lg hover:scale-110 transition-all duration-200 group"
            >
              <Mail className="h-6 w-6 text-blue-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('stack')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-400"
      >
        <ChevronDown className="h-8 w-8 text-shadow-neon" />
      </button>
    </section>
  );
};

export default Hero;