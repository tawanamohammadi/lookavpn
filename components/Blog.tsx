import React from 'react';
import { ArrowUpRight, Calendar, User, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
           <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">مجله نوا</h2>
              <p className="text-gray-400 text-lg">آخرین اخبار امنیت، آموزش‌ها و بروزرسانی‌ها</p>
           </div>
           <a href="#" className="hidden md:flex text-[#fa2d48] font-bold items-center gap-1 hover:gap-2 transition-all">
             مشاهده همه <ArrowUpRight size={18} />
           </a>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
           
           {/* Featured Post - Large */}
           <div className="col-span-1 md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[32px] cursor-pointer">
              <div className="absolute inset-0 bg-gray-800">
                <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Cyberpunk City" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                 <span className="inline-block px-3 py-1 bg-[#fa2d48] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">ویژه</span>
                 <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    چرا VLESS امن‌ترین پروتکل برای عبور از فیلترینگ هوشمند است؟
                 </h3>
                 <p className="text-gray-300 line-clamp-2 mb-6 text-sm md:text-base">
                    بررسی فنی ساختار VLESS و مقایسه آن با پروتکل‌های قدیمی‌تر. چگونه این پروتکل شناسایی توسط DPI را دشوار می‌کند.
                 </p>
                 <div className="flex items-center gap-4 text-xs text-gray-400 font-mono">
                    <span className="flex items-center gap-1"><User size={12}/> توانا محمدی</span>
                    <span className="flex items-center gap-1"><Calendar size={12}/> ۲ روز پیش</span>
                 </div>
              </div>
           </div>

           {/* Secondary Post - Tall */}
           <div className="col-span-1 md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[32px] cursor-pointer bg-[#1c1c1e] border border-white/5 hover:border-white/10 transition-colors">
              <div className="h-1/2 overflow-hidden relative">
                  <img 
                      src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop" 
                      alt="Security" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] to-transparent"></div>
              </div>
              <div className="p-6">
                 <div className="flex items-center gap-2 mb-3">
                    <Tag size={14} className="text-blue-400" />
                    <span className="text-blue-400 text-xs font-bold uppercase">آموزش</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">
                    راهنمای اتصال در آیفون
                 </h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    آموزش تصویری و گام به گام نصب و راه‌اندازی اپلیکیشن V2Box برای کاربران iOS.
                 </p>
              </div>
           </div>

           {/* Small Post 1 */}
           <div className="col-span-1 relative group overflow-hidden rounded-[32px] cursor-pointer bg-[#1c1c1e] border border-white/5 p-6 flex flex-col justify-between hover:bg-white/5 transition-colors">
               <div>
                  <div className="w-10 h-10 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                      <Tag size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">ترید امن با آی‌پی ثابت</h3>
                  <p className="text-gray-400 text-xs">نکات مهم برای جلوگیری از بسته شدن حساب در بایننس.</p>
               </div>
               <div className="flex justify-end">
                   <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
               </div>
           </div>

           {/* Small Post 2 */}
            <div className="col-span-1 relative group overflow-hidden rounded-[32px] cursor-pointer bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-white/5 p-6 flex flex-col justify-between hover:brightness-110 transition-all">
               <div>
                  <div className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center mb-4">
                      <Tag size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">نسخه جدید اپلیکیشن</h3>
                  <p className="text-gray-300 text-xs">اضافه شدن قابلیت تغییر خودکار سرور در صورت افت سرعت.</p>
               </div>
               <div className="flex justify-end">
                   <ArrowUpRight className="text-white" />
               </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;