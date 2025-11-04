export default function About() {
  const navLinks = [
    { name: "About", url: "/about" },
    { name: "Essays", url: "/essays" },
    { name: "LinkedIn", url: "https://linkedin.com/in/stephenlchien", external: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Geometric Background Animations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" className="text-gray-300 dark:text-gray-700" stopOpacity="0.15" />
              <stop offset="100%" stopColor="currentColor" className="text-gray-400 dark:text-gray-600" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Fibonacci Spiral */}
          <g className="fibonacci-spiral" opacity="0.12">
            <path
              d="M 400 400 Q 400 350, 450 350 Q 500 350, 500 400 Q 500 500, 400 500 Q 250 500, 250 350 Q 250 150, 450 150 Q 700 150, 700 400 Q 700 750, 350 750 Q -50 750, -50 300 Q -50 -150, 500 -150"
              fill="none"
              stroke="url(#spiralGradient)"
              strokeWidth="1.5"
            />
          </g>

          {/* Floating Triangles */}
          <g className="floating-triangles" opacity="0.08">
            <polygon points="100,50 120,90 80,90" fill="currentColor" className="text-gray-400 dark:text-gray-600 triangle-1" />
            <polygon points="800,200 830,250 770,250" fill="currentColor" className="text-gray-400 dark:text-gray-600 triangle-2" />
            <polygon points="1200,500 1240,570 1160,570" fill="currentColor" className="text-gray-400 dark:text-gray-600 triangle-3" />
            <polygon points="300,700 325,745 275,745" fill="currentColor" className="text-gray-400 dark:text-gray-600 triangle-4" />
          </g>

          {/* Parametric Curves */}
          <g className="parametric-curves" opacity="0.1">
            <path
              d="M 1000 300 C 1020 280, 1035 265, 1045 250 C 1055 235, 1060 220, 1062 205 C 1064 190, 1063 175, 1060 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-400 dark:text-gray-600 curve-1"
            />
            <path
              d="M 200 600 C 220 585, 235 570, 245 555 C 255 540, 260 525, 262 510 C 264 495, 263 480, 260 465"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-400 dark:text-gray-600 curve-2"
            />
          </g>

          {/* Penrose-inspired Tessellation */}
          <g className="tessellation" opacity="0.06">
            <path d="M 1100 100 L 1150 80 L 1170 120 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600 tile-1" />
            <path d="M 1170 120 L 1150 80 L 1200 100 L 1190 140 Z" fill="currentColor" className="text-gray-300 dark:text-gray-700 tile-2" />
            <path d="M 150 450 L 180 430 L 190 470 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600 tile-3" />
            <path d="M 190 470 L 180 430 L 220 445 L 210 485 Z" fill="currentColor" className="text-gray-300 dark:text-gray-700 tile-4" />
          </g>

          {/* Orbiting Circles */}
          <g className="orbiting-circles" opacity="0.08">
            <circle cx="50%" cy="30%" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400 dark:text-gray-600 orbit-1" />
            <circle cx="70%" cy="60%" r="13" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400 dark:text-gray-600 orbit-2" />
            <circle cx="30%" cy="70%" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400 dark:text-gray-600 orbit-3" />
          </g>
        </svg>
      </div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 h-14">
        <div className="absolute inset-0 bg-background/25 backdrop-blur-sm"></div>
        <nav className="relative w-full h-full flex items-center justify-between px-4 md:px-6">
          <div className="font-serif text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.01em] text-foreground">
            <a href="/">Stephen</a>
          </div>
          <div className="font-mono text-[8px] md:text-[10px] leading-[1.3333] tracking-[-0.015em] flex gap-0.5 md:gap-1 text-foreground">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="group inline-flex items-center px-0.5 md:px-1"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                <span className="inline-block w-[1ch] text-right opacity-0 transition-opacity group-hover:opacity-100">(</span>
                <span>{link.external ? "IN" : link.name}</span>
                <span className="inline-block w-[1ch] text-left opacity-0 transition-opacity group-hover:opacity-100">)</span>
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16 pl-12 pr-6">
        <div className="max-w-[800px]">
          <div className="font-sans text-[12px] leading-[1.6] tracking-[-0.015em] text-foreground">
            Hi, I'm currently a masters student at Cornell. In my free time I like to do research, code, and also play basketball.
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex justify-between items-center px-6 mt-4 relative z-[80] pb-12">
        <div className="font-sans text-muted-foreground text-[9px] leading-[1.538] tracking-[-0.015em]">
          © 2025 Stephen Chien.
        </div>
        <div className="font-sans text-muted-foreground text-[9px] leading-[1.538] tracking-[-0.015em] tabular-nums">
          Building in public.
        </div>
      </footer>
    </div>
  );
}
