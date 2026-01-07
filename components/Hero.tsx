import React from 'react';
import { Play, Shield, Wifi, Globe, MoreHorizontal, Radio, Airplay } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-0 lg:pb-0 px-6 min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-20 items-center lg:-mt-12">
        
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-right z-10 order-2 lg:order-1 flex flex-col items-center lg:items-end">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fa2d48]/10 backdrop-blur-md border border-[#fa2d48]/20 text-xs font-bold text-[#fa2d48] mb-2 hover:bg-[#fa2d48]/20 transition-all cursor-default shadow-[0_0_20px_rgba(250,45,72,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fa2d48] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fa2d48]"></span>
            </span>
            اکنون در دسترس: پروتکل VLESS Reality
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
            ریتمِ<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fa2d48] via-[#ff2d55] to-purple-500 text-glow">
              آزادی.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
            اینترنت بدون مرز، با سرعتی که حس می‌کنید.
            <br />
            اتصال امن و پایدار، مثل گوش دادن به موسیقی با کیفیت Lossless.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto">
            <a 
              href="#pricing"
              className="w-full sm:w-auto px-10 py-4 bg-[#fa2d48] hover:bg-[#ff2d55] text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(250,45,72,0.4)] flex items-center justify-center gap-2"
            >
               <Play size={20} fill="currentColor" />
               شروع اشتراک
            </a>
            <a 
              href="#features"
              className="w-full sm:w-auto px-10 py-4 bg-[#1c1c1e]/80 hover:bg-[#2c2c2e] backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              بیشتر بدانید
            </a>
          </div>
        </div>

        {/* Right Visual - The "VPN Player" Card - BIGGER Version */}
        <div className="relative perspective-1000 group order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fa2d48] to-purple-600 rounded-[60px] blur-[90px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            {/* The Card - Increased Max Width for Desktop significantly */}
            <div className="relative w-full max-w-[380px] lg:max-w-[580px] bg-[#1c1c1e]/60 backdrop-blur-3xl border border-white/10 rounded-[48px] p-6 md:p-10 shadow-2xl transition-transform duration-500 hover:scale-[1.01] hover:-rotate-1">
                
                {/* Album Art Area */}
                <div className="aspect-square rounded-[36px] overflow-hidden relative mb-8 shadow-2xl border border-white/5 bg-black">
                    <img 
                        src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2670&auto=format&fit=crop" 
                        alt="Connection Art" 
                        className="w-full h-full object-cover opacity-90"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(250,45,72,0.5)] border border-white/20 transition-transform group-hover:scale-110 duration-500">
                            <Shield size={40} fill="white" className="text-white drop-shadow-md" />
                         </div>
                    </div>
                    
                    {/* Live Visualizer Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        <div className="flex gap-1.5 h-8 items-end">
                            <div className="bar bg-white w-1.5"></div>
                            <div className="bar bg-white w-1.5"></div>
                            <div className="bar bg-white w-1.5"></div>
                            <div className="bar bg-white w-1.5"></div>
                        </div>
                        <div className="px-4 py-1.5 bg-white/20 backdrop-blur-lg rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/10 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#fa2d48] rounded-full animate-pulse"></span>
                            Live Traffic
                        </div>
                    </div>
                </div>

                {/* Track Info */}
                <div className="flex justify-between items-center mb-8 px-2">
                    <div className="text-right">
                        <h3 className="text-3xl font-bold text-white mb-1.5 tracking-tight">Nava Secure Core</h3>
                        <p className="text-[#fa2d48] font-medium text-xl">Germany • Frankfurt</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                        <MoreHorizontal size={24} />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="space-y-3 mb-10 px-2">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden cursor-pointer group/bar">
                        <div className="h-full w-[85%] bg-gradient-to-r from-[#fa2d48] to-purple-500 rounded-full relative">
                           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
                        </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 font-mono font-medium tracking-wider">
                        <span>12ms</span>
                        <span>-0:00</span>
                    </div>
                </div>
                
                {/* Controls */}
                <div className="flex justify-between items-center px-6 pb-2">
                     <Radio size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                     <div className="flex items-center gap-10">
                         <div className="rotate-180 text-white cursor-pointer hover:scale-110 transition-transform active:scale-95"><Play size={32} fill="currentColor"/></div>
                         <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform cursor-pointer">
                             <div className="w-6 h-6 bg-black rounded-[3px]"></div>
                         </div>
                         <div className="text-white cursor-pointer hover:scale-110 transition-transform active:scale-95"><Play size={32} fill="currentColor"/></div>
                     </div>
                     <Airplay size={24} className="text-[#fa2d48] cursor-pointer drop-shadow-[0_0_10px_rgba(250,45,72,0.8)]" />
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;