import React from 'react';
import { Instagram, Send, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-lg pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">NavaVPN</h3>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              ارائه‌دهنده خدمات دسترسی آزاد به اینترنت با بالاترین استانداردهای امنیتی و سرعت. 
              ما متعهد به حفظ حریم خصوصی شما هستیم.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#fa2d48] transition-colors text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#fa2d48] transition-colors text-gray-400 hover:text-white">
                <Send size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#fa2d48] transition-colors text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#fa2d48] transition-colors text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">دسترسی سریع</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#fa2d48] transition-colors">خانه</a></li>
              <li><a href="#pricing" className="hover:text-[#fa2d48] transition-colors">تعرفه‌ها</a></li>
              <li><a href="#setup" className="hover:text-[#fa2d48] transition-colors">آموزش‌ها</a></li>
              <li><a href="#" className="hover:text-[#fa2d48] transition-colors">وبلاگ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">قوانین</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#fa2d48] transition-colors">حریم خصوصی</a></li>
              <li><a href="#" className="hover:text-[#fa2d48] transition-colors">شرایط استفاده</a></li>
              <li><a href="#" className="hover:text-[#fa2d48] transition-colors">بازگشت وجه</a></li>
              <li><a href="#" className="hover:text-[#fa2d48] transition-colors">تماس با ما</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© ۲۰۲۴ نوا وی‌پی‌ان. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-6">
            <span>طراحی با ❤️ برای آزادی</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;