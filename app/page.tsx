export default function Home() {
  const projects = [
    { name: "Cajal", url: "#" },
    { name: "Gautama", url: "#" },
    { name: "DrugUI", url: "#" },
    { name: "Morrison", url: "#" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative">
      {/* Grid background pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gray-200 dark:text-gray-800"
                opacity="0.3"
              />
            </pattern>
            <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--background)" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="var(--background)" stopOpacity="1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#fade)" />
        </svg>

        {/* Subtle geometric shapes and lines */}
        {/* Vertical lines */}
        <div className="absolute top-[15%] right-[20%] w-px h-[40vh] bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-20 rotate-12"></div>
        <div className="absolute top-[10%] left-[25%] w-px h-[35vh] bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-15 -rotate-6"></div>
        <div className="absolute bottom-[15%] right-[40%] w-px h-[30vh] bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-25"></div>

        {/* Horizontal lines */}
        <div className="absolute bottom-[20%] left-[15%] w-[30vw] h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-20"></div>
        <div className="absolute top-[30%] right-[10%] w-[25vw] h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-15"></div>
        <div className="absolute top-[60%] left-[20%] w-[20vw] h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-20 rotate-3"></div>

        {/* Diagonal lines */}
        <div className="absolute top-[20%] left-[30%] w-[15vw] h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-15 rotate-45"></div>
        <div className="absolute bottom-[30%] right-[25%] w-[18vw] h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-20 -rotate-45"></div>

        {/* Small geometric shapes */}
        <div className="absolute top-[40%] left-[10%] w-2 h-2 border border-gray-300 dark:border-gray-700 opacity-30 rotate-45"></div>
        <div className="absolute top-[25%] right-[35%] w-3 h-3 border border-gray-300 dark:border-gray-700 opacity-20"></div>
        <div className="absolute bottom-[35%] left-[35%] w-2 h-2 border border-gray-300 dark:border-gray-700 opacity-25"></div>
        <div className="absolute top-[55%] right-[15%] w-4 h-4 border border-gray-300 dark:border-gray-700 opacity-15 rotate-12"></div>

        {/* Circles */}
        <div className="absolute top-[70%] right-[30%] w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 opacity-30"></div>
        <div className="absolute top-[18%] left-[45%] w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700 opacity-25"></div>
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
