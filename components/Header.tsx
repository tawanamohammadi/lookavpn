import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Music, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#121214]/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent pt-4'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
          <div className="bg-gradient-to-br from-[#fa2d48] to-[#ff2d55] p-2 rounded-[12px] text-white shadow-[0_0_20px_rgba(250,45,72,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Music size={22} fill="currentColor" />
          </div>
          <span className="text-white text-xl font-bold tracking-tight group-hover:opacity-90 transition-opacity">
            Nava<span className="text-[#fa2d48]">VPN</span>
          </span>
        </div>

        {/* Desktop Nav - Pill Shape */}
        <nav className={`hidden md:flex items-center gap-1 bg-[#1c1c1e]/50 backdrop-blur-xl px-2 py-1.5 rounded-full border border-white/5 transition-all duration-500 ${scrolled ? 'bg-transparent border-transparent backdrop-blur-none' : ''}`}>
          {[
            ['ویژگی‌ها', '#features'],
            ['درباره ما', '#about'],
            ['تعرفه‌ها', '#pricing'],
            ['وبلاگ', '#blog'],
            ['آموزش', '#setup'],
          ].map(([label, href]) => (
            <a 
              key={href}
              href={href} 
              className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {label}
            </a>
          ))}
          <a href="#social" className="px-5 py-2 rounded-full text-sm font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-all flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            مسئولیت اجتماعی
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors text-xs font-bold tracking-wider">
            FA
          </button>
          <a 
            href="#pricing"
            className="bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
          >
            خرید اشتراک
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-[#000000] transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="pt-24 px-6 flex flex-col gap-6">
            {[
            ['ویژگی‌ها', '#features'],
            ['درباره ما', '#about'],
            ['تعرفه‌ها', '#pricing'],
            ['وبلاگ', '#blog'],
            ['آموزش', '#setup'],
          ].map(([label, href]) => (
            <a 
                key={href} 
                href={href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white flex items-center justify-between border-b border-white/10 pb-4"
            >
                {label}
                <ChevronRight className="text-gray-500" />
            </a>
          ))}
           <a 
                href="#social" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-blue-500 flex items-center justify-between border-b border-white/10 pb-4"
            >
                مسئولیت اجتماعی
                <ChevronRight className="text-blue-500" />
            </a>
            
             <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="mt-4 bg-[#fa2d48] text-white py-4 rounded-xl text-center font-bold text-lg shadow-lg shadow-red-500/20">
                شروع کنید
             </a>
        </div>
      </div>
    </header>
  );
};

export default Header;