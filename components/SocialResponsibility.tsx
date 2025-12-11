import React from 'react';
import { Heart, Newspaper, ArrowLeft, ShieldAlert, Accessibility } from 'lucide-react';

const SocialResponsibility: React.FC = () => {
  return (
    <section id="social" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#fa2d48] font-bold tracking-wider uppercase text-xs mb-2 block">مسئولیت اجتماعی</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">اینترنت آزاد، حق همه</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ما در نوا وی‌پی‌ان معتقدیم که محدودیت‌های مالی یا جسمی و یا شغل حساس نباید مانع دسترسی آزاد به اطلاعات باشد.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Low Income & Disabilities */}
          <div className="glass-panel p-8 md:p-12 rounded-[32px] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8">
                <div className="flex -space-x-2">
                    <Heart size={24} className="ml-1" fill="currentColor" />
                    <Accessibility size={24} />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">طرح حمایتی امید</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                این طرح برای حمایت از عزیزانی است که دارای معلولیت هستند و یا در شرایط مالی دشواری قرار دارند. ما متعهدیم که سرویس‌های خود را به صورت کاملاً رایگان یا با تخفیف‌های ویژه در اختیار این عزیزان قرار دهیم.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  اشتراک رایگان برای افراد دارای معلولیت
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  تخفیف ۸۰٪ برای دانشجویان و اقشار کم‌درآمد
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  بدون نیاز به تمدید ماهانه (اشتراک‌های بلند مدت)
                </li>
              </ul>

              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition-colors">
                ثبت درخواست حمایتی
                <ArrowLeft size={18} />
              </button>
            </div>
          </div>

          {/* Card 2: Journalists & Emergency */}
          <div className="glass-panel p-8 md:p-12 rounded-[32px] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#fa2d48]/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#fa2d48]/20 text-[#fa2d48] rounded-2xl flex items-center justify-center mb-8">
                <div className="flex -space-x-1">
                     <ShieldAlert size={24} className="ml-1" />
                     <Newspaper size={24} />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">صدای آزاد و شرایط اضطراری</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                برای روزنامه‌نگاران، خبرنگاران مستقل و فعالانی که نیاز به خطوط ارتباطی امن و غیرقابل ردیابی دارند. همچنین برای افرادی که در شرایط اضطراری نیاز فوری به اینترنت آزاد دارند.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#fa2d48] rounded-full"></span>
                  سرورهای اختصاصی و محرمانه (Stealth)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#fa2d48] rounded-full"></span>
                  اولویت دسترسی در زمان قطعی سراسری
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#fa2d48] rounded-full"></span>
                  پشتیبانی مستقیم امنیتی
                </li>
              </ul>

              <button className="flex items-center gap-2 text-[#fa2d48] hover:text-[#d4233a] font-bold transition-colors">
                درخواست دسترسی امن
                <ArrowLeft size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibility;