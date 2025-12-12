import React from 'react';

const BlurBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Mesh Gradient Base */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-900/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#fa2d48]/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-32 left-1/3 w-[800px] h-[800px] bg-blue-900/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
      
      {/* Noise Texture Overlay for that grainy Apple feel */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default BlurBackground;