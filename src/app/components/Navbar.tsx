'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Index' },
  { href: '/about', label: 'About' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b px-6 py-3.5 transition-colors duration-300 sm:px-8 lg:px-10 ${
        scrolled
          ? 'border-line bg-graphite/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="/"
          className="group flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.18em] text-cream"
        >
          <span className="h-2 w-2 rounded-full bg-signal transition-transform group-hover:scale-125" />
          P. Shannon
          <span className="hidden text-muted-dark sm:inline">/ architect</span>
        </a>

        <ul className="flex items-center gap-4 font-mono text-[12px] uppercase tracking-[0.16em] sm:gap-6 sm:tracking-[0.18em]">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative py-1 transition-colors duration-200 hover:text-signal after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-signal after:transition-all after:duration-300 ${
                    active
                      ? 'text-signal after:w-full'
                      : 'text-muted-dark after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              download
              href="/Patrick_Shannon_FullStack_Resume_2026.pdf"
              className="relative py-1 text-cream transition-colors duration-200 hover:text-signal after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-signal after:transition-all after:duration-300 hover:after:w-full"
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
