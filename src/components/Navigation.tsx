'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  currentPage: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const getPageTitle = () => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/problem':
        return 'Problem';
      case '/strategy':
        return 'Strategy';
      case '/protocol':
        return 'Protocol';
      default:
        return currentPage;
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50" ref={dropdownRef}>
      <button
        className="bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0 rounded-xl px-4 py-3 font-semibold cursor-pointer shadow-lg transition-all duration-300 flex items-center gap-2 hover:from-violet-500 hover:to-purple-500 hover:-translate-y-1"
        onClick={toggleMenu}
      >
        {getPageTitle()}
        <span
          className="text-sm transition-transform duration-300"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ▼
        </span>
      </button>
      <div
        className={`nav-dropdown absolute top-full right-0 bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl min-w-48 mt-2 ${
          isOpen ? 'show' : ''
        }`}
      >
        <Link
          href="/"
          className={`block px-4 py-3 no-underline font-medium transition-all duration-200 rounded-lg mx-2 my-1 ${
            pathname === '/'
              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
              : 'text-gray-400 hover:text-violet-400 hover:bg-gray-800/50'
          }`}
        >
          Home
        </Link>
        <Link
          href="/problem"
          className={`block px-4 py-3 no-underline font-medium transition-all duration-200 rounded-lg mx-2 my-1 ${
            pathname === '/problem'
              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
              : 'text-gray-400 hover:text-violet-400 hover:bg-gray-800/50'
          }`}
        >
          Problem
        </Link>
        <Link
          href="/strategy"
          className={`block px-4 py-3 no-underline font-medium transition-all duration-200 rounded-lg mx-2 my-1 ${
            pathname === '/strategy'
              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
              : 'text-gray-400 hover:text-violet-400 hover:bg-gray-800/50'
          }`}
        >
          Strategy
        </Link>
        <Link
          href="/protocol"
          className={`block px-4 py-3 no-underline font-medium transition-all duration-200 rounded-lg mx-2 my-1 ${
            pathname === '/protocol'
              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
              : 'text-gray-400 hover:text-violet-400 hover:bg-gray-800/50'
          }`}
        >
          Protocol
        </Link>
      </div>
    </div>
  );
}
