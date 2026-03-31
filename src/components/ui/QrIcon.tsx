export function QrIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <rect width="40" height="40" rx="6" fill="#0A0A0A" />
      <rect x="6" y="6" width="12" height="12" rx="2" fill="#C9FF47" />
      <rect x="7" y="7" width="10" height="10" rx="1.5" fill="#0A0A0A" />
      <rect x="9" y="9" width="6" height="6" rx="1" fill="#C9FF47" />
      <rect x="22" y="6" width="12" height="12" rx="2" fill="#C9FF47" />
      <rect x="23" y="7" width="10" height="10" rx="1.5" fill="#0A0A0A" />
      <rect x="25" y="9" width="6" height="6" rx="1" fill="#C9FF47" />
      <rect x="6" y="22" width="12" height="12" rx="2" fill="#C9FF47" />
      <rect x="7" y="23" width="10" height="10" rx="1.5" fill="#0A0A0A" />
      <rect x="9" y="25" width="6" height="6" rx="1" fill="#C9FF47" />
      <rect x="22" y="22" width="4" height="4" rx="1" fill="#C9FF47" />
      <rect x="28" y="22" width="4" height="4" rx="1" fill="#C9FF47" />
      <rect x="22" y="28" width="4" height="4" rx="1" fill="#C9FF47" />
      <rect x="28" y="28" width="4" height="4" rx="1" fill="#C9FF47" />
      <rect x="25" y="25" width="4" height="4" rx="1" fill="#C9FF47" />
    </svg>
  );
}
