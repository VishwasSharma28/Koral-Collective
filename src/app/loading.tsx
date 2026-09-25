export default function Loading() {
  return (
    <main className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#f5ecdd]">
      <div className="relative flex h-[380px] w-full max-w-[620px] flex-col items-center justify-center">

        {/* =========================================
            SMALL BACKGROUND MANDALA
        ========================================== */}

        <div className="pointer-events-none absolute left-1/2 top-[70px] -translate-x-1/2">
          <svg
            viewBox="0 0 400 400"
            className="h-[230px] w-[230px] animate-mandala"
          >
            {/* Outer ring */}
            <circle
              cx="200"
              cy="200"
              r="125"
              fill="none"
              stroke="#c49a4a"
              strokeWidth="0.8"
              opacity="0.18"
            />

            {/* Inner ring */}
            <circle
              cx="200"
              cy="200"
              r="110"
              fill="none"
              stroke="#9b4d32"
              strokeWidth="0.7"
              opacity="0.11"
            />

            {/* Outer petals */}
            {Array.from({ length: 16 }).map((_, i) => (
              <g
                key={`outer-${i}`}
                transform={`rotate(${i * 22.5} 200 200)`}
              >
                <path
                  d="
                    M200 75
                    C220 92 227 114 200 140
                    C173 114 180 92 200 75
                    Z
                  "
                  fill="none"
                  stroke="#b48a52"
                  strokeWidth="1"
                  opacity="0.25"
                />

                {/* Petal detail */}
                <path
                  d="
                    M200 82
                    C200 99 200 118 200 132
                  "
                  fill="none"
                  stroke="#9b4d32"
                  strokeWidth="0.6"
                  opacity="0.16"
                />
              </g>
            ))}

            {/* Inner petals */}
            {Array.from({ length: 16 }).map((_, i) => (
              <g
                key={`inner-${i}`}
                transform={`rotate(${i * 22.5 + 11.25} 200 200)`}
              >
                <path
                  d="
                    M200 112
                    C214 125 216 142 200 158
                    C184 142 186 125 200 112
                    Z
                  "
                  fill="none"
                  stroke="#9b4d32"
                  strokeWidth="0.7"
                  opacity="0.18"
                />
              </g>
            ))}

            {/* Fine center ring */}
            <circle
              cx="200"
              cy="200"
              r="78"
              fill="none"
              stroke="#c49a4a"
              strokeWidth="0.6"
              strokeDasharray="2 7"
              opacity="0.16"
            />

            {/* Decorative dots */}
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * Math.PI) / 8;

              return (
                <circle
                  key={`dot-${i}`}
                  cx={200 + Math.cos(angle) * 125}
                  cy={200 + Math.sin(angle) * 125}
                  r="1.5"
                  fill="#c49a4a"
                  opacity="0.3"
                />
              );
            })}
          </svg>
        </div>

        {/* =========================================
            RATHA TRACK
        ========================================== */}

        <div className="relative z-10 h-[150px] w-[220px]">

          {/* Ratha */}
          <div className="absolute left-0 top-1/2 animate-ratha">
            <img
              src="https://res.cloudinary.com/ev7y5xh0/image/upload/v1789391223/Ratha_details.png"
              alt=""
              aria-hidden="true"
              className="w-[180px] select-none object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(31%) sepia(28%) saturate(1200%) hue-rotate(335deg) brightness(88%) contrast(90%)",
              }}
            />
          </div>

          {/* Loader track */}
          <div className="absolute bottom-[4px] left-1/2 h-[1px] w-[190px] -translate-x-1/2 bg-[#c49a4a]/30" />

          {/* Moving loader segment */}
          <div className="absolute bottom-[4px] left-1/2 h-[2px] w-[30px] -translate-x-1/2 animate-loading-line bg-[#9b4d32]" />
        </div>

        {/* =========================================
            BRAND TEXT
        ========================================== */}

        <div className="relative z-10 mt-2 animate-brand">
          <p className="font-serif text-[16px] tracking-[0.28em] text-[#302820]">
            the koral collective
          </p>
        </div>
      </div>

      <style>{`

        /* =========================================
           MANDALA ROTATION
        ========================================== */

        @keyframes mandalaRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .animate-mandala {
          animation:
            mandalaRotate
            35s
            linear
            infinite;
        }


        /* =========================================
           SLOW RATHA MOVEMENT
           
           Only ~40px of movement.
           The ratha stays within its
           small loading track.
        ========================================== */

        @keyframes rathaTravel {

          0% {
            left: 0;
            transform:
              translateY(-50%)
              rotate(-0.4deg);
          }

          50% {
            left: 40px;
            transform:
              translateY(-50%)
              rotate(0.4deg);
          }

          100% {
            left: 0;
            transform:
              translateY(-50%)
              rotate(-0.4deg);
          }

        }

        .animate-ratha {
  animation:
    rathaTravel
    2.5s
    ease-in-out
    infinite;
}


        /* =========================================
           LOADER MOVEMENT
        ========================================== */

        @keyframes loadingLine {

          0% {
            transform: translateX(-80px);
          }

          50% {
            transform: translateX(80px);
          }

          100% {
            transform: translateX(-80px);
          }

        }

        .animate-loading-line {
          animation:
            loadingLine
            2.5s
            ease-in-out
            infinite;
        }


        /* =========================================
           BRAND FADE
        ========================================== */

        @keyframes brandFade {

          0%,
          100% {
            opacity: 0.55;
          }

          50% {
            opacity: 1;
          }

        }

        .animate-brand {
          animation:
            brandFade
            3.5s
            ease-in-out
            infinite;
        }


        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

          .animate-mandala,
          .animate-ratha,
          .animate-loading-line,
          .animate-brand {
            animation: none;
          }

        }

      `}</style>
    </main>
  );
}