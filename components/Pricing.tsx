import React from 'react';
import { Check, Music2, Zap, Crown, Star, Sparkles } from 'lucide-react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    id: '1',
    name: 'تک ماهه',
    price: '۱۲۹,۰۰۰',
    duration: 'ماهانه',
    features: ['۲ کاربر همزمان', 'حجم نامحدود', 'پشتیبانی آنلاین', 'پروتکل VLESS'],
    color: 'from-gray-800 to-gray-900',
    popular: false,
  },
  {
    id: '2',
    name: 'سه‌ماهه',
    price: '۳۴۹,۰۰۰',
    duration: '۳ ماهه',
    features: ['۲ کاربر همزمان', 'حجم نامحدود', 'پشتیبانی VIP', 'آی‌پی ثابت (هدیه)', 'ضمانت بازگشت وجه'],
    color: 'from-[#fa2d48] via-[#ff2d55] to-[#ff5864]',
    popular: true,
  },
  {
    id: '3',
    name: 'یک ساله',
    price: '۱,۱۹۰,۰۰۰',
    duration: 'سالانه',
    features: ['۴ کاربر همزمان', 'حجم نامحدود', 'پشتیبانی اختصاصی', 'سرورهای گیمینگ', 'پایین‌ترین پینگ'],
    color: 'from-blue-600 via-indigo-600 to-purple-600',
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">اشتراک‌ها</h2>
           <p className="text-xl text-gray-400">یک اشتراک برای تمام دستگاه‌های شما.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative rounded-[32px] overflow-hidden transition-all duration-500 group flex flex-col ${
                plan.popular 
                  ? 'scale-105 shadow-[0_30px_80px_-20px_rgba(250,45,72,0.4)] z-10 border-none' 
                  : 'hover:scale-[1.02] bg-[#1c1c1e] border border-white/5 hover:border-white/10'
              }`}
            >
              {/* Header / Color Block */}
              <div className={`p-8 h-56 bg-gradient-to-br ${plan.color} relative flex flex-col justify-between overflow-hidden`}>
                  {/* Abstract shapes in background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

                  {plan.popular && (
                      <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-white border border-white/20 flex items-center gap-1 uppercase tracking-wider shadow-lg">
                          <Sparkles size={12} />
                          پیشنهاد ویژه
                      </div>
                  )}
                  
                  <div className="text-white relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-inner border border-white/10">
                         {plan.id === '2' ? <Crown size={24} className="opacity-100" /> : plan.id === '3' ? <Star size={24} className="opacity-100"/> : <Zap size={24} className="opacity-100"/>}
                      </div>
                      <h3 className="text-3xl font-bold tracking-tight">{plan.name}</h3>
                      <p className="opacity-80 font-medium mt-1">{plan.duration}</p>
                  </div>
              </div>

              {/* Price & Features */}
              <div className={`p-8 flex-grow flex flex-col ${plan.popular ? 'bg-[#252527]' : ''}`}>
                 <div className="flex items-baseline gap-1 mb-8 border-b border-white/5 pb-8">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-sm text-gray-500 font-medium">تومان</span>
                </div>

                <div className="space-y-5 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-[#fa2d48]/20 text-[#fa2d48]' : 'bg-white/10 text-gray-400'}`}>
                          <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-medium ${plan.popular ? 'text-white' : 'text-gray-300'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all active:scale-95 ${
                    plan.popular 
                      ? 'bg-[#fa2d48] text-white hover:bg-[#d4233a] shadow-lg shadow-[#fa2d48]/20' 
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {plan.popular ? 'شروع اشتراک' : 'انتخاب'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;