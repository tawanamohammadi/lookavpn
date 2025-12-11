import React from 'react';

const BlurBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Primary Red/Pink blob */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#fa2d48] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{ animationDuration: '8s' }}></div>
      
      {/* Secondary Purple blob */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#5e5ce6] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{ animationDuration: '10s' }}></div>
      
      {/* Tertiary Blue blob */}
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-[#0a84ff] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '12s' }}></div>
    </div>
  );
};

export default BlurBackground;