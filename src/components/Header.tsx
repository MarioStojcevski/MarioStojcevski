import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'stack', label: 'STACK' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'certifications', label: 'CERTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b-2 border-cyan-400' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Terminal className="h-8 w-8 text-cyan-400 animate-pulse" />
            <span className="text-xl font-bold text-cyan-400 font-mono-retro text-shadow-neon">
              MARIO.EXE
            </span>
          </div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-green-400 hover:text-cyan-400 transition-colors duration-200 font-mono-retro text-sm border border-transparent hover:border-cyan-400 hover:bg-cyan-400/10"
              >
                [{item.label}]
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;