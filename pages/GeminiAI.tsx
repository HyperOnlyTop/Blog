
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const GeminiAI: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setResponse(null);
    try {
      const explanation = await geminiService.explainTopic(topic);
      setResponse(explanation);
    } catch (error) {
      setResponse("Có lỗi xảy ra trong quá trình xử lý.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-16 space-y-12 animate-fade-in-up">
      <header className="text-center space-y-6">
        <div className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[10px] font-black rounded-full uppercase tracking-[0.2em] mb-2">
          Intelligence Engine
        </div>
        <h1 className="text-5xl font-extrabold text-white tracking-tight">Trợ lý AI chuyên gia</h1>
        <p className="text-lg text-slate-400">
          Giải đáp các vấn đề về Network Protocol, Socket, và Backend Logic.
        </p>
      </header>

      <section className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-purple-600/10 blur-[60px] rounded-full"></div>
        
        <form onSubmit={handleAsk} className="space-y-6 relative z-10">
          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-300 ml-1">Nhập chủ đề cần giải thích</label>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="VD: Quá trình bắt tay TCP 3 bước là gì?"
                className="flex-1 bg-slate-950 border border-slate-800 text-slate-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
              />
              <button 
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-900/30 whitespace-nowrap"
              >
                {loading ? "Đang xử lý..." : "Gửi yêu cầu"}
              </button>
            </div>
          </div>
        </form>

        {response && (
          <div className="bg-slate-950/50 p-8 rounded-3xl border border-purple-500/20 animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
            <h3 className="text-purple-400 font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-3">
              <span className="p-1.5 bg-purple-500/20 rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              AI Response
            </h3>
            <div className="text-slate-300 leading-relaxed whitespace-pre-wrap text-lg">
              {response}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-4 relative z-10">
          <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest w-full mb-2 ml-1">Gợi ý chủ đề:</span>
          {["HTTP/3 vs HTTP/2", "Java NIO", "Event Loop", "TLS 1.3"].map(example => (
            <button 
              key={example}
              onClick={() => setTopic(example)}
              className="px-4 py-2 bg-slate-950 text-slate-500 text-xs font-bold rounded-xl hover:text-purple-400 hover:border-purple-500/30 transition-all border border-slate-800"
            >
              {example}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GeminiAI;
