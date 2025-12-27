
import React, { useState } from 'react';
import { PROFILE, SKILLS, CERTIFICATES } from '../constants';

const About: React.FC = () => {
  const skillCategories = ['Language', 'Framework', 'Network', 'Tool'];

  const [modalContent, setModalContent] = useState<{type: 'img'|'pdf', url: string}|null>(null);
  const closeModal = () => setModalContent(null);
  return (
    <div className="space-y-24 py-16 animate-fade-in-up">
      {/* Bio Section */}
      <section className="max-w-3xl mx-auto text-center space-y-8">
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-40"></div>
          <img 
            src={PROFILE.avatar} 
            alt={PROFILE.name} 
            className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-slate-900 shadow-2xl"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Kỹ năng & Bằng cấp</h1>
          <p className="text-xl text-purple-400 font-bold uppercase tracking-widest">{PROFILE.name}</p>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {PROFILE.bio}
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight flex items-center justify-center gap-3">
             <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
             Kỹ năng chuyên môn
             <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
          </h2>
          <p className="text-slate-500">Tập hợp các công nghệ mình đã sử dụng và thành thạo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map(category => (
            <div key={category} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 space-y-6 hover:border-purple-500/30 transition-colors">
              <h3 className="text-purple-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-4 h-1 bg-purple-500 rounded-full"></span>
                {category}s
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-600 rounded-full transition-all duration-1000"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Certificates Section */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight flex items-center justify-center gap-3">
             <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
             Bằng cấp & Chứng chỉ
             <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
          </h2>
          <p className="text-slate-500">Được cấp bởi Cisco Networking Academy & JS Institute.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES.map((cert, idx) => (
            <div 
              key={cert.title} 
              className="group bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div
                className="aspect-[16/10] overflow-hidden relative cursor-pointer"
                onClick={() => {
                  if (cert.fullPdfUrl) setModalContent({type: 'pdf', url: cert.fullPdfUrl});
                  else setModalContent({type: 'img', url: cert.fullImageUrl || cert.imageUrl});
                }}
              >
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest rounded-md">
                    Verified
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium">
                    {cert.issuer}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Issued: {cert.date}</span>
                  {cert.link && (
                    <a href={cert.link} className="text-purple-400 hover:text-purple-300 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {modalContent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeModal}>
            {modalContent.type === 'img' ? (
              <img src={modalContent.url} alt="Certificate" className="max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl border-4 border-white" />
            ) : (
              <iframe src={modalContent.url} title="Certificate PDF" className="max-w-3xl w-[90vw] h-[90vh] bg-white rounded-2xl shadow-2xl border-4 border-white" />
            )}
            <button onClick={closeModal} className="absolute top-8 right-8 text-white text-3xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80">&times;</button>
          </div>
        )}
      </section>

      {/* Education Info */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
          <div className="p-5 bg-purple-600/10 rounded-3xl border border-purple-500/20 text-purple-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">Học vấn hiện tại</h3>
            <p className="text-slate-300 text-lg">{PROFILE.education.school}</p>
            <p className="text-purple-400 font-bold">{PROFILE.education.major}</p>
            <div className="inline-block mt-4 px-4 py-1.5 bg-slate-950/50 border border-slate-800 rounded-xl text-slate-500 text-xs font-black uppercase tracking-widest">
              Niên khóa: {PROFILE.education.period}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
