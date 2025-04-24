import { useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-primary-light dark:bg-primary-dark">
      <h1 className="text-xl font-bold text-white">Portfolio</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}