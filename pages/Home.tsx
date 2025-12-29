
import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE, BLOG_POSTS, PROJECTS } from '../constants';

const Home: React.FC = () => {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="space-y-32 pb-20">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-indigo-900/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
        <div className="flex-1 space-y-8">
          <div className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold uppercase tracking-widest">
            Welcome to my space
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Hi, I'm {PROFILE.name}. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
               Web Developer and Software Engineer
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            {PROFILE.bio}
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Link to="/blog" className="px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-900/20 transform hover:-translate-y-1">
              Khám phá Blog
            </Link>
            <a href={PROFILE.socials.github} target="_blank" className="px-8 py-4 bg-slate-900 text-slate-300 border border-slate-800 rounded-2xl font-bold hover:bg-slate-800 transition-all transform hover:-translate-y-1">
              GitHub
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <img 
            src={PROFILE.avatar} 
            alt={PROFILE.name} 
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
          <p className="relative text-sm md:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500 text-center italic">
        “Chậm nhưng chắc, vững từ nền tảng”
</p>
        </div>
      </section>

      {/* GitHub Projects */}
      <section className="space-y-10 animate-fade-in-up [animation-delay:200ms]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              Dự án mã nguồn mở
            </h2>
            <p className="text-slate-400">Các công cụ và đồ án học phần về Network Programming.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map(project => (
            <a 
              key={project.id} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl hover:border-purple-500/50 hover:bg-slate-900 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-purple-900/30 transition-colors">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors tracking-tight">{project.name}</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center gap-6 mt-auto pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${project.language === 'Java' ? 'bg-orange-500' : 'bg-yellow-400'}`}></span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{project.language}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  {project.stars}
                </div>
                <div className="ml-auto text-[10px] text-slate-600 uppercase font-bold tracking-widest">
                  Updated {project.updatedAt}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="space-y-12 animate-fade-in-up [animation-delay:400ms]">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
               <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
               Bài viết tiêu biểu
            </h2>
            <p className="text-slate-400">Kiến thức chuyên sâu về Java & JS.</p>
          </div>
          <Link to="/blog" className="text-purple-400 font-bold hover:text-purple-300 transition-colors flex items-center gap-2 group">
            Tất cả bài viết 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map(post => (
            <Link to={`/post/${post.id}`} key={post.id} className="group block space-y-5">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[10px] font-bold text-purple-500 uppercase tracking-[0.2em]">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                  <span className="text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors leading-snug">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Skills / Tech Stack Section */}
      <section className="relative rounded-[2rem] p-1 md:p-1 overflow-hidden group animate-fade-in-up [animation-delay:600ms]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 rounded-[2rem] animate-pulse opacity-20"></div>
        <div className="relative bg-slate-950/90 backdrop-blur-3xl rounded-[1.9rem] p-12 md:p-20 text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Tech Stack & Expertise</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Tập trung vào hiệu suất và khả năng mở rộng của hệ thống mạng.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Java", "Spring Boot", "TCP/IP", "WebSockets", "Node.js", "React", "TypeScript", "gRPC", "MQTT"].map(skill => (
              <span key={skill} className="px-6 py-2.5 bg-slate-900 text-slate-300 rounded-xl text-sm font-semibold border border-slate-800 hover:border-purple-500/50 hover:text-white transition-all">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
