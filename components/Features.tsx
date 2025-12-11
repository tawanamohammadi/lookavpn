import React from 'react';
import { Wifi, Shield, Smartphone, Globe2, Headphones, Activity } from 'lucide-react';
import { Feature } from '../types';

const featuresList: Feature[] = [
  {
    title: 'سرعت رعدآسا',
    description: 'استفاده از سرورهای اختصاصی با پورت ۱۰ گیگابیت برای تجربه استریم ۴K بدون لگ.',
    icon: Wifi,
  },
  {
    title: 'امنیت بانکی',
    description: 'رمزنگاری تمامی ترافیک شما با استانداردهای نظامی. هیچکس فعالیت شما را نمی‌بیند.',
    icon: Shield,
  },
  {
    title: 'سازگار با همه دستگاه‌ها',
    description: 'اتصال آسان در آیفون، اندروید، ویندوز و مک با یک اکانت واحد.',
    icon: Smartphone,
  },
  {
    title: 'آی‌پی ثابت',
    description: 'مناسب برای ترید و کارهای بانکی حساس بدون نگرانی از تغییر لوکیشن.',
    icon: Globe2,
  },
  {
    title: 'پشتیبانی ۲۴/۷',
    description: 'تیم پشتیبانی ما همیشه بیدار است تا مشکلات شما را در لحظه حل کند.',
    icon: Headphones,
  },
  {
    title: 'بدون محدودیت حجم',
    description: 'دانلود و آپلود نامحدود. هیچ سقف مصرفی برای شما وجود ندارد.',
    icon: Activity,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">چرا نوا وی‌پی‌ان؟</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ما فقط یک VPN نیستیم، ما دروازه ورود شما به اینترنت آزاد با بالاترین کیفیت ممکن هستیم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="glass-panel p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#fa2d48] to-[#ff2d55] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;