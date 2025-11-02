'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-10 py-5 uppercase text-white container-xl font-light transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-900/80 backdrop-blur-md shadow-lg border-b border-zinc-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="flex flex-row justify-between">
        <ul className="flex flex-row gap-6">
          <li>
            <a
              href="/"
              className="relative hover:text-zinc-300 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-zinc-300 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="relative hover:text-zinc-300 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-zinc-300 hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;