
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Java' | 'JavaScript' | 'Network'>('All');

  const filteredPosts = filter === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === filter);

  const categories: ('All' | 'Java' | 'JavaScript' | 'Network')[] = ['All', 'Java', 'JavaScript', 'Network'];

  return (
    <div className="space-y-16 py-12 animate-fade-in-up">
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white tracking-tight">Blog cá nhân</h1>
        <p className="text-lg text-slate-400">
          Chia sẻ kinh nghiệm và kiến thức về lập trình mạng trên nền tảng Java & JavaScript.
        </p>
      </header>

      {/* Filters */}
      <div className="flex justify-center gap-3 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all transform active:scale-95 ${
              filter === cat 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40 border-transparent' 
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.map((post, idx) => (
          <article 
            key={post.id} 
            className="bg-slate-900/40 border border-slate-800/60 rounded-3xl overflow-hidden hover:border-purple-500/40 hover:bg-slate-900 transition-all group flex flex-col h-full animate-fade-in-up"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <Link to={`/post/${post.id}`} className="block relative aspect-[16/9] overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <span className="absolute bottom-4 left-4 px-3 py-1 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest rounded-md">
                {post.category}
              </span>
            </Link>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-3 text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-100 mb-4 line-clamp-2 leading-tight group-hover:text-purple-400 transition-colors">
                <Link to={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-slate-400 text-sm mb-8 line-clamp-3 flex-1 leading-relaxed">
                {post.excerpt}
              </p>
              <Link to={`/post/${post.id}`} className="text-purple-400 font-bold text-sm inline-flex items-center group/btn">
                Đọc bài viết 
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-24 bg-slate-900/50 rounded-3xl border border-dashed border-slate-800">
          <p className="text-slate-500 font-medium">Chưa có bài viết nào trong mục này.</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
