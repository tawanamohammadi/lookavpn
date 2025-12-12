import React from 'react';
import { Linkedin, Github, FileCheck, Shield, Globe, Code2, Cpu, Terminal, Sparkles } from 'lucide-react';

const Founder: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Apple Music Style Artist Header */}
        <div className="relative rounded-[40px] overflow-hidden bg-[#1c1c1e] border border-white/5 shadow-2xl group">
            
            {/* Dynamic Background with Noise & Blurs */}
            <div className="absolute inset-0 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2c1e31] via-[#1c1c1e] to-black opacity-90"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fa2d48]/10 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100"></div>
            </div>

            <div className="relative z-10 p-8 md:p-16 grid lg:grid-cols-12 gap-12 items-center">
                
                {/* Visual / Image Side */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-center order-1 lg:order-1">
                    <div className="relative group/image perspective-1000">
                        {/* Rotating Glow Ring */}
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#fa2d48] to-purple-600 blur opacity-30 group-hover/image:opacity-60 transition duration-500 animate-spin-slow"></div>
                        
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-[#1c1c1e] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover/image:scale-[1.02]">
                             <img 
                                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop" 
                                alt="Tavana Mohammadi" 
                                className="w-full h-full rounded-full object-cover border-[6px] border-[#2c2c2e] shadow-inner grayscale-[20%] group-hover/image:grayscale-0 transition-all duration-500"
                            />
                        </div>
                         {/* Status Badge */}
                        <div className="absolute bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full border-[6px] border-[#1c1c1e] shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" title="Verified Maintainer">
                            <Shield size={24} fill="currentColor" />
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-8 text-center lg:text-right space-y-8 order-2 lg:order-2">
                    
                    <div className="space-y-4">
                        <div className="flex items-center justify-center lg:justify-start gap-2 opacity-70 mb-2">
                             <Sparkles size={14} className="text-[#fa2d48]" />
                             <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Core Architecture & Lead</span>
                        </div>
                        
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                            توانا <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-500">محمدی</span>
                        </h2>
                        
                        <p className="text-xl md:text-2xl font-medium text-gray-400 max-w-2xl mx-auto lg:mx-0 pt-2">
                            خالق معماری <span className="text-white border-b border-[#fa2d48]/50 pb-0.5">NavaCore</span> و متخصص امنیت شبکه.
                        </p>
                    </div>

                    {/* Editorial Bio */}
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-3xl mx-auto lg:mx-0 font-light pl-0 lg:pl-12">
                        با بیش از ۱۲ سال تجربه در لبه تکنولوژی، توانا بر روی تقاطع حریم خصوصی و عملکرد تمرکز دارد. او به عنوان یکی از مشارکت‌کنندگان اصلی پروژه Xray، زیرساخت‌هایی را طراحی کرده که اکنون توسط هزاران کاربر برای دسترسی آزاد به اطلاعات استفاده می‌شود. تمرکز او بر روی پیاده‌سازی پروتکل‌های <span className="text-white font-medium">Anti-DPI</span> و بهینه‌سازی هسته لینوکس برای پردازش ترافیک رمزنگاری شده است.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                        <button className="h-14 px-8 rounded-full bg-[#fa2d48] hover:bg-[#ff2d55] text-white font-bold text-base transition-all shadow-[0_4px_20px_rgba(250,45,72,0.3)] hover:scale-105 active:scale-95 flex items-center gap-3">
                             <FileCheck size={20} />
                             مشاهده گزارش‌های امنیتی
                        </button>
                        <button className="h-14 px-8 rounded-full bg-[#2c2c2e]/80 hover:bg-[#3a3a3c] backdrop-blur-md text-white font-bold text-base transition-all border border-white/5 flex items-center gap-3 hover:scale-105 active:scale-95">
                             <Globe size={20} />
                             وب‌سایت شخصی
                        </button>
                        <div className="flex gap-2">
                            <a href="#" className="w-14 h-14 rounded-full bg-[#2c2c2e]/80 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#3a3a3c] transition-all border border-white/5 hover:scale-110">
                                <Github size={24} />
                            </a>
                            <a href="#" className="w-14 h-14 rounded-full bg-[#2c2c2e]/80 flex items-center justify-center text-gray-400 hover:text-[#0a66c2] hover:bg-[#3a3a3c] transition-all border border-white/5 hover:scale-110">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom "Track List" Style Skills */}
            <div className="border-t border-white/5 bg-black/20 backdrop-blur-xl">
                <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                     {[
                         { icon: Terminal, label: "Systems", val: "Linux Kernel" },
                         { icon: Code2, label: "Language", val: "Golang / Rust" },
                         { icon: Shield, label: "Focus", val: "Cryptography" },
                         { icon: Cpu, label: "Architecture", val: "Distributed" },
                     ].map((item, i) => (
                         <div key={i} className="flex items-center gap-4 group cursor-default p-2 rounded-xl hover:bg-white/5 transition-colors">
                             <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#fa2d48] transition-all shadow-lg">
                                 <item.icon size={22} />
                             </div>
                             <div>
                                 <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-0.5">{item.label}</div>
                                 <div className="text-sm md:text-base font-bold text-gray-300 group-hover:text-white transition-colors">{item.val}</div>
                             </div>
                         </div>
                     ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Founder;