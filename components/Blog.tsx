import React from 'react';
import { ArrowUpRight, Calendar, User, Tag, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
           <div>
              <span className="text-[#fa2d48] font-bold tracking-wider uppercase text-xs mb-2 block">بلاگ و آموزش</span>
              <h2 className="text-3xl md:text-5xl font-black text-white">مجله نوا</h2>
           </div>
           <a href="#" className="hidden md:flex text-[#fa2d48] font-bold items-center gap-1 hover:gap-2 transition-all text-sm bg-white/5 px-4 py-2 rounded-full hover:bg-white/10">
             مشاهده آرشیو <ChevronRight size={16} />
           </a>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
           
           {/* Featured Post - Large */}
           <div className="col-span-1 md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[32px] cursor-pointer">
              <div className="absolute inset-0 bg-gray-900">
                <img 
                    src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop" 
                    alt="Abstract Data Lines" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full z-10">
                 <span className="inline-block px-3 py-1 bg-[#fa2d48] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider shadow-lg shadow-red-600/20">مقاله ویژه</span>
                 <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    چرا VLESS امن‌ترین پروتکل برای عبور از فیلترینگ هوشمند است؟
                 </h3>
                 <p className="text-gray-300 line-clamp-2 mb-6 text-sm md:text-base font-medium max-w-xl">
                    بررسی فنی ساختار VLESS و مقایسه آن با پروتکل‌های قدیمی‌تر. چگونه این پروتکل شناسایی توسط DPI را دشوار می‌کند و پینگ شما را کاهش می‌دهد.
                 </p>
                 <div className="flex items-center gap-4 text-xs text-gray-400 font-mono">
                    <span className="flex items-center gap-1.5"><User size={14} className="text-[#fa2d48]"/> توانا محمدی</span>
                    <span className="flex items-center gap-1.5"><Calendar size={14}/> ۲ روز پیش</span>
                 </div>
              </div>
           </div>

           {/* Secondary Post - Tall */}
           <div className="col-span-1 md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[32px] cursor-pointer bg-[#1c1c1e] border border-white/5 hover:border-white/20 transition-colors">
              <div className="h-3/5 overflow-hidden relative">
                  <img 
                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
                      alt="Mobile Setup" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] to-transparent"></div>
              </div>
              <div className="p-6 relative -mt-12 z-10">
                 <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-blue-500/20">آموزش</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">
                    راهنمای اتصال در آیفون
                 </h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    آموزش تصویری و گام به گام نصب و راه‌اندازی اپلیکیشن V2Box برای کاربران iOS.
                 </p>
                 <span className="text-white text-xs font-bold flex items-center gap-1 group-hover:text-blue-400 transition-colors">ادامه مطلب <ArrowUpRight size={14}/></span>
              </div>
           </div>

           {/* Small Post 1 */}
           <div className="col-span-1 relative group overflow-hidden rounded-[32px] cursor-pointer bg-[#1c1c1e] border border-white/5 p-6 flex flex-col justify-between hover:bg-[#2c2c2e] transition-colors">
               <div>
                  <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20">
                      <Tag size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">ترید امن با آی‌پی ثابت</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">نکات مهم برای جلوگیری از بسته شدن حساب در صرافی‌های خارجی.</p>
               </div>
               <div className="flex justify-end mt-4">
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white" />
                   </div>
               </div>
           </div>

           {/* Small Post 2 */}
            <div className="col-span-1 relative group overflow-hidden rounded-[32px] cursor-pointer bg-gradient-to-br from-purple-900 via-[#1c1c1e] to-[#1c1c1e] border border-white/5 p-6 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(107,33,168,0.2)] transition-all">
               <div>
                  <div className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center mb-4 border border-white/20">
                      <Tag size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">آپدیت جدید اپلیکیشن</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">اضافه شدن قابلیت تغییر خودکار سرور در صورت افت سرعت.</p>
               </div>
               <div className="flex justify-end mt-4">
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <ArrowUpRight size={16} className="text-black" />
                   </div>
               </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;