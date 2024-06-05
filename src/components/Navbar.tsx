"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/panelak.svg'; // Adjust the path to your logo image
import ScrollLink from './ScrollLink';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none lg:hidden"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
            <ScrollLink href="#" className="hidden lg:block ml-4">
              <Image src={logo} alt="Logo" width={55} height={55} />
            </ScrollLink>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <ScrollLink href="#onas" className="text-gray-800 hover:text-gray-600"> O nás</ScrollLink>
            <ScrollLink href="#projekty" className="text-gray-800 hover:text-gray-600">
              Projekty
            </ScrollLink>
            <ScrollLink href="#kontakt" className="text-gray-800 hover:text-gray-600">
              Kontakt
            </ScrollLink>
          </div>
          <div className="lg:hidden">
            <ScrollLink href="#"><Image src={logo} alt="Logo" width={40} height={40} /></ScrollLink>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ScrollLink href="#onas" offset={-180} className="block text-gray-800 hover:text-gray-600">
              O nás
            </ScrollLink>
            <ScrollLink href="#projekty" className="block text-gray-800 hover:text-gray-600">
              Projekty
            </ScrollLink>
            <ScrollLink href="#kontakt" offset={-180} className="block text-gray-800 hover:text-gray-600">
              Kontakt
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;