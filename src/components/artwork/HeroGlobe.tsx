type Props = { className?: string }

/**
 * Globe-and-orbit hero artwork drawn to match the brand mark. Built as inline
 * SVG so it stays crisp at every breakpoint and carries no baked-in text.
 */
export function HeroGlobe({ className = 'w-full' }: Props) {
  return (
    <svg
      viewBox="0 0 560 520"
      className={className}
      role="img"
      aria-label="Illustration of a glowing globe circled by orbiting software panels"
    >
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#2E9BC9" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#12507A" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#071F35" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-globe" x1="15%" y1="5%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#4FC3E8" />
          <stop offset="45%" stopColor="#1C7FB0" />
          <stop offset="100%" stopColor="#0B3457" />
        </linearGradient>
        <linearGradient id="hero-land" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BFE9F7" />
          <stop offset="100%" stopColor="#63B9DC" />
        </linearGradient>
        <linearGradient id="hero-lime" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CBEB57" />
          <stop offset="100%" stopColor="#8FB318" />
        </linearGradient>
        <linearGradient id="hero-panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B5C86" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0C3355" stopOpacity="0.95" />
        </linearGradient>
        <clipPath id="hero-globe-clip">
          <circle cx="286" cy="252" r="118" />
        </clipPath>
      </defs>

      <circle cx="286" cy="252" r="250" fill="url(#hero-glow)" />

      <g fill="none" strokeLinecap="round">
        <ellipse cx="286" cy="252" rx="228" ry="96" transform="rotate(-22 286 252)" stroke="#2E86B8" strokeWidth="2.5" opacity="0.75" />
        <ellipse cx="286" cy="252" rx="228" ry="96" transform="rotate(26 286 252)" stroke="#3FA9D6" strokeWidth="2" opacity="0.5" strokeDasharray="14 12" />
        <ellipse cx="286" cy="252" rx="176" ry="176" stroke="url(#hero-lime)" strokeWidth="1.5" opacity="0.35" strokeDasharray="4 14" />
      </g>

      <circle cx="286" cy="252" r="118" fill="url(#hero-globe)" />
      <g clipPath="url(#hero-globe-clip)" opacity="0.9">
        <g fill="none" stroke="#9FDDF4" strokeWidth="1" opacity="0.35">
          <ellipse cx="286" cy="252" rx="118" ry="38" />
          <ellipse cx="286" cy="252" rx="118" ry="78" />
          <ellipse cx="286" cy="252" rx="38" ry="118" />
          <ellipse cx="286" cy="252" rx="78" ry="118" />
          <path d="M168 252h236M286 134v236" />
        </g>
        <g fill="url(#hero-land)">
          <path d="M212 178c18-8 34 2 50-2s26 12 18 24-22 10-32 18-8 22-22 24-24-10-30-24 2-34 16-40z" opacity="0.9" />
          <path d="M300 208c16-4 34 4 40 18s-2 26 4 38-16 22-28 14-14-22-22-32-8-34 6-38z" opacity="0.82" />
          <path d="M228 296c14-6 26 4 34 14s4 26-10 30-28-6-32-18 0-20 8-26z" opacity="0.75" />
          <path d="M330 300c12 0 22 10 20 20s-14 14-24 10-14-14-10-22 8-8 14-8z" opacity="0.6" />
        </g>
        <circle cx="286" cy="252" r="118" fill="none" stroke="#8FD8F2" strokeWidth="1.5" opacity="0.5" />
      </g>
      <path d="M286 134a118 118 0 0 1 84 35 118 118 0 0 0-168 168 118 118 0 0 0 84-203z" fill="#ffffff" opacity="0.06" />

      {/* Floating interface panels */}
      <g>
        <rect x="292" y="52" width="140" height="86" rx="12" fill="url(#hero-panel)" stroke="#4FA8D8" strokeWidth="1.5" />
        <g fill="#7FE0A0">
          <rect x="312" y="98" width="14" height="24" rx="3" />
          <rect x="334" y="84" width="14" height="38" rx="3" />
          <rect x="356" y="92" width="14" height="30" rx="3" />
          <rect x="378" y="72" width="14" height="50" rx="3" fill="url(#hero-lime)" />
        </g>
        <path d="M312 82l22-14 22 10 24-18" fill="none" stroke="#BFE9F7" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g>
        <rect x="60" y="120" width="126" height="76" rx="12" fill="url(#hero-panel)" stroke="#4FA8D8" strokeWidth="1.5" />
        <g fill="none" stroke="#8FD8F2" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M112 146l-14 14 14 14" />
          <path d="M144 146l14 14-14 14" />
          <path d="M132 142l-8 36" />
        </g>
        <rect x="76" y="136" width="18" height="4" rx="2" fill="#5C93B8" />
        <rect x="76" y="146" width="12" height="4" rx="2" fill="#5C93B8" />
      </g>

      <g>
        <rect x="404" y="196" width="128" height="72" rx="12" fill="url(#hero-panel)" stroke="#4FA8D8" strokeWidth="1.5" />
        <path d="M440 236a14 14 0 0 1 27-4 11 11 0 0 1 3 21h-28a9 9 0 0 1-2-17z" fill="#BFE9F7" opacity="0.9" />
        <rect x="486" y="216" width="30" height="5" rx="2.5" fill="url(#hero-lime)" />
        <rect x="486" y="228" width="22" height="5" rx="2.5" fill="#5C93B8" />
        <rect x="486" y="240" width="26" height="5" rx="2.5" fill="#5C93B8" />
      </g>

      <g>
        <rect x="386" y="330" width="132" height="80" rx="12" fill="url(#hero-panel)" stroke="#4FA8D8" strokeWidth="1.5" />
        <rect x="404" y="350" width="46" height="40" rx="8" fill="#123F62" stroke="#4FA8D8" />
        <path d="M427 380v-22m-8 8 8-8 8 8" fill="none" stroke="url(#hero-lime)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="462" y="352" width="42" height="5" rx="2.5" fill="#8FD8F2" />
        <rect x="462" y="366" width="34" height="5" rx="2.5" fill="#5C93B8" />
        <rect x="462" y="380" width="40" height="5" rx="2.5" fill="#5C93B8" />
      </g>

      <g>
        <rect x="66" y="300" width="122" height="78" rx="12" fill="url(#hero-panel)" stroke="#4FA8D8" strokeWidth="1.5" />
        <g fill="none" stroke="#BFE9F7" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="127" cy="339" r="12" />
          <path d="M127 318v8M127 352v8M106 339h8M140 339h8M112 324l6 6M136 348l6 6M142 324l-6 6M118 348l-6 6" />
        </g>
      </g>

      <g opacity="0.9">
        <circle cx="196" cy="96" r="5" fill="url(#hero-lime)" />
        <circle cx="470" cy="150" r="4" fill="#8FD8F2" />
        <circle cx="128" cy="420" r="4.5" fill="#8FD8F2" />
        <circle cx="330" cy="452" r="5" fill="url(#hero-lime)" />
      </g>
    </svg>
  )
}
