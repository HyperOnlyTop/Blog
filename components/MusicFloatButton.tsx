import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const MUSIC_SRC = '/music.mp3'; // Đặt file nhạc vào public/music.mp3

const MusicFloatButton: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 32,
      left: 32,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      borderRadius: 999,
      boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
      padding: '8px 24px 8px 8px',
      minWidth: 180,
      cursor: 'pointer',
      gap: 12,
    }} onClick={togglePlay}>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: '#5B4DF7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(91,77,247,0.2)',
      }}>
        {playing ? <FaPause color="#fff" size={20} /> : <FaPlay color="#fff" size={20} />}
      </div>
      <div style={{
        fontWeight: 600,
        color: '#5B4DF7',
        letterSpacing: 1,
        fontSize: 16,
      }}>
        GET INSPIRED
      </div>
      <audio ref={audioRef} src={MUSIC_SRC} autoPlay loop />
    </div>
  );
};

export default MusicFloatButton;
