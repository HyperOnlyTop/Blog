import React from 'react';
import { PROFILE } from '../constants';
import { FaFacebook, FaInstagram, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const { socials } = PROFILE;
  return (
    <div
      className="max-w-xl mx-auto py-12 px-4"
      style={{
        background: window.localStorage.getItem('theme') === 'light' ? '#f8fafc' : '#18181b',
        color: window.localStorage.getItem('theme') === 'light' ? '#222' : '#f4f4f5',
        borderRadius: 24,
        boxShadow: window.localStorage.getItem('theme') === 'light'
          ? '0 2px 16px #bae6fd'
          : '0 2px 16px #5B4DF7',
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <h1
        className="text-3xl font-bold mb-4 text-center"
        style={{ color: window.localStorage.getItem('theme') === 'light' ? '#222' : '#fff' }}
      >
        Liên hệ với mình
      </h1>
      <p
        className="mb-8 text-center"
        style={{ color: window.localStorage.getItem('theme') === 'light' ? '#444' : '#a3a3a3' }}
      >
        Kết nối qua các mạng xã hội hoặc gửi email trực tiếp.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
        <a
          href={socials.facebook}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center gap-2 p-4 rounded-xl shadow hover:shadow-lg transition-all"
          style={{
            background: window.localStorage.getItem('theme') === 'light' ? '#e0e7ef' : '#312e81',
          }}
        >
          <FaFacebook color={window.localStorage.getItem('theme') === 'light' ? '#2563eb' : '#60a5fa'} size={24} />
          <span style={{ color: window.localStorage.getItem('theme') === 'light' ? '#2563eb' : '#93c5fd', fontWeight: 600, fontSize: 13 }}>Facebook</span>
        </a>
        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center gap-2 p-4 rounded-xl shadow hover:shadow-lg transition-all"
          style={{
            background: window.localStorage.getItem('theme') === 'light' ? '#fce7f3' : '#831843',
          }}
        >
          <FaInstagram color={window.localStorage.getItem('theme') === 'light' ? '#e11d48' : '#f472b6'} size={24} />
          <span style={{ color: window.localStorage.getItem('theme') === 'light' ? '#e11d48' : '#f9a8d4', fontWeight: 600, fontSize: 13 }}>Instagram</span>
        </a>
        <a
          href={socials.github}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center gap-2 p-4 rounded-xl shadow hover:shadow-lg transition-all"
          style={{
            background: window.localStorage.getItem('theme') === 'light' ? '#f3f4f6' : '#1e293b',
          }}
        >
          <FaGithub color={window.localStorage.getItem('theme') === 'light' ? '#222' : '#f4f4f5'} size={24} />
          <span style={{ color: window.localStorage.getItem('theme') === 'light' ? '#222' : '#f4f4f5', fontWeight: 600, fontSize: 13 }}>GitHub</span>
        </a>
      </div>

      <div
        className="rounded-2xl shadow p-6 space-y-4 animate-fade-in"
        style={{
          background: window.localStorage.getItem('theme') === 'light' ? '#fff' : '#23272f',
          color: window.localStorage.getItem('theme') === 'light' ? '#222' : '#f4f4f5',
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        <div className="flex items-center gap-4">
          <FaEnvelope color={window.localStorage.getItem('theme') === 'light' ? '#6366f1' : '#a78bfa'} size={20} />
          <a
            href={`mailto:${socials.email}`}
            className="hover:underline font-medium"
            style={{ color: window.localStorage.getItem('theme') === 'light' ? '#6366f1' : '#a78bfa' }}
          >
            {socials.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaPhoneAlt color={window.localStorage.getItem('theme') === 'light' ? '#6366f1' : '#a78bfa'} size={20} />
          {socials.phone ? (
            <a
              href={`tel:${socials.phone.replace(/\s+/g, '')}`}
              className="hover:underline font-medium"
              style={{ color: window.localStorage.getItem('theme') === 'light' ? '#222' : '#f4f4f5' }}
            >
              {socials.phone}
            </a>
          ) : (
            <span style={{ color: window.localStorage.getItem('theme') === 'light' ? '#888' : '#a3a3a3' }}>Chưa có</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
