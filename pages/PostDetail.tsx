
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Bài viết không tồn tại</h2>
        <Link to="/blog" className="text-blue-600 font-semibold underline">Quay lại danh sách</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-10 space-y-10">
      <Link to="/blog" className="text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center gap-1">
        ← Quay lại Blog
      </Link>
      
      <header className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">{post.category}</span>
          <span className="text-sm text-gray-400">{post.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-50 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4">
          <img src="https://picsum.photos/seed/author/40/40" alt="Author" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-bold text-slate-50">{post.author}</p>
            <p className="text-xs text-gray-400">Software Engineer</p>
          </div>
        </div>
      </header>

      <div className="aspect-video rounded-3xl overflow-hidden bg-gray-100 shadow-lg">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg prose-blue max-w-none">
        <p className="text-xl text-slate-200 leading-relaxed font-medium mb-8">
          {post.excerpt}
        </p>
        <div className="text-slate-100 leading-relaxed space-y-6">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('```')) {
              const code = paragraph.replace(/```[a-z]*\n|```/g, '');
              return (
                <pre key={idx} className="bg-gray-900 text-slate-50 p-6 rounded-xl overflow-x-auto font-mono text-sm leading-relaxed">
                  <code>{code}</code>
                </pre>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>
      </div>

      <div className="pt-10 border-t border-gray-100 mt-20">
        <h3 className="text-lg font-bold text-slate-50 mb-6">Đọc thêm các bài viết khác</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map(p => (
            <Link key={p.id} to={`/post/${p.id}`} className="p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
              <span className="text-xs text-blue-600 font-bold uppercase">{p.category}</span>
              <h4 className="font-bold text-slate-50 mt-1 line-clamp-1">{p.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
