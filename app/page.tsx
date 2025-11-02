export default function Home() {
  const creations = [
    { date: "11.01.25", title: "Launched Cajal - neural network visualization tool", url: "#" },
    { date: "10.15.25", title: "Built Gautama meditation tracker", url: "#" },
    { date: "09.20.25", title: "Shipped DrugUI component library", url: "#" },
    { date: "08.12.25", title: "Released Morrison - academic paper organizer", url: "#" },
  ];

  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Essays", url: "#essays" },
    { name: "LinkedIn", url: "https://linkedin.com/in/stephenlchien", icon: true },
  ];

  return (
    <div className="min-h-screen p-8 relative">
      {/* Abstract Math-Inspired Geometric Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Fine grid pattern */}
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gray-300 dark:text-gray-700" opacity="0.3"/>
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)"/>
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-gray-400 dark:text-gray-600" opacity="0.25"/>
            </pattern>
          </defs>

          {/* Grid background - full screen */}
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Abstract mathematical curves - positioned on right side */}
          <path d="M 1000 200 Q 1200 100, 1400 300 T 1800 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-gray-400 dark:text-gray-600"
                opacity="0.3"/>

          <path d="M 900 600 Q 1100 500, 1300 650 T 1700 600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-gray-400 dark:text-gray-600"
                opacity="0.25"/>

          {/* Geometric construction lines - positioned on right half */}
          <line x1="60%" y1="20%" x2="75%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-600" opacity="0.3"/>
          <line x1="75%" y1="50%" x2="85%" y2="25%" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-600" opacity="0.3"/>
          <line x1="60%" y1="20%" x2="85%" y2="25%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4,4" className="text-gray-400 dark:text-gray-600" opacity="0.25"/>

          <line x1="70%" y1="60%" x2="80%" y2="85%" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-600" opacity="0.3"/>
          <line x1="80%" y1="85%" x2="90%" y2="65%" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-600" opacity="0.3"/>
          <line x1="70%" y1="60%" x2="90%" y2="65%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4,4" className="text-gray-400 dark:text-gray-600" opacity="0.25"/>

          {/* Circles - positioned on right side */}
          <circle cx="75%" cy="40%" r="70" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-600" opacity="0.25"/>
          <circle cx="85%" cy="70%" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-600" opacity="0.2"/>

          {/* Small dots at intersections */}
          <circle cx="75%" cy="50%" r="3" fill="currentColor" className="text-gray-500 dark:text-gray-500" opacity="0.3"/>
          <circle cx="80%" cy="85%" r="3" fill="currentColor" className="text-gray-500 dark:text-gray-500" opacity="0.3"/>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 p-6 flex gap-5 text-sm z-10 items-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="hover:opacity-60 transition-opacity duration-200"
            target={link.icon ? "_blank" : undefined}
            rel={link.icon ? "noopener noreferrer" : undefined}
          >
            {link.icon ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            ) : (
              link.name
            )}
          </a>
        ))}
      </nav>

      {/* Main Content Container */}
      <div className="pt-20 pl-12 md:pl-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-xl font-normal">
            Stephen
          </h1>
        </div>

        {/* Timeline */}
        <div className="space-y-4 max-w-3xl">
          {creations.map((creation) => (
            <div key={creation.date} className="flex gap-16">
              <time className="text-sm w-24 flex-shrink-0">
                {creation.date}
              </time>
              {creation.url ? (
                <a
                  href={creation.url}
                  className="text-sm hover:opacity-60 transition-opacity duration-200"
                >
                  {creation.title}
                </a>
              ) : (
                <span className="text-sm">{creation.title}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
