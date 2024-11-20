import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="bg-blue-600 dark:bg-darkAccent text-white p-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold hover:text-yellow-300 transition duration-300">
          Donát Treszler
        </h1>

        <nav>
          <ul className="flex space-x-6">
            {['about', 'projects', 'skills', 'experience', 'education', 'interests', 'contact'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  className="hover:text-yellow-300 transition duration-300 cursor-pointer"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="ml-6 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? '🌞' : '🌜'}
        </button>
      </div>
    </header>
  );
};

export default Header;
