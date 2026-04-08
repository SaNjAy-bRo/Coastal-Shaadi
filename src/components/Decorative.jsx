/* Decorative SVG components for Coastal Shaadi */

/* ===== Leaf Corner Decoration (like reference images) ===== */
export function LeafCorner({ className = "", flip = false }) {
  return (
    <div className={`pointer-events-none ${flip ? 'scale-x-[-1]' : ''} ${className}`}>
      <svg width="180" height="220" viewBox="0 0 180 220" fill="none">
        {/* Main branch */}
        <path d="M10 220 Q30 160 50 120 Q70 80 90 50 Q105 30 120 15" stroke="#4a7c59" strokeWidth="2" fill="none"/>
        {/* Leaves */}
        <ellipse cx="45" cy="140" rx="22" ry="10" transform="rotate(-40 45 140)" fill="#6b9e5a" opacity="0.8"/>
        <ellipse cx="55" cy="130" rx="18" ry="8" transform="rotate(-50 55 130)" fill="#8ab87a" opacity="0.7"/>
        <ellipse cx="65" cy="110" rx="20" ry="9" transform="rotate(-30 65 110)" fill="#5a8e4a" opacity="0.9"/>
        <ellipse cx="75" cy="95" rx="16" ry="7" transform="rotate(-55 75 95)" fill="#7aae6a" opacity="0.7"/>
        <ellipse cx="85" cy="75" rx="18" ry="8" transform="rotate(-25 85 75)" fill="#6b9e5a" opacity="0.8"/>
        <ellipse cx="95" cy="55" rx="14" ry="6" transform="rotate(-45 95 55)" fill="#8ab87a" opacity="0.6"/>
        <ellipse cx="105" cy="40" rx="12" ry="5" transform="rotate(-35 105 40)" fill="#5a8e4a" opacity="0.7"/>
        <ellipse cx="115" cy="25" rx="10" ry="4" transform="rotate(-50 115 25)" fill="#7aae6a" opacity="0.5"/>
        {/* Right side leaves */}
        <ellipse cx="35" cy="160" rx="20" ry="9" transform="rotate(30 35 160)" fill="#7aae6a" opacity="0.6"/>
        <ellipse cx="60" cy="120" rx="17" ry="7" transform="rotate(40 60 120)" fill="#5a8e4a" opacity="0.7"/>
        <ellipse cx="80" cy="85" rx="15" ry="6" transform="rotate(35 80 85)" fill="#8ab87a" opacity="0.5"/>
        <ellipse cx="100" cy="50" rx="13" ry="5" transform="rotate(45 100 50)" fill="#6b9e5a" opacity="0.6"/>
        {/* Small berries */}
        <circle cx="48" cy="145" r="3" fill="#c0392b" opacity="0.7"/>
        <circle cx="70" cy="105" r="2.5" fill="#c0392b" opacity="0.6"/>
        <circle cx="90" cy="65" r="2" fill="#c0392b" opacity="0.5"/>
      </svg>
    </div>
  );
}

/* ===== Grass Border ===== */
export function GrassBorder({ className = "", flip = false }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
        {[...Array(80)].map((_, i) => {
          const x = i * 18 + Math.random() * 8;
          const h = 20 + Math.random() * 35;
          const lean = (Math.random() - 0.5) * 15;
          return (
            <path
              key={i}
              d={`M${x} 60 Q${x + lean} ${60 - h * 0.6} ${x + lean * 0.5} ${60 - h}`}
              stroke={`hsl(${110 + Math.random() * 30}, ${50 + Math.random() * 20}%, ${35 + Math.random() * 20}%)`}
              strokeWidth={1.5 + Math.random()}
              fill="none"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}

/* ===== Wave Border ===== */
export function WaveBorder({ className = "", flip = false, color = "#FAF9F6" }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[50px] md:h-[80px]">
        <path d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,40 1440,50 L1440,120 L0,120 Z" fill={color}/>
      </svg>
    </div>
  );
}

/* ===== Mandala Pattern ===== */
export function MandalaPattern({ className = "", size = 200, opacity = 0.15 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 200 200" fill="none" opacity={opacity}>
      <circle cx="100" cy="100" r="95" stroke="#D4AF37" strokeWidth="1"/>
      <circle cx="100" cy="100" r="75" stroke="#D4AF37" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="55" stroke="#D4AF37" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="35" stroke="#D4AF37" strokeWidth="0.5"/>
      {[...Array(12)].map((_, i) => (
        <g key={i} transform={`rotate(${i * 30} 100 100)`}>
          <ellipse cx="100" cy="30" rx="8" ry="20" stroke="#D4AF37" strokeWidth="0.5" fill="none"/>
          <line x1="100" y1="5" x2="100" y2="195" stroke="#D4AF37" strokeWidth="0.3"/>
        </g>
      ))}
      {[...Array(8)].map((_, i) => (
        <g key={`p-${i}`} transform={`rotate(${i * 45} 100 100)`}>
          <path d="M100 60 Q115 80 100 100 Q85 80 100 60" stroke="#800000" strokeWidth="0.5" fill="none"/>
        </g>
      ))}
    </svg>
  );
}

/* ===== Cross Pattern ===== */
export function CrossPattern({ className = "", size = 160, opacity = 0.06 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 160 160" fill="none" opacity={opacity}>
      <rect x="65" y="10" width="30" height="140" rx="4" stroke="#D4AF37" strokeWidth="1"/>
      <rect x="20" y="50" width="120" height="30" rx="4" stroke="#D4AF37" strokeWidth="1"/>
      <circle cx="80" cy="65" r="20" stroke="#D4AF37" strokeWidth="0.5"/>
    </svg>
  );
}

/* ===== Diamond Frame for Images ===== */
export function DiamondFrame({ image, alt = "", size = 140, borderColor = "#D4AF37", className = "" }) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      {/* Outer diamond border */}
      <div
        className="absolute inset-0 rotate-45 border-2 rounded-md"
        style={{ borderColor }}
      />
      {/* Inner diamond with image */}
      <div className="absolute inset-2 rotate-45 overflow-hidden rounded-md shadow-lg">
        <img
          src={image}
          alt={alt}
          className="-rotate-45 scale-[1.5] w-full h-full object-cover"
        />
      </div>
      {/* Corner dots */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: borderColor }}/>
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: borderColor }}/>
      <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#800000' }}/>
      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#800000' }}/>
    </div>
  );
}

/* ===== Ornament Divider ===== */
export function OrnamentDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-2 ${className}`}>
      <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-accent"/>
      <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
        <path d="M16 2 C20 2 22 6 22 10 C22 14 20 18 16 18 C12 18 10 14 10 10 C10 6 12 2 16 2Z" stroke="#D4AF37" strokeWidth="1" fill="none"/>
        <circle cx="16" cy="10" r="2" fill="#D4AF37"/>
        <path d="M4 10 L10 10" stroke="#D4AF37" strokeWidth="0.5"/>
        <path d="M22 10 L28 10" stroke="#D4AF37" strokeWidth="0.5"/>
        <circle cx="4" cy="10" r="1.5" fill="#800000" opacity="0.5"/>
        <circle cx="28" cy="10" r="1.5" fill="#800000" opacity="0.5"/>
      </svg>
      <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-accent"/>
    </div>
  );
}

/* ===== Floating Decorative Particles ===== */
export function FloatingDots({ count = 20 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-accent/20 animate-pulse"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ===== Side Leaf Decoration (for sections) ===== */
export function SideLeaf({ side = "left", className = "" }) {
  const isLeft = side === "left";
  return (
    <div className={`absolute ${isLeft ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block ${className}`}>
      <div className={isLeft ? '' : 'scale-x-[-1]'}>
        <svg width="80" height="300" viewBox="0 0 80 300" fill="none" opacity="0.3">
          <path d="M5 300 Q15 250 10 200 Q5 150 15 100 Q25 50 20 0" stroke="#4a7c59" strokeWidth="2" fill="none"/>
          {[0, 40, 80, 120, 160, 200, 240].map((y, i) => (
            <g key={i}>
              <ellipse cx="25" cy={280 - y} rx="25" ry="10" transform={`rotate(${-20 - i * 5} 25 ${280 - y})`} fill={`hsl(${120 + i * 5}, 40%, ${40 + i * 3}%)`}/>
              <ellipse cx="15" cy={260 - y} rx="20" ry="8" transform={`rotate(${20 + i * 3} 15 ${260 - y})`} fill={`hsl(${115 + i * 5}, 45%, ${35 + i * 4}%)`}/>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ===== Flower Bouquet (romantic deco) ===== */
export function FlowerBouquet({ className = "", size = 120, opacity = 0.35 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 120 120" fill="none" opacity={opacity}>
      {/* Center flower */}
      {[0, 60, 120, 180, 240, 300].map((r, i) => (
        <ellipse key={i} cx="60" cy="45" rx="10" ry="18" transform={`rotate(${r} 60 45)`} fill={i % 2 === 0 ? '#e8a0bf' : '#f0c0d4'} />
      ))}
      <circle cx="60" cy="45" r="7" fill="#D4AF37"/>
      {/* Left flower */}
      {[0, 72, 144, 216, 288].map((r, i) => (
        <ellipse key={`l-${i}`} cx="30" cy="55" rx="7" ry="13" transform={`rotate(${r} 30 55)`} fill={i % 2 === 0 ? '#f4a7c1' : '#fcd1df'} />
      ))}
      <circle cx="30" cy="55" r="5" fill="#e8c547"/>
      {/* Right flower */}
      {[0, 72, 144, 216, 288].map((r, i) => (
        <ellipse key={`r-${i}`} cx="90" cy="55" rx="7" ry="13" transform={`rotate(${r} 90 55)`} fill={i % 2 === 0 ? '#d4a0cf' : '#e8c0e4'} />
      ))}
      <circle cx="90" cy="55" r="5" fill="#e8c547"/>
      {/* Stems */}
      <path d="M60 63 Q58 85 55 110" stroke="#4a7c59" strokeWidth="2" fill="none"/>
      <path d="M30 68 Q40 90 55 110" stroke="#4a7c59" strokeWidth="1.5" fill="none"/>
      <path d="M90 68 Q80 90 65 110" stroke="#4a7c59" strokeWidth="1.5" fill="none"/>
      {/* Small leaves on stems */}
      <ellipse cx="48" cy="88" rx="8" ry="4" transform="rotate(-30 48 88)" fill="#6b9e5a" opacity="0.7"/>
      <ellipse cx="72" cy="88" rx="8" ry="4" transform="rotate(30 72 88)" fill="#6b9e5a" opacity="0.7"/>
    </svg>
  );
}

/* ===== Flower Corner (delicate corner accent) ===== */
export function FlowerCorner({ className = "", flip = false }) {
  return (
    <div className={`pointer-events-none ${flip ? 'scale-x-[-1]' : ''} ${className}`}>
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" opacity="0.35">
        {/* Branch */}
        <path d="M0 140 Q30 110 50 80 Q65 55 80 35 Q90 20 100 10" stroke="#4a7c59" strokeWidth="1.5" fill="none"/>
        {/* Flowers along branch */}
        {[0, 72, 144, 216, 288].map((r, i) => (
          <ellipse key={`f1-${i}`} cx="50" cy="80" rx="6" ry="11" transform={`rotate(${r} 50 80)`} fill={i % 2 === 0 ? '#e8a0bf' : '#f0c0d4'}/>
        ))}
        <circle cx="50" cy="80" r="4" fill="#D4AF37"/>
        {[0, 72, 144, 216, 288].map((r, i) => (
          <ellipse key={`f2-${i}`} cx="80" cy="40" rx="5" ry="9" transform={`rotate(${r} 80 40)`} fill={i % 2 === 0 ? '#d4a0cf' : '#e8c0e4'}/>
        ))}
        <circle cx="80" cy="40" r="3.5" fill="#e8c547"/>
        {/* Buds */}
        <ellipse cx="95" cy="18" rx="4" ry="7" transform="rotate(-20 95 18)" fill="#f4a7c1" opacity="0.6"/>
        <ellipse cx="30" cy="110" rx="5" ry="8" transform="rotate(15 30 110)" fill="#e8a0bf" opacity="0.5"/>
        {/* Leaves */}
        <ellipse cx="35" cy="100" rx="12" ry="5" transform="rotate(-35 35 100)" fill="#6b9e5a" opacity="0.6"/>
        <ellipse cx="65" cy="60" rx="10" ry="4" transform="rotate(-40 65 60)" fill="#7aae6a" opacity="0.5"/>
        <ellipse cx="90" cy="28" rx="8" ry="3" transform="rotate(-45 90 28)" fill="#5a8e4a" opacity="0.5"/>
      </svg>
    </div>
  );
}

