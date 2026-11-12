import React from 'react';

export type Platform = 'youtube' | 'tiktok' | 'instagram';

export const PLATFORMS: { id: Platform; label: string }[] = [
  { id: 'youtube', label: 'YouTube' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'instagram', label: 'Instagram' },
];

export const platformLabel = (p?: Platform) => PLATFORMS.find(x => x.id === p)?.label || 'YouTube';

/** Ícone simplificado da plataforma (SVG inline, funciona offline e nos dois temas). */
export function PlatformIcon({ platform = 'youtube', size = 16 }: { platform?: Platform; size?: number }) {
  const gid = 'ig' + React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const base = { width: size, height: size, viewBox: '0 0 24 24', role: 'img', 'aria-label': platformLabel(platform), className: 'platform-icon', focusable: 'false' } as const;
  if (platform === 'tiktok') {
    const note = 'M13.6 5.2v9.3a3 3 0 1 1-3-3M13.6 5.2c.3 2.3 1.9 3.9 4.2 4.1';
    return (
      <svg {...base}>
        <rect width="24" height="24" rx="6.5" fill="#0b0b0f" />
        <g fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d={note} stroke="#25f4ee" transform="translate(-.8 -.5)" />
          <path d={note} stroke="#fe2c55" transform="translate(.8 .6)" />
          <path d={note} stroke="#fff" />
        </g>
      </svg>
    );
  }
  if (platform === 'instagram') {
    return (
      <svg {...base}>
        <defs>
          <linearGradient id={gid} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#feda75" />
            <stop offset=".35" stopColor="#fa7e1e" />
            <stop offset=".65" stopColor="#d62976" />
            <stop offset="1" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6.5" fill={`url(#${gid})`} />
        <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="16.4" cy="7.7" r="1" fill="#fff" />
      </svg>
    );
  }
  return (
    <svg {...base}>
      <rect x="1" y="4.5" width="22" height="15" rx="4.6" fill="#ff0033" />
      <path d="M10 8.9v6.2l5.4-3.1z" fill="#fff" />
    </svg>
  );
}

/** Nome de conta sempre acompanhado do ícone da plataforma. */
export function AccountName({ name, platform }: { name: string; platform?: Platform }) {
  return (
    <span className="acct" title={`${name} · ${platformLabel(platform)}`}>
      <PlatformIcon platform={platform} />
      <span className="acct-name">{name}</span>
    </span>
  );
}
