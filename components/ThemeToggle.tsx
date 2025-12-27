import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

interface ThemeToggleProps {
  onToggle: () => void;
  theme: 'dark' | 'light';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggle, theme }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-[1100] flex items-center gap-2 px-3 py-2 rounded-full shadow-lg font-semibold transition-all duration-300"
      style={{
        background: theme === 'dark' ? '#312e81' : '#e0e7ef',
        color: theme === 'dark' ? '#fff' : '#0f172a',
        border: 'none',
        boxShadow: theme === 'dark'
          ? '0 0 8px 1px #5B4DF7, 0 2px 8px rgba(0,0,0,0.12)'
          : '0 0 8px 1px #38bdf8, 0 2px 8px rgba(0,0,0,0.08)',
        cursor: 'pointer',
      }}
      aria-label="Đổi giao diện"
      onMouseOver={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.07)';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
      }}
    >
      <span style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: theme === 'dark' ? '#5B4DF7' : '#facc15',
        boxShadow: theme === 'dark' ? '0 0 8px #5B4DF7' : '0 0 8px #facc15',
        marginRight: 6,
        transition: 'background 0.3s',
      }}>
        <FaLightbulb color={theme === 'dark' ? '#fffde4' : '#fff'} size={18} />
      </span>
      <span style={{ fontWeight: 600, fontSize: 13, letterSpacing: 1 }}>{theme === 'dark' ? 'Sáng' : 'Tối'}</span>
    </button>
  );
};

export default ThemeToggle;
