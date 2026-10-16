type Props = { className?: string }

/** Stylised operations dashboard used in the Business Solutions section. */
export function DashboardPanel({ className = 'w-full' }: Props) {
  return (
    <svg
      viewBox="0 0 640 420"
      className={className}
      role="img"
      aria-label="Illustration of a business dashboard showing billing, inventory and reports panels"
    >
      <defs>
        <linearGradient id="dash-screen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FBFD" />
          <stop offset="100%" stopColor="#E7EFF5" />
        </linearGradient>
        <linearGradient id="dash-bar" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#176B8A" />
          <stop offset="100%" stopColor="#4FB0DA" />
        </linearGradient>
        <linearGradient id="dash-lime" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#9CBA1F" />
          <stop offset="100%" stopColor="#CBEB57" />
        </linearGradient>
      </defs>

      <rect x="14" y="10" width="612" height="366" rx="16" fill="#0D3150" />
      <rect x="24" y="20" width="592" height="336" rx="10" fill="url(#dash-screen)" />
      <rect x="0" y="376" width="640" height="16" rx="8" fill="#123F62" />
      <rect x="264" y="376" width="112" height="8" rx="4" fill="#0A2A45" />

      <rect x="24" y="20" width="120" height="336" rx="10" fill="#0D3150" />
      <g fill="#3E7FA5">
        <rect x="42" y="46" width="84" height="8" rx="4" />
        <rect x="42" y="86" width="70" height="7" rx="3.5" />
        <rect x="42" y="110" width="78" height="7" rx="3.5" />
        <rect x="42" y="134" width="62" height="7" rx="3.5" />
        <rect x="42" y="158" width="74" height="7" rx="3.5" />
      </g>
      <rect x="34" y="76" width="100" height="24" rx="6" fill="#176B8A" opacity="0.55" />
      <circle cx="52" cy="52" r="0" fill="#B8D932" />

      <g>
        <rect x="164" y="42" width="130" height="58" rx="8" fill="#ffffff" stroke="#DCE4EA" />
        <rect x="180" y="58" width="46" height="7" rx="3.5" fill="#929AA2" />
        <rect x="180" y="74" width="62" height="12" rx="4" fill="#0D3150" />
        <rect x="310" y="42" width="130" height="58" rx="8" fill="#ffffff" stroke="#DCE4EA" />
        <rect x="326" y="58" width="46" height="7" rx="3.5" fill="#929AA2" />
        <rect x="326" y="74" width="54" height="12" rx="4" fill="#176B8A" />
        <rect x="456" y="42" width="130" height="58" rx="8" fill="#ffffff" stroke="#DCE4EA" />
        <rect x="472" y="58" width="46" height="7" rx="3.5" fill="#929AA2" />
        <rect x="472" y="74" width="58" height="12" rx="4" fill="#9CBA1F" />
      </g>

      <g>
        <rect x="164" y="116" width="276" height="150" rx="8" fill="#ffffff" stroke="#DCE4EA" />
        <rect x="180" y="132" width="70" height="7" rx="3.5" fill="#929AA2" />
        <g>
          <rect x="186" y="200" width="22" height="48" rx="4" fill="url(#dash-bar)" />
          <rect x="220" y="176" width="22" height="72" rx="4" fill="url(#dash-bar)" />
          <rect x="254" y="190" width="22" height="58" rx="4" fill="url(#dash-bar)" />
          <rect x="288" y="160" width="22" height="88" rx="4" fill="url(#dash-lime)" />
          <rect x="322" y="196" width="22" height="52" rx="4" fill="url(#dash-bar)" />
          <rect x="356" y="172" width="22" height="76" rx="4" fill="url(#dash-bar)" />
          <rect x="390" y="184" width="22" height="64" rx="4" fill="url(#dash-bar)" />
        </g>
        <path d="M186 190l34-22 34 14 34-30 34 18 34-12 34 8" fill="none" stroke="#0D3150" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      </g>

      <g>
        <rect x="456" y="116" width="130" height="150" rx="8" fill="#ffffff" stroke="#DCE4EA" />
        <rect x="472" y="132" width="60" height="7" rx="3.5" fill="#929AA2" />
        <circle cx="521" cy="196" r="38" fill="none" stroke="#E3EAF0" strokeWidth="14" />
        <circle cx="521" cy="196" r="38" fill="none" stroke="#176B8A" strokeWidth="14" strokeDasharray="150 240" transform="rotate(-90 521 196)" strokeLinecap="round" />
        <circle cx="521" cy="196" r="38" fill="none" stroke="#B8D932" strokeWidth="14" strokeDasharray="52 240" strokeDashoffset="-150" transform="rotate(-90 521 196)" strokeLinecap="round" />
        <rect x="472" y="244" width="98" height="6" rx="3" fill="#DCE4EA" />
      </g>

      <g>
        <rect x="164" y="280" width="422" height="58" rx="8" fill="#ffffff" stroke="#DCE4EA" />
        <g fill="#DCE4EA">
          <rect x="180" y="296" width="120" height="7" rx="3.5" />
          <rect x="180" y="316" width="150" height="7" rx="3.5" />
          <rect x="360" y="296" width="80" height="7" rx="3.5" />
          <rect x="360" y="316" width="60" height="7" rx="3.5" />
          <rect x="470" y="296" width="60" height="7" rx="3.5" />
          <rect x="470" y="316" width="46" height="7" rx="3.5" />
        </g>
        <rect x="546" y="296" width="26" height="26" rx="6" fill="#B8D932" />
      </g>
    </svg>
  )
}
