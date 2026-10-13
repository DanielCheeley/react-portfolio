export default function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`botanical ${className}`}
      viewBox="0 0 180 260"
      fill="none"
      aria-hidden="true"
    >
      <path d="M38 248C63 186 76 114 139 14" />
      <path d="M62 190C15 173 22 128 62 190ZM65 181C108 193 129 158 65 181ZM80 144C36 130 48 95 80 144ZM85 130C132 141 149 99 85 130ZM105 92C62 82 73 45 105 92ZM113 76C151 87 168 50 113 76ZM133 37C111 20 130 4 133 37Z" />
    </svg>
  );
}
