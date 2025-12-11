import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
    const reviews = [
        { name: 'علی رضایی', role: 'گیمر حرفه‌ای', text: 'پینگ وارزون از ۱۲۰ اومد روی ۸۰. پکت لاست هم صفر شد. واقعا برای گیمرها پیشنهاد میشه.', stars: 5, color: 'from-indigo-500 to-purple-600' },
        { name: 'سارا امینی', role: 'تریدر', text: 'آی‌پی ثابت آلمان گرفتم، الان ۳ ماهه ترید میکنم و هیچ مشکلی با صرافی‌ها نداشتم. کیل‌سوییچش عالیه.', stars: 5, color: 'from-pink-500 to-rose-600' },
        { name: 'کاوه', role: 'توسعه‌دهنده', text: 'برای پول کردن ایمیج‌های داکر و کار با گیت‌هاب سرعتش بی‌نظیره. قطعی نداره اصلا.', stars: 5, color: 'from-emerald-500 to-teal-600' },
        { name: 'مریم', role: 'فریلنسر', text: 'تو جلسات گوگل میت همیشه مشکل داشتم، با سرویس شما کیفیت HD بدون لگ دارم.', stars: 5, color: 'from-orange-500 to-amber-600' },
        { name: 'پوریا', role: 'یوتیوبر', text: 'آپلود ویدیوهای ۴K خیلی سریع انجام میشه. قبلا ۳ ساعت طول میکشید الان نیم ساعت.', stars: 5, color: 'from-blue-500 to-cyan-600' },
        { name: 'الناز', role: 'دانشجو', text: 'برای تحقیقات دانشگاه و دسترسی به مقالات ساینس‌دایرکت عالیه. سرعت دانلودش هم خوبه.', stars: 5, color: 'from-violet-500 to-fuchsia-600' },
    ];

    // Duplicate list for infinite loop
    const doubledReviews = [...reviews, ...reviews];

    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-[#121214] to-black">
             <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl font-bold mb-4">صدای کاربران</h2>
                <p className="text-gray-400">بیش از ۱۰,۰۰۰ کاربر راضی</p>
             </div>

             <div className="relative w-full overflow-hidden mask-image-gradient">
                {/* Gradient Masks for fading edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                {/* Marquee Container */}
                <div className="flex gap-8 w-max animate-marquee hover:pause-animation">
                    {doubledReviews.map((review, idx) => (
                        <div 
                            key={idx} 
                            className="w-[350px] md:w-[400px] flex-shrink-0 group relative"
                        >
                            {/* Card Look - Album Cover Style */}
                            <div className="bg-[#1c1c1e] p-8 rounded-[32px] border border-white/5 relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl h-full flex flex-col justify-between">
                                {/* Blurred Background blob inside card */}
                                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${review.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                                
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg">{review.name}</h3>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{review.role}</p>
                                        </div>
                                        <div className="mr-auto opacity-20">
                                            <Quote size={24} />
                                        </div>
                                    </div>

                                    <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                                        "{review.text}"
                                    </p>
                                </div>

                                <div className="flex gap-1 text-[#fa2d48]">
                                    {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};

export default Testimonials;