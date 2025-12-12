import React from 'react';
import { Wifi, Shield, Smartphone, Globe2, Headphones, Activity, Zap, Lock, CloudLightning, Layers } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white">ویژگی‌ها</h2>
            <p className="text-gray-400 text-xl font-medium max-w-lg">
              ترکیبی از هنر و تکنولوژی برای تجربه‌ای متفاوت.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-8 mb-4"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Feature 1: Speed - Large Horizontal */}
          <div className="glass-panel col-span-1 md:col-span-2 row-span-2 rounded-[32px] p-8 md:p-10 relative overflow-hidden group glass-card-hover flex flex-col justify-between h-[400px]">
             {/* Background Decoration */}
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-50"></div>
             <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] group-hover:bg-blue-500/30 transition-colors"></div>
             
             <div className="relative z-10">
                 <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-500/30">
                    <CloudLightning size={32} />
                 </div>
                 <h3 className="text-3xl font-bold mb-3 text-white">سرعت ۱۰ گیگابیت</h3>
                 <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
                    زیرساخت ابری اختصاصی روی سرورهای NVMe. پینگ پایین برای گیمینگ و استریم ۴K بدون لگ.
                 </p>
             </div>
             
             {/* Visual Graph Decoration */}
             <div className="flex items-end gap-1.5 h-20 mt-6 relative z-10 mask-image-gradient">
                {[40, 65, 50, 85, 60, 90, 55, 100, 85, 95, 75, 60, 80, 50, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-500 rounded-t-sm transition-all duration-500 group-hover:bg-blue-400" style={{ height: `${h}%`, opacity: 0.3 + (i/30) }}></div>
                ))}
             </div>
          </div>

          {/* Feature 2: Security - Tall Vertical */}
          <div className="glass-panel col-span-1 row-span-2 rounded-[32px] p-8 relative overflow-hidden group glass-card-hover bg-[#121214]">
             <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
             
             <div className="relative z-10 h-full flex flex-col justify-between">
                 <div>
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-emerald-500/30">
                        <Shield size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">امنیت بانکی</h3>
                    <p className="text-gray-400 text-sm leading-6">
                        رمزنگاری AES-256 و پروتکل‌های XTLS. اطلاعات شما حتی برای ما هم غیرقابل خواندن است.
                    </p>
                 </div>
                 <div className="mt-8 flex justify-center opacity-40 group-hover:opacity-60 transition-opacity transform group-hover:scale-110 duration-500">
                     <Lock size={100} className="text-emerald-500" strokeWidth={1} />
                 </div>
             </div>
          </div>

          {/* Feature 3: Support - Square */}
          <div className="glass-panel col-span-1 rounded-[32px] p-8 relative overflow-hidden group glass-card-hover flex flex-col justify-center bg-[#1c1c1e]">
             <div className="absolute inset-0 bg-gradient-to-br from-[#fa2d48]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10">
                <div className="w-12 h-12 bg-[#fa2d48] rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-[#fa2d48]/30">
                    <Headphones size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">پشتیبانی ۲۴/۷</h3>
                <p className="text-gray-500 text-xs mt-2">پاسخگویی زیر ۵ دقیقه</p>
             </div>
          </div>

          {/* Feature 4: Devices - Wide Rectangle */}
          <div className="glass-panel col-span-1 md:col-span-1 rounded-[32px] p-8 relative overflow-hidden group glass-card-hover">
              <div className="h-full flex flex-col justify-between z-10 relative">
                 <div>
                    <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-purple-500/30">
                        <Layers size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">مولتی پلتفرم</h3>
                    <p className="text-gray-400 text-xs">iOS, Android, Windows, Mac</p>
                 </div>
              </div>
              <div className="absolute -bottom-4 -right-4 flex opacity-30">
                  <Smartphone size={80} className="text-purple-400 rotate-12" />
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;