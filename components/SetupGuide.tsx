import React from 'react';
import { Apple, Smartphone, Monitor, Download } from 'lucide-react';

const SetupGuide: React.FC = () => {
  const platforms = [
    {
      name: 'iOS / iPadOS',
      icon: Apple,
      app: 'V2Box',
      desc: 'بهترین گزینه برای آیفون و آیپد',
      color: 'bg-white text-black hover:bg-gray-200'
    },
    {
      name: 'Android',
      icon: Smartphone,
      app: 'v2rayNG',
      desc: 'پایدارترین کلاینت برای اندروید',
      color: 'bg-green-500 text-white hover:bg-green-600'
    },
    {
      name: 'Windows',
      icon: Monitor,
      app: 'v2rayN',
      desc: 'نسخه دسکتاپ با امکانات کامل',
      color: 'bg-blue-600 text-white hover:bg-blue-700'
    },
    {
      name: 'macOS',
      icon: Apple,
      app: 'V2Box / FoXray',
      desc: 'سازگار با تراشه‌های سری M',
      color: 'bg-gray-600 text-white hover:bg-gray-700'
    },
  ];

  return (
    <section id="setup" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">شروع سریع</h2>
          <p className="text-gray-400 text-lg">
            اپلیکیشن مناسب دستگاه خود را دانلود کنید و کد اشتراک را کپی کنید. همین!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((platform, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="mb-4 p-3 bg-white/5 rounded-full">
                <platform.icon size={32} />
              </div>
              <h3 className="font-bold text-xl mb-1">{platform.name}</h3>
              <div className="text-[#fa2d48] font-medium text-sm mb-2">{platform.app}</div>
              <p className="text-gray-500 text-xs mb-6">{platform.desc}</p>
              
              <button className={`w-full py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors ${platform.color}`}>
                <Download size={16} />
                دانلود مستقیم
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;