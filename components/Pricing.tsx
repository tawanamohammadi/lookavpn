import React from 'react';
import { Check, Music2 } from 'lucide-react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    id: '1',
    name: 'تک ماهه',
    price: '۱۲۹,۰۰۰',
    duration: 'ماهانه',
    features: ['۲ کاربر همزمان', 'حجم نامحدود', 'پشتیبانی آنلاین', 'پروتکل V2Ray'],
    color: 'bg-gray-800',
    popular: false,
  },
  {
    id: '2',
    name: 'سه ماهه',
    price: '۳۴۹,۰۰۰',
    duration: 'سه ماهه',
    features: ['۲ کاربر همزمان', 'حجم نامحدود', 'پشتیبانی VIP', 'آی‌پی ثابت (هدیه)', 'ضمانت بازگشت وجه'],
    color: 'bg-[#fa2d48]',
    popular: true,
  },
  {
    id: '3',
    name: 'یک ساله',
    price: '۱,۱۹۰,۰۰۰',
    duration: 'سالانه',
    features: ['۴ کاربر همزمان', 'حجم نامحدود', 'پشتیبانی اختصاصی', 'سرورهای گیمینگ', 'پایین‌ترین پینگ'],
    color: 'bg-gray-800',
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">پلن مناسب خود را انتخاب کنید</h2>
            <p className="text-gray-400 text-lg">دسترسی نامحدود به تمامی سرورها در تمامی پلن‌ها</p>
          </div>
          <div className="bg-white/10 p-1 rounded-xl flex">
            <button className="px-6 py-2 rounded-lg bg-[#fa2d48] text-white font-medium shadow-md">عادی</button>
            <button className="px-6 py-2 rounded-lg text-gray-400 hover:text-white font-medium">اختصاصی</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                plan.popular 
                  ? 'bg-gradient-to-b from-[#fa2d48]/90 to-[#fa2d48]/70 border border-[#ff6b81]/50 shadow-[0_20px_60px_rgba(250,45,72,0.4)]' 
                  : 'glass-panel hover:bg-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#fa2d48] px-4 py-1 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                  پیشنهاد ویژه
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-full ${plan.popular ? 'bg-white/20' : 'bg-white/10'}`}>
                        <Music2 size={24} className={plan.popular ? 'text-white' : 'text-[#fa2d48]'} />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-400'}`}>تومان</span>
                </div>
                <p className={`text-sm mt-1 ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                    پرداخت هر {plan.duration}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${plan.popular ? 'bg-white/20 text-white' : 'bg-[#fa2d48]/20 text-[#fa2d48]'}`}>
                        <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={`text-sm font-medium ${plan.popular ? 'text-white' : 'text-gray-300'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all active:scale-95 ${
                  plan.popular 
                    ? 'bg-white text-[#fa2d48] hover:bg-gray-100 shadow-xl' 
                    : 'bg-[#fa2d48] text-white hover:bg-[#d4233a] shadow-lg shadow-[#fa2d48]/20'
                }`}
              >
                انتخاب پلن
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;