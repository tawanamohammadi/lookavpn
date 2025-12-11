import React from 'react';
import { Linkedin, Twitter, Github, FileCheck, Shield, ExternalLink, Award } from 'lucide-react';

const Founder: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8 opacity-70">
            <div className="h-px bg-white/20 flex-grow"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Core Team & Architecture</span>
            <div className="h-px bg-white/20 flex-grow"></div>
        </div>

        {/* Main "Artist" Card */}
        <div className="bg-[#1c1c1e] rounded-[32px] overflow-hidden shadow-2xl border border-white/5 relative">
          
          {/* Header Background Image/Gradient */}
          <div className="h-48 md:h-64 w-full bg-gradient-to-r from-[#1a1a1a] via-[#2c2c2e] to-[#1a1a1a] relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] to-transparent"></div>
          </div>

          <div className="px-8 md:px-12 pb-12 -mt-20 md:-mt-24 relative z-10 flex flex-col md:flex-row gap-8 items-start">
            
            {/* Profile Picture */}
            <div className="flex-shrink-0 relative group">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-1.5 bg-gradient-to-br from-[#fa2d48] to-[#5e5ce6] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop" 
                  alt="Tavana Mohammadi" 
                  className="w-full h-full rounded-full object-cover bg-[#000] border-4 border-[#1c1c1e]"
                />
              </div>
              <div className="absolute bottom-4 right-4 z-20 bg-blue-500 text-white p-1.5 rounded-full border-[3px] border-[#1c1c1e] shadow-lg" title="Verified Maintainer">
                <Shield size={16} fill="currentColor" />
              </div>
            </div>

            {/* Info & Bio */}
            <div className="flex-grow pt-4 md:pt-16 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">توانا محمدی</h2>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-300">Founder</span>
                </div>
                <p className="text-[#fa2d48] font-mono text-sm md:text-base font-medium">
                  Senior Network Engineer @ Tavaana Network
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400 text-sm leading-relaxed">
                <p>
                  مهندس شبکه با ۱۲ سال سابقه تخصصی در تحلیل ترافیک و پروتکل‌های رمزنگاری. 
                  فعالیت حرفه‌ای به عنوان <span className="text-white font-medium">Core Maintainer</span> در پروژه‌های V2Ray و Xray.
                  تخصص اصلی او پیاده‌سازی مکانیزم‌های <span className="font-mono text-xs bg-white/10 px-1 rounded">Anti-DPI</span> (مقابله با بازرسی عمیق بسته) و طراحی ساختارهای Load Balancing توزیع شده است.
                </p>
                <p>
                   او هم‌اکنون رهبری تیم فنی نوا وی‌پی‌ان را برعهده دارد و بر روی توسعه پروتکل‌های اختصاصی برای عبور از محدودیت‌های اینترنت ملی متمرکز است. معماری "نوا" حاصل تحقیقات او بر روی رفتار فایروال‌های نسل جدید (NGFW) است.
                </p>
              </div>

              {/* Stats / Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                 {['Network Security', 'Golang', 'Rust', 'Linux Kernel', 'Cryptography'].map((tag) => (
                     <span key={tag} className="px-3 py-1 bg-[#2c2c2e] hover:bg-[#3a3a3c] rounded-lg text-xs font-medium text-gray-300 border border-white/5 transition-colors cursor-default">
                         {tag}
                     </span>
                 ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5 mt-6">
                <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
                  <FileCheck size={18} />
                  مشاهده گزارش ممیزی (Audit)
                </button>
                
                 <a 
                    href="https://tawanamohammadi.bio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#2c2c2e] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#3a3a3c] transition-colors border border-white/10"
                >
                  <ExternalLink size={18} />
                  وب‌سایت شخصی
                </a>
                
                <div className="flex gap-2">
                    <a href="#" className="p-2.5 rounded-full bg-[#2c2c2e] text-gray-400 hover:text-white hover:bg-[#3a3a3c] transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="p-2.5 rounded-full bg-[#2c2c2e] text-gray-400 hover:text-blue-400 hover:bg-[#3a3a3c] transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="p-2.5 rounded-full bg-[#2c2c2e] text-gray-400 hover:text-blue-600 hover:bg-[#3a3a3c] transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Small "Latest Work" or "Featured In" below - like "Top Songs" */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="glass-panel p-4 rounded-xl flex items-center gap-3">
                 <div className="bg-orange-500/20 p-2 rounded-lg text-orange-500"><Github size={20}/></div>
                 <div className="flex flex-col">
                     <span className="text-xs text-gray-400">Contributor</span>
                     <span className="text-sm font-bold">Xray-core</span>
                 </div>
             </div>
             <div className="glass-panel p-4 rounded-xl flex items-center gap-3">
                 <div className="bg-blue-500/20 p-2 rounded-lg text-blue-500"><Award size={20}/></div>
                 <div className="flex flex-col">
                     <span className="text-xs text-gray-400">Certified</span>
                     <span className="text-sm font-bold">CISSP</span>
                 </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Founder;