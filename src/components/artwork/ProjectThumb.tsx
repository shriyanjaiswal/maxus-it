import type { Project } from '../../data/portfolio'

type Props = { variant: Project['artwork']; className?: string }

const frame = '#DCE4EA'
const ink = '#0D3150'
const blue = '#176B8A'
const lime = '#B8D932'
const grey = '#929AA2'

/** Placeholder project imagery — replace with approved client screenshots. */
export function ProjectThumb({ variant, className = 'w-full' }: Props) {
  return (
    <svg
      viewBox="0 0 480 300"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${variant === 'corporate' ? 'Corporate website' : variant === 'erp' ? 'ERP and inventory system' : 'Mobile application'} layout sample`}
    >
      <defs>
        <linearGradient id={`thumb-bg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F8FA" />
          <stop offset="100%" stopColor="#DDE9F1" />
        </linearGradient>
        <linearGradient id={`thumb-navy-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14456C" />
          <stop offset="100%" stopColor="#0B2C49" />
        </linearGradient>
      </defs>

      <rect width="480" height="300" fill={`url(#thumb-bg-${variant})`} />

      {variant === 'corporate' && (
        <foreignObject x="0" y="0" width="480" height="300">
          <img
            src="/assets/brand/maxus-corporate-homepage-preview.png"
            alt="Corporate Website Preview"
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </foreignObject>
      )}

      {variant === 'mobile' && (
        <foreignObject x="0" y="0" width="480" height="300">
          <img
            src="/assets/brand/maxus-mobile-ui-showcase.png"
            alt="Mobile App Development Showcase"
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </foreignObject>
      )}

      {variant === 'erp' && (
        <g>
          <rect x="40" y="34" width="400" height="232" rx="10" fill={ink} />
          <rect x="48" y="42" width="384" height="216" rx="6" fill="#fff" />
          <rect x="48" y="42" width="86" height="216" rx="6" fill={`url(#thumb-navy-erp)`} />
          <g fill="#3E7FA5">
            <rect x="62" y="66" width="56" height="7" rx="3.5" />
            <rect x="62" y="94" width="46" height="6" rx="3" />
            <rect x="62" y="112" width="52" height="6" rx="3" />
            <rect x="62" y="130" width="40" height="6" rx="3" />
            <rect x="62" y="148" width="48" height="6" rx="3" />
          </g>
          <rect x="56" y="86" width="70" height="18" rx="4" fill={blue} opacity="0.6" />
          <g>
            <rect x="148" y="58" width="86" height="40" rx="5" fill="#F4F8FB" stroke={frame} />
            <rect x="244" y="58" width="86" height="40" rx="5" fill="#F4F8FB" stroke={frame} />
            <rect x="340" y="58" width="86" height="40" rx="5" fill="#F4F8FB" stroke={frame} />
            <rect x="158" y="70" width="40" height="6" rx="3" fill={grey} />
            <rect x="158" y="82" width="52" height="8" rx="3" fill={blue} />
            <rect x="254" y="70" width="40" height="6" rx="3" fill={grey} />
            <rect x="254" y="82" width="44" height="8" rx="3" fill={lime} />
            <rect x="350" y="70" width="40" height="6" rx="3" fill={grey} />
            <rect x="350" y="82" width="48" height="8" rx="3" fill={ink} />
          </g>
          <rect x="148" y="112" width="278" height="132" rx="5" fill="#fff" stroke={frame} />
          <g fill="#EEF3F7">
            <rect x="160" y="122" width="254" height="14" rx="3" />
          </g>
          <g>
            {[0, 1, 2, 3, 4, 5].map((row) => (
              <g key={row}>
                <rect x="160" y={146 + row * 16} width="90" height="6" rx="3" fill={grey} opacity="0.6" />
                <rect x="262" y={146 + row * 16} width="50" height="6" rx="3" fill={grey} opacity="0.45" />
                <rect x="330" y={146 + row * 16} width="34" height="6" rx="3" fill={row % 2 ? lime : blue} opacity="0.8" />
                <rect x="380" y={146 + row * 16} width="30" height="6" rx="3" fill={grey} opacity="0.4" />
              </g>
            ))}
          </g>
        </g>
      )}

      {variant === 'mobile' && (
        <g>
          <g transform="rotate(-7 180 160)">
            <rect x="120" y="46" width="120" height="220" rx="20" fill={ink} />
            <rect x="128" y="54" width="104" height="204" rx="14" fill="#fff" />
            <rect x="164" y="60" width="32" height="6" rx="3" fill={ink} opacity="0.5" />
            <rect x="138" y="78" width="84" height="46" rx="6" fill={`url(#thumb-navy-mobile)`} />
            <rect x="146" y="90" width="46" height="6" rx="3" fill="#fff" opacity="0.85" />
            <rect x="146" y="102" width="60" height="5" rx="2.5" fill="#8FB8D2" />
            <g fill={blue} opacity="0.8">
              <rect x="138" y="134" width="38" height="38" rx="6" />
              <rect x="184" y="134" width="38" height="38" rx="6" />
            </g>
            <rect x="138" y="182" width="84" height="6" rx="3" fill={grey} opacity="0.6" />
            <rect x="138" y="196" width="66" height="6" rx="3" fill={grey} opacity="0.45" />
            <rect x="138" y="216" width="84" height="22" rx="6" fill={lime} />
          </g>
          <g transform="rotate(6 320 150)">
            <rect x="248" y="34" width="120" height="220" rx="20" fill={ink} />
            <rect x="256" y="42" width="104" height="204" rx="14" fill="#fff" />
            <rect x="292" y="48" width="32" height="6" rx="3" fill={ink} opacity="0.5" />
            <rect x="266" y="66" width="84" height="8" rx="4" fill={grey} opacity="0.6" />
            <circle cx="308" cy="128" r="34" fill="none" stroke="#EEF3F7" strokeWidth="12" />
            <circle
              cx="308"
              cy="128"
              r="34"
              fill="none"
              stroke={blue}
              strokeWidth="12"
              strokeDasharray="120 214"
              transform="rotate(-90 308 128)"
              strokeLinecap="round"
            />
            <circle
              cx="308"
              cy="128"
              r="34"
              fill="none"
              stroke={lime}
              strokeWidth="12"
              strokeDasharray="54 214"
              strokeDashoffset="-120"
              transform="rotate(-90 308 128)"
              strokeLinecap="round"
            />
            <g fill="#EEF3F7" stroke={frame}>
              <rect x="266" y="176" width="84" height="24" rx="5" />
              <rect x="266" y="208" width="84" height="24" rx="5" />
            </g>
            <rect x="274" y="184" width="44" height="7" rx="3.5" fill={grey} />
            <rect x="274" y="216" width="56" height="7" rx="3.5" fill={grey} />
          </g>
        </g>
      )}
    </svg>
  )
}
