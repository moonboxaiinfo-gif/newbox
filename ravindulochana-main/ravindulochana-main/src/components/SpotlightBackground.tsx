import { useTheme } from '../context/ThemeContext';

export default function SpotlightBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (isDark) {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-navy-950" />
        {/* Cyan orb — top left */}
        <div
          className="absolute animate-spotlight-1"
          style={{
            top: '5%', left: '10%',
            width: '700px', height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,229,255,0.18) 0%, rgba(0,229,255,0.06) 40%, transparent 70%)',
            filter: 'blur(80px)',
            willChange: 'transform, opacity',
          }}
        />
        {/* Purple orb — middle right */}
        <div
          className="absolute animate-spotlight-2"
          style={{
            top: '30%', right: '5%',
            width: '800px', height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)',
            filter: 'blur(100px)',
            willChange: 'transform, opacity',
          }}
        />
        {/* Cyan-purple blend — bottom center */}
        <div
          className="absolute animate-spotlight-3"
          style={{
            bottom: '0%', left: '30%',
            width: '600px', height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)',
            filter: 'blur(120px)',
            willChange: 'transform, opacity',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(5,8,22,0.7) 100%)' }}
        />
      </div>
    );
  }

  /* Light mode — soft, subtle orbs on white/light-gray */
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0" style={{ backgroundColor: '#f1f5f9' }} />
      {/* Soft cyan wash — top left */}
      <div
        className="absolute animate-spotlight-1"
        style={{
          top: '-5%', left: '5%',
          width: '700px', height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,200,230,0.12) 0%, rgba(0,200,230,0.04) 45%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform, opacity',
        }}
      />
      {/* Soft purple wash — right */}
      <div
        className="absolute animate-spotlight-2"
        style={{
          top: '20%', right: '0%',
          width: '700px', height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(124,58,237,0.03) 45%, transparent 70%)',
          filter: 'blur(90px)',
          willChange: 'transform, opacity',
        }}
      />
      {/* Soft cyan — bottom */}
      <div
        className="absolute animate-spotlight-3"
        style={{
          bottom: '0%', left: '25%',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,185,204,0.09) 0%, transparent 65%)',
          filter: 'blur(100px)',
          willChange: 'transform, opacity',
        }}
      />
    </div>
  );
}
