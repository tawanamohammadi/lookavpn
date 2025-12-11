import React from 'react';
import { GitBranch, ShieldCheck, Eye, Lock, Terminal, Github, FileCode, Server } from 'lucide-react';

const OpenSource: React.FC = () => {
  return (
    <section className="py-32 px-6 relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            <GitBranch size={14} />
            Powered by Tavaana Network
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            امنیت، نباید <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">
              یک جعبه سیاه باشد.
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            در دنیای امنیت سایبری، "اعتماد" واژه‌ای خطرناک است. ما از شما نمی‌خواهیم به ما اعتماد کنید؛ 
            ما از شما دعوت می‌کنیم <span className="text-white font-medium">کد ما را بررسی کنید</span>. 
            زیرساخت ما بر پایه هسته قدرتمند و متن‌باز توانا نتورک بنا شده است.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Terminal / Technical Side */}
            <div className="order-2 lg:order-1 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative h-full flex flex-col">
                    {/* Terminal Header */}
                    <div className="bg-[#121214] px-4 py-3 flex items-center justify-between border-b border-white/5" dir="ltr">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="text-xs text-gray-500 font-mono flex items-center gap-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                            <ShieldCheck size={12} />
                            audit-mode @ t-core
                        </div>
                    </div>

                    {/* Terminal Body - LTR and JetBrains Mono */}
                    <div 
                        className="p-6 text-xs md:text-sm bg-[#0d0d0d] text-gray-300 space-y-3 overflow-y-auto flex-grow max-h-[400px]"
                        dir="ltr"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                        <div className="flex flex-col gap-1 opacity-50">
                            <span className="text-gray-600"># Initializing integrity check...</span>
                        </div>
                        
                        <div className="flex">
                            <span className="text-emerald-500 mr-2">➜</span>
                            <span className="text-blue-400">~</span>
                            <span className="ml-2">git remote -v</span>
                        </div>
                        <div className="text-gray-400 pl-4">
                            origin <span className="text-cyan-400 underline">https://github.com/tavaana-net/nava-core</span> (fetch)<br/>
                            origin <span className="text-cyan-400 underline">https://github.com/tavaana-net/nava-core</span> (push)
                        </div>

                        <div className="flex pt-2">
                            <span className="text-emerald-500 mr-2">➜</span>
                            <span className="text-blue-400">~</span>
                            <span className="ml-2">cat /etc/nava/policy.json</span>
                        </div>
                        <div className="pl-4 text-yellow-100">
                            {`{`} <br/>
                            &nbsp;&nbsp;<span className="text-purple-400">"log_level"</span>: <span className="text-green-400">"none"</span>,<br/>
                            &nbsp;&nbsp;<span className="text-purple-400">"persistence"</span>: <span className="text-green-400">false</span>,<br/>
                            &nbsp;&nbsp;<span className="text-purple-400">"encryption"</span>: <span className="text-green-400">"xtls-rprx-vision"</span>,<br/>
                            &nbsp;&nbsp;<span className="text-purple-400">"audit_signature"</span>: <span className="text-green-400">"verified_by_tavaana"</span><br/>
                            {`}`}
                        </div>

                        <div className="flex pt-2">
                            <span className="text-emerald-500 mr-2">➜</span>
                            <span className="text-blue-400">~</span>
                            <span className="ml-2">./verify-build --release v4.2</span>
                        </div>
                        <div className="text-gray-300 pl-4 animate-pulse">
                            > Computing SHA-256 hashes...
                        </div>
                        <div className="text-emerald-400 pl-4">
                            [PASS] Core Binary Integrity Verified<br/>
                            [PASS] No Backdoors Detected<br/>
                            [PASS] Memory-Only Execution Mode Active
                        </div>
                         <div className="flex pt-2 items-center">
                            <span className="text-emerald-500 mr-2">➜</span>
                            <span className="w-2 h-5 bg-gray-500 animate-pulse"></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Side */}
            <div className="order-1 lg:order-2 space-y-8 flex flex-col justify-center">
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                            <FileCode size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">معماری شفاف (Open Architecture)</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                تمام کدهای کلاینت و کانفیگ‌های سرور ما در گیت‌هاب موجود است. هر متخصص امنیتی می‌تواند دقیقاً ببیند که داده‌های شما چگونه پردازش می‌شوند.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                            <Server size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">سیاست واقعی Zero-Log</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                سرورهای ما طوری پیکربندی شده‌اند که روی RAM اجرا شوند (Diskless). با هر بار ریستارت سرور، حتی اگر بخواهیم، هیچ اثری از داده‌ها باقی نمی‌ماند.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                            <Eye size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">نظارت عمومی</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                ما به طور مداوم توسط جامعه متن‌باز توانا نتورک ممیزی می‌شویم. امنیت ما حاصل خرد جمعی صدها برنامه‌نویس آزادی‌خواه است.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                    <a href="#" className="inline-flex items-center gap-2 text-white bg-[#333] hover:bg-[#444] px-6 py-3 rounded-xl transition-all font-medium border border-white/10 hover:border-white/20 group">
                        <Github size={20} />
                        <span>مشاهده سورس کد در گیت‌هاب</span>
                        <span className="text-gray-500 text-sm group-hover:text-white transition-colors ml-2 font-mono">v4.2.0</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;