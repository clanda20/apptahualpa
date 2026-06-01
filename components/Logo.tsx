export function ApptahualpaLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark - Inspired by Inca stepped architecture + Inti (Sun) */}
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer stepped frame (representing terraces) */}
        <path
          d="M3 12 L3 30 L12 30 L12 39 L30 39 L30 30 L39 30 L39 12 L30 12 L30 3 L12 3 L12 12 Z"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />
        
        {/* Inner sun / Inti symbol */}
        <circle cx="21" cy="21" r="7.5" fill="currentColor" />
        
        {/* Radiating steps / rays */}
        <path
          d="M21 8 L21 13.5 M21 28.5 L21 34 M8 21 L13.5 21 M28.5 21 L34 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11.5 11.5 L15.2 15.2 M26.8 15.2 L30.5 11.5 M11.5 30.5 L15.2 26.8 M26.8 26.8 L30.5 30.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-semibold text-2xl tracking-[-0.02em] text-[#3F2E1E]">
          Apptahualpa
        </span>
        <span className="text-[9px] tracking-[0.2em] text-[#C45C3B] font-medium -mt-0.5">
          ANDEAN DIGITAL HERITAGE
        </span>
      </div>
    </div>
  );
}

// Smaller version for footer / tight spaces
export function ApptahualpaLogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12 L3 30 L12 30 L12 39 L30 39 L30 30 L39 30 L39 12 L30 12 L30 3 L12 3 L12 12 Z"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="21" r="7.5" fill="currentColor" />
      <path
        d="M21 8 L21 13.5 M21 28.5 L21 34 M8 21 L13.5 21 M28.5 21 L34 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
