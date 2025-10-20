export default function Home() {
  const projects = [
    { name: "Cajal", url: "#" },
    { name: "Gautama", url: "#" },
    { name: "DrugUI", url: "#" },
    { name: "Morrison", url: "#" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative">
      {/* Abstract Math-Inspired Geometric Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Fine grid pattern */}
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gray-300 dark:text-gray-700" opacity="0.5"/>
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)"/>
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-gray-400 dark:text-gray-600" opacity="0.4"/>
            </pattern>
          </defs>

          {/* Grid background */}
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Abstract mathematical curves - Bezier curves resembling topology/manifolds */}
          <path d="M 100 200 Q 300 100, 500 300 T 900 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-400 dark:text-gray-600"
                opacity="0.5"/>

          <path d="M 200 600 Q 400 500, 600 650 T 1000 600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-400 dark:text-gray-600"
                opacity="0.4"/>

          {/* Sine wave-like curves */}
          <path d="M 0 400 Q 100 350, 200 400 T 400 400 T 600 400 T 800 400 T 1000 400 T 1200 400 T 1400 400 T 1600 400 T 1800 400 T 2000 400"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-gray-400 dark:text-gray-600"
                opacity="0.35"/>

          {/* Geometric construction lines - like mathematical proofs */}
          <line x1="10%" y1="20%" x2="30%" y2="60%" stroke="currentColor" strokeWidth="0.8" className="text-gray-400 dark:text-gray-600" opacity="0.4"/>
          <line x1="30%" y1="60%" x2="50%" y2="30%" stroke="currentColor" strokeWidth="0.8" className="text-gray-400 dark:text-gray-600" opacity="0.4"/>
          <line x1="10%" y1="20%" x2="50%" y2="30%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" className="text-gray-400 dark:text-gray-600" opacity="0.3"/>

          <line x1="70%" y1="25%" x2="85%" y2="70%" stroke="currentColor" strokeWidth="0.8" className="text-gray-400 dark:text-gray-600" opacity="0.4"/>
          <line x1="85%" y1="70%" x2="95%" y2="40%" stroke="currentColor" strokeWidth="0.8" className="text-gray-400 dark:text-gray-600" opacity="0.4"/>
          <line x1="70%" y1="25%" x2="95%" y2="40%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" className="text-gray-400 dark:text-gray-600" opacity="0.3"/>

          {/* Circles - like geometric constructions */}
          <circle cx="20%" cy="45%" r="60" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-gray-400 dark:text-gray-600" opacity="0.35"/>
          <circle cx="80%" cy="55%" r="80" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-gray-400 dark:text-gray-600" opacity="0.3"/>
          <circle cx="45%" cy="75%" r="50" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-gray-400 dark:text-gray-600" opacity="0.35"/>

          {/* Small dots at intersections */}
          <circle cx="30%" cy="60%" r="3" fill="currentColor" className="text-gray-500 dark:text-gray-500" opacity="0.5"/>
          <circle cx="85%" cy="70%" r="3" fill="currentColor" className="text-gray-500 dark:text-gray-500" opacity="0.5"/>
          <circle cx="20%" cy="45%" r="2" fill="currentColor" className="text-gray-500 dark:text-gray-500" opacity="0.5"/>

          {/* Arcs resembling angles/sectors */}
          <path d="M 150 300 A 40 40 0 0 1 190 340"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-400 dark:text-gray-600"
                opacity="0.4"/>
        </svg>
      </div>

      <div className="max-w-xl w-full">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl mb-3 font-normal tracking-wide">
            Stephen Chien
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 font-light">
            CS @ Cornell
          </p>
        </div>

        {/* Projects Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500 mb-6 font-normal text-center">
            Research & Projects
          </h2>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={project.name} className="text-center">
                <a
                  href={project.url}
                  className="text-base inline-block hover:opacity-60 transition-opacity duration-300 border-b border-transparent hover:border-current"
                >
                  <span className="text-xs text-gray-400 dark:text-gray-600 mr-3 font-light">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
