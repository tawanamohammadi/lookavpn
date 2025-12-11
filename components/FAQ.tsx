import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'آیا آی‌پی من ثابت می‌ماند؟',
      a: 'بله، تمامی پلن‌های سه ماهه و یک ساله ما دارای آی‌پی ثابت هستند که برای ترید و امور بانکی کاملا مناسب است.'
    },
    {
      q: 'برگشت وجه چگونه انجام می‌شود؟',
      a: 'در صورت عدم رضایت یا عدم اتصال در ۳ روز اول، تمام مبلغ بدون هیچ قید و شرطی به حساب شما بازگردانده می‌شود.'
    },
    {
      q: 'چند کاربر همزمان می‌توانند وصل شوند؟',
      a: 'بسته به پلن خریداری شده، از ۲ کاربر تا ۴ کاربر همزمان می‌توانند بدون افت سرعت متصل شوند.'
    },
    {
      q: 'آیا روی همه اینترنت‌ها کار می‌کند؟',
      a: 'بله، سرورهای ما برای کار روی اینترنت همراه اول، ایرانسل، رایتل و اینترنت‌های خانگی (ADSL/VDSL/FiBER) بهینه شده‌اند.'
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">سوالات متداول</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="glass-panel rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="p-6 flex justify-between items-center">
              <h3 className="font-medium text-lg">{faq.q}</h3>
              {openIndex === idx ? <ChevronUp className="text-[#fa2d48]" /> : <ChevronDown className="text-gray-500" />}
            </div>
            <div 
              className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;