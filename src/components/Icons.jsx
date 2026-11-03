const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  viewBox: '0 0 24 24',
}

export const ArrowDown = ({ size = 18 }) => (
  <svg {...base} width={size} height={size} strokeWidth="2.4"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
)

export const FileDown = ({ size = 18 }) => (
  <svg {...base} width={size} height={size} strokeWidth="2.2">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5" />
    <path d="M12 11v6M9 14l3 3 3-3" />
  </svg>
)

export const Coffee = ({ size = 34 }) => (
  <svg {...base} width={size} height={size} strokeWidth="1.8">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <path d="M7 2v3M11 2v3M15 2v3" />
  </svg>
)

export const Heart = ({ size = 34 }) => (
  <svg {...base} width={size} height={size} strokeWidth="1.8">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8Z" />
  </svg>
)

export const Star = ({ size, color, style }) => (
  <svg className="star" style={style} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6Z" fill={color} />
  </svg>
)
