
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter group">
              <span className="text-purple-500 group-hover:text-purple-400 transition-colors">Blog</span>
              <span className="text-slate-100">-Profile</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/') ? 'text-purple-500' : 'text-slate-400 hover:text-purple-400'} font-medium transition-all`}>Trang chủ</Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-purple-500' : 'text-slate-400 hover:text-purple-400'} font-medium transition-all`}>Về tôi</Link>
            <Link to="/blog" className={`${isActive('/blog') ? 'text-purple-500' : 'text-slate-400 hover:text-purple-400'} font-medium transition-all`}>Bài viết</Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'text-purple-500' : 'text-slate-400 hover:text-purple-400'} font-medium transition-all`}>Liên hệ</Link>
            <Link to="/ai-assistant" className="px-4 py-2 bg-purple-600/10 text-purple-400 border border-purple-500/20 rounded-full hover:bg-purple-600/20 transition-all text-sm font-semibold">Trợ lý AI</Link>
          </div>
           <div className="md:hidden flex items-center gap-4">
             <Link to="/about" className="text-purple-400 text-sm font-medium">Về tôi</Link>
             <Link to="/blog" className="text-purple-400 text-sm font-medium">Blog</Link>
             <Link to="/contact" className="text-purple-400 text-sm font-medium">Liên hệ</Link>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
