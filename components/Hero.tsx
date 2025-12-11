import React from 'react';
import { ArrowLeft, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-medium text-[#fa2d48] mb-4 hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fa2d48] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fa2d48]"></span>
          </span>
          نسخه جدید با پروتکل VLESS فعال شد
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
            اینترنت آزاد
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa2d48] via-[#ff2d55] to-[#fa2d48] bg-300% animate-gradient">
             با ریتم موسیقی.
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          تجربه‌ای متفاوت از سرعت و امنیت. بدون قطعی، بدون محدودیت.
          مانند گوش دادن به موسیقی مورد علاقه‌تان، روان و لذت‌بخش.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a 
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 bg-[#fa2d48] hover:bg-[#d4233a] text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(250,45,72,0.3)] flex items-center justify-center gap-2"
          >
             مشاهده پلن‌ها
            <ArrowLeft size={20} />
          </a>
          <a 
            href="#features"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold text-lg transition-all border border-white/5 flex items-center justify-center gap-2 hover:border-white/20"
          >
            <Zap size={20} className="text-yellow-400" />
             تست سرعت
          </a>
        </div>

        <div className="pt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Trust Badges - simple text/icon for demo */}
            <div className="flex items-center gap-2 animate-float" style={{ animationDelay: '0s' }}>
                <ShieldCheck size={24} />
                <span className="text-sm font-semibold">رمزنگاری AES-256</span>
            </div>
             <div className="flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
                <Zap size={24} />
                <span className="text-sm font-semibold">پورت‌های ۱۰ گیگابیت</span>
            </div>
             <div className="flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                <div className="font-bold text-xl">V2Ray</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;