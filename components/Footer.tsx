
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 mt-20">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <div className="text-2xl font-bold tracking-tighter">
          <span className="text-purple-500">Blog</span>
          <span className="text-slate-100">-Profile</span>
        </div>
        <p className="text-slate-500 text-sm max-w-md mx-auto">
          Blog chia sẻ kiến thức lập trình mạng, mã nguồn mở và những trải nghiệm trong thế giới Java & Node.js,...
        </p>
        <div className="pt-8 text-slate-600 text-[10px] uppercase font-black tracking-[0.3em]">
          © {new Date().getFullYear()} • Phát triển bởi Võ Nguyên Bình • Đồ án học phần
        </div>
      </div>
    </footer>
  );
};

export default Footer;
