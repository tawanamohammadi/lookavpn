import React from 'react';
import { Play, Shield, Wifi, Globe, MoreHorizontal, Radio, Airplay } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-right z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fa2d48]/10 backdrop-blur-md border border-[#fa2d48]/20 text-xs font-bold text-[#fa2d48] mb-4 hover:bg-[#fa2d48]/20 transition-all cursor-default shadow-[0_0_20px_rgba(250,45,72,0.2)]">
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

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
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

        {/* Right Visual - The "VPN Player" Card - Improved iOS Style */}
        <div className="relative perspective-1000 group order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fa2d48] to-purple-600 rounded-[48px] blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            
            {/* The Card */}
            <div className="relative w-full max-w-[400px] bg-[#1c1c1e]/60 backdrop-blur-3xl border border-white/10 rounded-[40px] p-6 md:p-8 shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
                
                {/* Album Art Area */}
                <div className="aspect-square rounded-[32px] overflow-hidden relative mb-8 shadow-2xl border border-white/5 bg-black">
                    <img 
                        src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2670&auto=format&fit=crop" 
                        alt="Connection Art" 
                        className="w-full h-full object-cover opacity-90"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(250,45,72,0.4)] border border-white/20">
                            <Shield size={32} fill="white" className="text-white drop-shadow-md" />
                         </div>
                    </div>
                    
                    {/* Live Visualizer Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                        <div className="flex gap-1 h-6 items-end">
                            <div className="bar bg-white"></div>
                            <div className="bar bg-white"></div>
                            <div className="bar bg-white"></div>
                            <div className="bar bg-white"></div>
                        </div>
                        <div className="px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full text-[10px] font-bold uppercase tracking-wider text-white border border-white/10 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-[#fa2d48] rounded-full animate-pulse"></span>
                            Live Traffic
                        </div>
                    </div>
                </div>

                {/* Track Info */}
                <div className="flex justify-between items-center mb-6 px-2">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Nava Secure Core</h3>
                        <p className="text-[#fa2d48] font-medium text-lg">Germany • Frankfurt</p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                        <MoreHorizontal size={20} />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2 mb-8 px-2">
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer group/bar">
                        <div className="h-full w-[85%] bg-gradient-to-r from-[#fa2d48] to-purple-500 rounded-full relative">
                           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
                        </div>
                    </div>
                    <div className="flex justify-between text-[11px] text-gray-400 font-mono font-medium tracking-wider">
                        <span>12ms</span>
                        <span>-0:00</span>
                    </div>
                </div>
                
                {/* Controls */}
                <div className="flex justify-between items-center px-4">
                     <Radio size={22} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                     <div className="flex items-center gap-8">
                         <div className="rotate-180 text-white cursor-pointer hover:scale-110 transition-transform"><Play size={28} fill="currentColor"/></div>
                         <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                             <div className="w-5 h-5 bg-black rounded-[2px]"></div>
                         </div>
                         <div className="text-white cursor-pointer hover:scale-110 transition-transform"><Play size={28} fill="currentColor"/></div>
                     </div>
                     <Airplay size={22} className="text-[#fa2d48] cursor-pointer drop-shadow-[0_0_8px_rgba(250,45,72,0.8)]" />
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;